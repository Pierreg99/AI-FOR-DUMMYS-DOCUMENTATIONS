// Applied before paint; browsing remains usable when storage is disabled.
document.documentElement.classList.add('js');
try {
  const theme = localStorage.getItem('afe-theme');
  document.documentElement.dataset.theme =
    theme === 'dark' || theme === 'light'
      ? theme
      : matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
} catch {
  document.documentElement.dataset.theme = matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches
    ? 'dark'
    : 'light';
}
