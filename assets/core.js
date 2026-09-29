export const normalize = (value) =>
  String(value)
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase()
    .replace(/ß/g, 'ss');
export function cleanState(value, validIds) {
  const allowed = new Set(validIds);
  const list = (v) =>
    Array.isArray(v)
      ? [...new Set(v.filter((id) => Number.isInteger(id) && allowed.has(id)))]
      : [];
  if (!value || typeof value !== 'object' || value.version !== 2)
    return { version: 2, completed: [], bookmarks: [], last: null };
  return {
    version: 2,
    completed: list(value.completed),
    bookmarks: list(value.bookmarks),
    last: allowed.has(value.last) ? value.last : null,
  };
}
export function filterChapters(
  chapters,
  {
    query = '',
    track = 'all',
    path = 'all',
    bookmarked = false,
    unread = false,
    sort = 'number',
  },
  state,
  paths,
) {
  const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
  return chapters
    .filter(
      (c) =>
        (track === 'all' || c.track === Number(track)) &&
        (path === 'all' || paths[Number(path)]?.includes(c.id)) &&
        (!bookmarked || state.bookmarks.includes(c.id)) &&
        (!unread || !state.completed.includes(c.id)) &&
        terms.every((term) => normalize(c.search || c.title).includes(term)),
    )
    .sort((a, b) =>
      sort === 'title' ? a.title.localeCompare(b.title) : a.id - b.id,
    );
}
export function tokenCost(inputTokens, outputTokens, inputPrice, outputPrice) {
  const numbers = [inputTokens, outputTokens, inputPrice, outputPrice];
  if (
    numbers.some(
      (n) => typeof n !== 'number' || !Number.isFinite(n) || n < 0,
    ) ||
    !Number.isInteger(inputTokens) ||
    !Number.isInteger(outputTokens)
  )
    return null;
  const result =
    (inputTokens * inputPrice + outputTokens * outputPrice) / 1_000_000;
  return Number.isFinite(result) ? result : null;
}
export function chainReliability(probability, steps) {
  if (
    !Number.isFinite(probability) ||
    probability < 0 ||
    probability > 100 ||
    !Number.isInteger(steps) ||
    steps < 1
  )
    return null;
  return (probability / 100) ** steps * 100;
}

export function parseProgressBackup(text, validIds) {
  const value = JSON.parse(text),
    allowed = new Set(validIds);
  if (
    !value ||
    value.app !== 'ai-for-everyone' ||
    value.version !== 1 ||
    value.progress?.version !== 2
  )
    throw new Error('Unsupported backup');
  const progress = value.progress;
  for (const key of ['completed', 'bookmarks'])
    if (
      !Array.isArray(progress[key]) ||
      progress[key].some((id) => !Number.isInteger(id) || !allowed.has(id))
    )
      throw new Error('Invalid chapter IDs');
  if (progress.last !== null && !allowed.has(progress.last))
    throw new Error('Invalid last chapter');
  return cleanState(progress, validIds);
}
