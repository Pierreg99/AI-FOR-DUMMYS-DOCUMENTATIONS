import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync,existsSync} from 'node:fs';
import path from 'node:path';
import {Marked} from 'marked';
import {loadCatalog,renderMarkdown} from '../scripts/content.mjs';
const root=process.cwd();
const catalog=loadCatalog(root);
function files(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(d=>d.isDirectory()?files(path.join(dir,d.name)):[path.join(dir,d.name)]);}

test('all 36 chapters have substantive German and English editions with matching scope',()=>{
 assert.deepEqual(catalog.map(c=>c.id),Array.from({length:36},(_,i)=>i+1));
 assert.equal(new Set(catalog.map(c=>c.slug)).size,36);
 for(const c of catalog){
  assert.ok(c.prerequisites.every(n=>n<c.id&&n>=1));
  const headings={};
  for(const lang of ['de','en']){
   const d=c.locales[lang];
   assert.ok(d.source.split(/\s+/).length>=220,`${lang}/${c.slug} must teach more than a stub`);
   headings[lang]=[...d.body.matchAll(/^## /gm)].length;
   for(const heading of (lang==='de'?['Lernziel','Übung','Lösung und Selbstkontrolle','Quellen und Vertiefung','Weiterlernen']:['Learning goal','Exercise','Answer and self-check','Sources and further reading','Keep learning']))assert.ok(d.body.includes(`## ${heading}`),`${lang}/${c.slug}: missing ${heading}`);
   assert.ok(d.body.includes('https://'),`${c.slug}: no primary reading source`);
   if(lang==='en')assert.doesNotMatch(d.body,/\b(Lernziel|Lösung|Dokumentationsstandard|Productionsreife|Kostenmodell|Erfolgsrate)\b/);
  }
  assert.equal(headings.de,headings.en,`${c.slug}: section parity`);
 }
});

test('all local Markdown links resolve, including every legacy entry point',()=>{
 for(const file of files(root).filter(p=>p.endsWith('.md')&&!p.includes('/node_modules/')&&!p.includes('/dist/')&&!p.includes('/.git/')&&!p.includes('/test-results/'))){
  const md=new Marked();
  md.walkTokens(md.lexer(readFileSync(file,'utf8')),token=>{
   if(token.type!=='link'||/^(https?:|mailto:|#)/.test(token.href))return;
   const [href]=token.href.split('#');
   assert.ok(existsSync(path.resolve(path.dirname(file),decodeURIComponent(href.split('?')[0]))),`${path.relative(root,file)} -> ${token.href}`);
  });
 }
});

test('built pages preserve every internal link, asset, anchor and language counterpart',()=>{
 const htmlFiles=files(path.join(root,'dist')).filter(p=>p.endsWith('.html'));
 assert.equal(htmlFiles.length,86);
 const pages=new Map(htmlFiles.map(p=>[p,readFileSync(p,'utf8')]));
 for(const [file,html] of pages){
  assert.doesNotMatch(html,/\{\{\w+\}\}/);
  assert.equal((html.match(/<h1\b/g)||[]).length,1,`${file}: exactly one primary heading`);
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(new Set(ids).size,ids.length,`${file}: duplicate DOM IDs`);
  for(const match of html.matchAll(/<(?:a|link|script|img)\b[^>]*?\b(?:href|src)="([^"]+)"/g)){
   const href=match[1].replace(/&amp;/g,'&');
   if(/^https?:/.test(href))continue;
   const resolved=new URL(href,`https://local.invalid/${path.relative(path.join(root,'dist'),file)}`);
   let target=path.join(root,'dist',decodeURIComponent(resolved.pathname));
   if(resolved.pathname.endsWith('/'))target=path.join(target,'index.html');
   assert.ok(existsSync(target),`${path.relative(root,file)} -> ${href}`);
   if(resolved.hash&&target.endsWith('.html'))assert.ok(pages.get(target)?.includes(`id="${decodeURIComponent(resolved.hash.slice(1))}"`),`${file}: missing anchor ${href}`);
  }
 }
});

test('Markdown renderer escapes raw HTML and rejects executable URLs',()=>{
 const rendered=renderMarkdown('<script>alert(1)</script>\n\n## A heading\n\n## A heading');
 assert.ok(rendered.html.includes('&lt;script&gt;'));
 assert.doesNotMatch(rendered.html,/<script/);
 assert.deepEqual(rendered.toc.map(h=>h.id),['a-heading','a-heading-1']);
 assert.throws(()=>renderMarkdown('[click](javascript:alert%281%29)'),/Unsupported/);
 assert.throws(()=>renderMarkdown('[click](data:text\/html,test)'),/Unsupported/);
});
