
import { uniProjects, personalProjects, miscProjects, experiences, toolGroups } from './data';
import { renderMainList, renderExperiences, renderTools } from './render';
import { initSidebar, initTabs } from './sidebar';

renderMainList(uniProjects,      'main-list-uni');
renderMainList(personalProjects, 'main-list-personal');
renderMainList(miscProjects,     'main-list-misc');
renderExperiences(experiences);
renderTools(toolGroups);
initSidebar();
initTabs();
