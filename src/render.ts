
import { Project, Experience, ToolGroup } from './data';

export function renderMainList(projects: Project[], listId: string): void {
  const list = document.getElementById(listId) as HTMLUListElement;
  if (!list) return;
  projects.forEach((p) => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${p.url}">${p.name}</a>`;
    list.appendChild(li);
  });
}

export function renderExperiences(experiences: Experience[]): void {
  const container = document.getElementById('exp-list') as HTMLElement;
  if (!container) return;
  experiences.forEach((e) => {
    const div = document.createElement('div');
    div.className = 'exp-item';
    div.innerHTML = `
      <p class="exp-title">${e.title}${e.company ? ` — ${e.company}` : ''}</p>
      <p class="exp-date">${e.period}</p>
      <p class="exp-desc">${e.desc}</p>
    `;
    container.appendChild(div);
  });
}

export function renderTools(groups: ToolGroup[]): void {
  const container = document.getElementById('tools-list') as HTMLElement;
  if (!container) return;
  groups.forEach((g) => {
    const div = document.createElement('div');
    div.className = 'tool-group';
    div.innerHTML = `
      <p class="tool-group-label">${g.label}</p>
      <div class="chips">${g.items.map(i => `<span class="chip">${i}</span>`).join('')}</div>
    `;
    container.appendChild(div);
  });
}
