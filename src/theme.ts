
export function initTheme(): void {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle') as HTMLButtonElement | null;
  if (!btn) return;

  const SUN = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>`;
  const MOON = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>`;

  function apply(theme: string): void {
    root.setAttribute('data-theme', theme);
    // Show the icon of the mode you'd switch TO.
    btn!.innerHTML = theme === 'dark' ? SUN : MOON;
    btn!.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
    );
  }

  // Reflect whatever the inline head script already set.
  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    apply(next);
  });
}
