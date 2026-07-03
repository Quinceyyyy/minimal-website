
const EMAIL = 'frederickjeffcock@gmail.com';

export function initSidebar(): void {
  const sidebar    = document.getElementById('sidebar')       as HTMLElement;
  const tab        = document.getElementById('sidebar-tab')   as HTMLButtonElement;

  const tabLabel   = document.getElementById('tab-label')     as HTMLSpanElement;
  const copyBtn    = document.getElementById('copy-email-btn') as HTMLButtonElement;
  const copyConfirm = document.getElementById('copy-confirm') as HTMLSpanElement;

  let isOpen = false;
  let closeTimer: ReturnType<typeof setTimeout> | null = null;

  function open(): void {
    isOpen = true;
    sidebar.classList.add('open');
    tab.classList.add('open');

    tabLabel.textContent = 'close';
  }

  function close(): void {
    isOpen = false;
    sidebar.classList.remove('open');
    tab.classList.remove('open');

    tabLabel.textContent = 'about me';
  }

  tab.addEventListener('click', () => isOpen ? close() : open());

  sidebar.addEventListener('mouseenter', () => {
    if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
    if (!isOpen) open();
  });

  sidebar.addEventListener('mouseleave', () => {
    closeTimer = setTimeout(() => { if (isOpen) close(); }, 120);
  });

  tab.addEventListener('mouseenter', () => {
    if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
  });

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) close();
  });

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const el = document.createElement('textarea');
      el.value = EMAIL;
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    copyConfirm.classList.add('show');
    setTimeout(() => copyConfirm.classList.remove('show'), 2000);
  });
}

export function initTabs(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.sb-tab-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab as string;
      buttons.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.sb-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`panel-${target}`)?.classList.add('active');
    });
  });
}
