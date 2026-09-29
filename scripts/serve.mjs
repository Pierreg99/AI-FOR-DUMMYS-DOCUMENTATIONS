import http from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=resolve(fileURLToPath(new URL('../dist/',import.meta.url)));
const port=Number(process.env.PORT || 4173);
const base=(process.env.BASE_PATH || '').replace(/\/$/,'');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.json':'application/json','.md':'text/plain; charset=utf-8','.xml':'application/xml'};
if(!existsSync(root)){console.error('Run npm run build first.');process.exit(1);}
const server=http.createServer((req,res)=>{
 try{
  let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if(base && pathname!==base && !pathname.startsWith(base+'/')){res.writeHead(404);return res.end('Not found');}
  pathname=pathname.slice(base.length);
  let file=resolve(root, '.'+ (pathname || '/'));
  if(file!==root && !file.startsWith(root+sep)){res.writeHead(403);return res.end('Forbidden');}
  if(existsSync(file)&&statSync(file).isDirectory()) file=resolve(file,'index.html');
  if(!existsSync(file)||!statSync(file).isFile()){res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});return createReadStream(resolve(root,'404.html')).pipe(res);}
  res.writeHead(200,{'Content-Type':mime[extname(file)] || 'application/octet-stream','Cache-Control':'no-store'});
  createReadStream(file).pipe(res);
 }catch{res.writeHead(400);res.end('Bad request');}
});
server.listen(port,'127.0.0.1',()=>console.log(`Preview: http://127.0.0.1:${port}${base}/`));
