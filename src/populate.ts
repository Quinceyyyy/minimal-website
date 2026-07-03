
import type { SiteContent } from './data';

export function populate(content: SiteContent): void {
  // -- Meta --
  document.title = content.meta.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', content.meta.description);

  // -- Sidebar --
  const sb = content.sidebar;
  setText('.sb-name', sb.name);
  setText('.sb-role', sb.role);
  setText('.sb-badge', sb.badge);
  setText('.sb-panel-text', sb.about);
  setText('.sb-footer', sb.footer);

  // Education
  const eduContainer = document.querySelector('.about-section');
  if (eduContainer) {
    const label = eduContainer.querySelector('.about-section-label');
    // Clear old items but keep the label
    eduContainer.innerHTML = '';
    if (label) eduContainer.appendChild(label);

    sb.education.forEach((edu) => {
      const div = document.createElement('div');
      div.className = 'about-edu-item';
      div.innerHTML = `
        <p class="about-edu-title">${edu.title}</p>
        <p class="about-edu-detail">${edu.detail}</p>
      `;
      eduContainer.appendChild(div);
    });
  }

  // Misc chips
  const miscSection = document.querySelectorAll('.about-section')[1];
  if (miscSection) {
    const label = miscSection.querySelector('.about-section-label');
    miscSection.innerHTML = '';
    if (label) miscSection.appendChild(label);

    const chips = document.createElement('div');
    chips.className = 'chips';
    sb.misc.forEach((item) => {
      const span = document.createElement('span');
      span.className = 'chip';
      span.textContent = item;
      chips.appendChild(span);
    });
    miscSection.appendChild(chips);
  }

  // Sidebar links
  const linkedinLink = document.querySelector('.sb-links .sb-link[href]') as HTMLAnchorElement;
  if (linkedinLink) linkedinLink.href = sb.links.linkedin;

  const cvEn = document.getElementById('cv-en') as HTMLAnchorElement | null;
  if (cvEn) cvEn.href = sb.links.cvFileEn;

  const cvFr = document.getElementById('cv-fr') as HTMLAnchorElement | null;
  if (cvFr) cvFr.href = sb.links.cvFileFr;

  // -- Main --
  const m = content.main;
  const h1 = document.querySelector('.main h1');
  if (h1) h1.textContent = m.name;

  const subtitle = document.querySelector('.main .subtitle');
  if (subtitle) subtitle.textContent = m.subtitle;

  // Socials
  const socialsDiv = document.querySelector('.socials');
  if (socialsDiv) {
    socialsDiv.innerHTML = '';
    m.socials.forEach((s) => {
      const a = document.createElement('a');
      a.href = s.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = s.label;
      socialsDiv.appendChild(a);
    });
  }

  // -- Sections (project lists) --
  const mainEl = document.getElementById('main') as HTMLElement;
  // Remove existing sections so we rebuild from JSON
  mainEl.querySelectorAll('.section').forEach((s) => s.remove());

  content.sections.forEach((sec) => {
    const projects = content[sec.dataKey] as SiteContent['uniProjects'];
    if (!projects) return;

    const section = document.createElement('section');
    section.className = 'section';

    const h2 = document.createElement('h2');
    h2.className = 'section-label';
    h2.textContent = sec.label;
    section.appendChild(h2);

    const ul = document.createElement('ul');
    ul.id = sec.id;
    ul.className = 'link-list';
    projects.forEach((p) => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${p.url}">${p.name}</a>`;
      ul.appendChild(li);
    });
    section.appendChild(ul);

    mainEl.appendChild(section);
  });
}

function setText(selector: string, text: string): void {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}
