
import type { SiteContent } from './data';
import content from './content.json';
import { populate } from './populate';
import { renderExperiences, renderTools } from './render';
import { initSidebar, initTabs } from './sidebar';
import { initTheme } from './theme';

const data = content as SiteContent;

populate(data);
renderExperiences(data.experiences);
renderTools(data.toolGroups);
initSidebar(data.sidebar.links.email);
initTabs();
initTheme();
