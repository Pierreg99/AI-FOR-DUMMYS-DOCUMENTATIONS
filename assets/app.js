import {
  cleanState,
  filterChapters,
  tokenCost,
  chainReliability,
  parseProgressBackup,
} from './core.js';
import { labData } from './lab-data.js';
const data = JSON.parse(document.querySelector('#site-data').textContent);
const { labels: t, lang, chapters, paths } = data;
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [
  ...scope.querySelectorAll(selector),
];
const ids = chapters.map((c) => c.id),
  storageKey = 'afe-learning-v2';
let state = cleanState(null, ids),
  toastTimer;
function announce(message) {
  const node = $('#status-message');
  node.textContent = message;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (node.textContent = ''), 5500);
}
try {
  state = cleanState(JSON.parse(localStorage.getItem(storageKey)), ids);
} catch {
  /* Invalid or unavailable storage starts a usable empty session. */
}
function save() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
    return true;
  } catch {
    announce(t.storageError);
    return false;
  }
}
function updateProgress() {
  $$('[data-progress]').forEach((n) => (n.value = state.completed.length));
  $$('[data-progress-count]').forEach(
    (n) => (n.textContent = state.completed.length),
  );
  $$('[data-progress-percent]').forEach(
    (n) =>
      (n.textContent = `${Math.round((state.completed.length / ids.length) * 100)}%`),
  );
  const resume =
    (state.last && !state.completed.includes(state.last) ? state.last : null) ||
    ids.find((id) => !state.completed.includes(id)) ||
    1;
  $$('[data-next-title]').forEach(
    (n) => (n.textContent = chapters.find((c) => c.id === resume).title),
  );
  $$('[data-bookmark-count]').forEach(
    (n) => (n.textContent = state.bookmarks.length),
  );
  $$('[data-resume]').forEach(
    (n) =>
      (n.href = `${data.root}docs/${lang}/${chapters.find((c) => c.id === resume).slug}.html`),
  );
  $$('[data-bookmark]').forEach((button) => {
    const id = Number(button.dataset.bookmark),
      active = state.bookmarks.includes(id),
      title = chapters.find((c) => c.id === id)?.title || '';
    button.setAttribute('aria-pressed', String(active));
    button.setAttribute(
      'aria-label',
      `${active ? t.unbookmark : t.bookmark}: ${title}`,
    );
    button.title = active ? t.unbookmark : t.bookmark;
  });
  $$('[data-complete]').forEach((button) => {
    const active = state.completed.includes(Number(button.dataset.complete));
    button.setAttribute('aria-pressed', String(active));
    $('span', button).textContent = active ? t.undoComplete : t.complete;
  });
  $$('[data-complete-indicator]').forEach(
    (node) =>
      (node.hidden = !state.completed.includes(
        Number(node.dataset.completeIndicator),
      )),
  );
}
$$('[data-bookmark]').forEach((button) =>
  button.addEventListener('click', () => {
    const id = Number(button.dataset.bookmark);
    state.bookmarks = state.bookmarks.includes(id)
      ? state.bookmarks.filter((n) => n !== id)
      : [...state.bookmarks, id];
    save();
    updateProgress();
    refreshLibrary();
  }),
);
$$('[data-complete]').forEach((button) =>
  button.addEventListener('click', () => {
    const id = Number(button.dataset.complete);
    state.completed = state.completed.includes(id)
      ? state.completed.filter((n) => n !== id)
      : [...state.completed, id];
    const persisted = save();
    updateProgress();
    if (persisted)
      announce(state.completed.includes(id) ? t.done : t.undoComplete);
  }),
);
$$('[data-reset]').forEach((button) =>
  button.addEventListener('click', () => {
    state = cleanState(null, ids);
    save();
    updateProgress();
    refreshLibrary();
    announce(t.resetDone);
  }),
);
const current = Number(document.body.dataset.chapter);
if (ids.includes(current)) {
  state.last = current;
  save();
}
window.addEventListener('storage', (event) => {
  if (event.key === storageKey || event.key === null) {
    try {
      state = cleanState(
        event.newValue ? JSON.parse(event.newValue) : null,
        ids,
      );
    } catch {
      state = cleanState(null, ids);
    }
    updateProgress();
    refreshLibrary();
  }
});
updateProgress();
$('[data-theme-toggle]')?.addEventListener('click', () => {
  const theme =
    document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('afe-theme', theme);
  } catch {
    announce(t.storageError);
  }
});
const menu = $('[data-menu]');
function closeMenu() {
  document.body.classList.remove('menu-open');
  menu?.setAttribute('aria-expanded', 'false');
  menu?.setAttribute('aria-label', t.menu);
}
menu?.addEventListener('click', () => {
  const open = document.body.classList.toggle('menu-open');
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? t.closeMenu : t.menu);
});
$('#sidebar')?.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('#sidebar') && !event.target.closest('[data-menu]'))
    closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.classList.contains('menu-open')) {
    closeMenu();
    menu.focus();
  }
  const editing = event.target.closest(
    'input,textarea,select,[contenteditable="true"]',
  );
  if (
    event.key === '/' &&
    !editing &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.altKey &&
    $('#search')
  ) {
    event.preventDefault();
    $('#search').focus();
  }
});
matchMedia('(min-width: 721px)').addEventListener('change', () => closeMenu());
let track = 'all';
const search = $('#search'),
  pathFilter = $('#path-filter');
const cardNodes = new Map(
  $$('.chapter-card').map((n) => [Number(n.dataset.id), n]),
);
function readFilters() {
  return {
    query: search?.value || '',
    track,
    path: pathFilter?.value || 'all',
    bookmarked: $('#bookmarks-only')?.checked,
    unread: $('#unread-only')?.checked,
    sort: $('#sort')?.value || 'number',
  };
}
function updateFilterUrl(filters) {
  const url = new URL(location.href);
  for (const key of ['q', 'track', 'path', 'bookmarks', 'unread', 'sort'])
    url.searchParams.delete(key);
  if (filters.query) url.searchParams.set('q', filters.query);
  if (filters.track !== 'all') url.searchParams.set('track', filters.track);
  if (filters.path !== 'all') url.searchParams.set('path', filters.path);
  if (filters.bookmarked) url.searchParams.set('bookmarks', '1');
  if (filters.unread) url.searchParams.set('unread', '1');
  if (filters.sort === 'title') url.searchParams.set('sort', 'title');
  history.replaceState(null, '', url);
  $$('.languages a').forEach((a) => {
    const target = new URL(a.href);
    target.search = url.search;
    target.hash = url.hash;
    a.href = target.href;
  });
}
function refreshLibrary(updateUrl = false) {
  if (!search) return;
  const filters = readFilters(),
    shown = filterChapters(chapters, filters, state, paths),
    visible = new Set(shown.map((c) => c.id));
  for (const [id, node] of cardNodes) node.hidden = !visible.has(id);
  const fragment = document.createDocumentFragment();
  shown.forEach((c) => fragment.append(cardNodes.get(c.id)));
  $('#chapter-grid').append(fragment);
  $('#result-count').textContent = `${shown.length} ${t.results}`;
  $('#empty-state').hidden = shown.length > 0;
  $$('[data-filter]').forEach((button) =>
    button.setAttribute(
      'aria-pressed',
      String(button.dataset.filter === track),
    ),
  );
  if (updateUrl) updateFilterUrl(filters);
}
function restoreFilters() {
  const params = new URLSearchParams(location.search);
  search.value = (params.get('q') || '').slice(0, 300);
  track = /^[0-5]$/.test(params.get('track')) ? params.get('track') : 'all';
  pathFilter.value = /^[0-2]$/.test(params.get('path'))
    ? params.get('path')
    : 'all';
  $('#bookmarks-only').checked = params.get('bookmarks') === '1';
  $('#unread-only').checked = params.get('unread') === '1';
  $('#sort').value = params.get('sort') === 'title' ? 'title' : 'number';
  refreshLibrary(true);
}
if (search) {
  restoreFilters();
  search.addEventListener('input', () => refreshLibrary(true));
  [pathFilter, $('#bookmarks-only'), $('#unread-only'), $('#sort')].forEach(
    (node) => node.addEventListener('change', () => refreshLibrary(true)),
  );
  $$('[data-filter]').forEach((button) =>
    button.addEventListener('click', () => {
      track = button.dataset.filter;
      refreshLibrary(true);
    }),
  );
  $$('[data-path]').forEach((link) =>
    link.addEventListener('click', (event) => {
      event.preventDefault();
      pathFilter.value = link.dataset.path;
      track = 'all';
      search.value = '';
      $('#bookmarks-only').checked = false;
      $('#unread-only').checked = false;
      refreshLibrary(true);
      $('#library').scrollIntoView();
      search.focus({ preventScroll: true });
    }),
  );
  $$('[data-clear-filters]').forEach((button) =>
    button.addEventListener('click', () => {
      search.value = '';
      track = 'all';
      pathFilter.value = 'all';
      $('#bookmarks-only').checked = false;
      $('#unread-only').checked = false;
      $('#sort').value = 'number';
      refreshLibrary(true);
      search.focus({ preventScroll: true });
    }),
  );
  window.addEventListener('popstate', restoreFilters);
}
$$('[data-print]').forEach((button) =>
  button.addEventListener('click', () => window.print()),
);
$$('pre').forEach((pre) => {
  const code = $('code', pre);
  if (!code) return;
  const button = document.createElement('button');
  button.className = 'code-copy';
  button.textContent = t.copy;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      button.textContent = t.copied;
      setTimeout(() => (button.textContent = t.copy), 2000);
    } catch {
      announce(t.copyError);
    }
  });
  pre.prepend(button);
});
$$('.table-scroll').forEach((table) =>
  table.setAttribute(
    'aria-label',
    lang === 'de'
      ? 'Tabelle, horizontal scrollbar'
      : 'Table, horizontally scrollable',
  ),
);
function openHashTarget() {
  let id;
  try {
    id = decodeURIComponent(location.hash.slice(1));
  } catch {
    return;
  }
  const target = document.getElementById(id);
  const details = target?.closest('details');
  if (details) details.open = true;
}
window.addEventListener('hashchange', openHashTarget);
openHashTarget();
const printDetails = new Map();
window.addEventListener('beforeprint', () => {
  $$('details.answer').forEach((d) => {
    printDetails.set(d, d.open);
    d.open = true;
  });
});
window.addEventListener('afterprint', () => {
  printDetails.forEach((open, d) => (d.open = open));
  printDetails.clear();
});
let mode = 0,
  step = 0;
function renderLab() {
  const flow = $('#lab-flow');
  if (!flow) return;
  flow.replaceChildren();
  labData[lang][mode].forEach((item, i) => {
    const button = document.createElement('button');
    button.className = 'lab-step';
    button.setAttribute('aria-pressed', String(i === step));
    const number = document.createElement('span');
    number.textContent = `0${i + 1}`;
    button.append(number, document.createTextNode(item[0]));
    button.addEventListener('click', () => {
      step = i;
      renderLab();
      $$('.lab-step')[i].focus();
    });
    flow.append(button);
  });
  const [title, description, risk] = labData[lang][mode][step],
    detail = $('#lab-detail');
  detail.replaceChildren();
  const heading = document.createElement('strong');
  heading.textContent = `${t.step} ${step + 1} · ${title}`;
  const body = document.createElement('p');
  body.textContent = description;
  const note = document.createElement('p');
  note.className = 'lab-risk';
  note.textContent = `${t.attention}: ${risk}`;
  detail.append(heading, body, note);
  $$('[data-lab]').forEach((button) => {
    const selected = Number(button.dataset.lab) === mode;
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  $('#lab-panel').setAttribute('aria-labelledby', `lab-tab-${mode}`);
}
$$('[data-lab]').forEach((button) => {
  button.addEventListener('click', () => {
    mode = Number(button.dataset.lab);
    step = 0;
    renderLab();
  });
  button.addEventListener('keydown', (event) => {
    const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    mode =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? 4
          : (mode + (event.key === 'ArrowRight' ? 1 : 4)) % 5;
    step = 0;
    renderLab();
    $(`#lab-tab-${mode}`).focus();
  });
});
renderLab();
const formatNumber = (number, options = {}) =>
  new Intl.NumberFormat(lang, { maximumFractionDigits: 6, ...options }).format(
    number,
  );
function updateCost() {
  const form = $('#cost-form');
  if (!form) return;
  const fields = $$('input', form),
    valid = fields.every((n) => n.validity.valid),
    cost = valid ? tokenCost(...fields.map((n) => n.valueAsNumber)) : null;
  const output = $('#cost-result');
  output.classList.toggle('error', cost === null);
  output.value = cost === null ? t.invalid : formatNumber(cost);
}
function updateReliability() {
  const form = $('#reliability-form');
  if (!form) return;
  const fields = $$('input', form),
    valid = fields.every((n) => n.validity.valid),
    value = valid
      ? chainReliability(...fields.map((n) => n.valueAsNumber))
      : null;
  const output = $('#reliability-result');
  output.classList.toggle('error', value === null);
  output.value =
    value === null
      ? t.invalid
      : `${formatNumber(value, { maximumFractionDigits: 1 })}%`;
}
$('#cost-form')?.addEventListener('input', updateCost);
$('#reliability-form')?.addEventListener('input', updateReliability);
$$('form').forEach((form) =>
  form.addEventListener('submit', (event) => event.preventDefault()),
);
updateCost();
updateReliability();

// Progress backups are validated locally and merged; no upload is performed.
$('[data-export-progress]')?.addEventListener('click', () => {
  const backup = { app: 'ai-for-everyone', version: 1, progress: state };
  const url = URL.createObjectURL(
    new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' }),
  );
  const a = document.createElement('a');
  a.href = url;
  a.download = 'ai-for-everyone-progress.json';
  document.body.append(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  announce(t.exportSuccess);
});
$('[data-import-progress]')?.addEventListener('click', () =>
  $('#progress-import').click(),
);
$('#progress-import')?.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    if (file.size > 32768) throw new Error('Oversized backup');
    const imported = parseProgressBackup(await file.text(), ids);
    state = {
      version: 2,
      completed: [...new Set([...state.completed, ...imported.completed])],
      bookmarks: [...new Set([...state.bookmarks, ...imported.bookmarks])],
      last: imported.last || state.last,
    };
    const persisted = save();
    updateProgress();
    refreshLibrary();
    if (persisted) announce(t.importSuccess);
  } catch {
    announce(t.importError);
  } finally {
    event.target.value = '';
  }
});
const focusButton = $('[data-focus]');
focusButton?.addEventListener('click', () => {
  const active = document.body.classList.toggle('reading-focus');
  focusButton.setAttribute('aria-pressed', String(active));
  $('span', focusButton).textContent = active ? t.exitFocus : t.focus;
});
document.addEventListener('keydown', (event) => {
  if (
    event.key.toLowerCase() === 'f' &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.altKey &&
    !event.target.closest('input,textarea,select,[contenteditable="true"]') &&
    focusButton
  ) {
    event.preventDefault();
    focusButton.click();
  }
});
const readingProgress = $('.reading-progress');
if (readingProgress) {
  let queued = false;
  const update = () => {
    const article = $('.prose'),
      rect = article.getBoundingClientRect();
    const distance = Math.max(1, article.offsetHeight - innerHeight + 130);
    const percent = Math.max(
      0,
      Math.min(100, Math.round(((130 - rect.top) / distance) * 100)),
    );
    readingProgress.setAttribute('aria-valuenow', String(percent));
    $('span', readingProgress).style.width = `${percent}%`;
    queued = false;
  };
  addEventListener(
    'scroll',
    () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  addEventListener('resize', update);
  update();
}
