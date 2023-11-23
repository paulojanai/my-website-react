import MyReportOnline from '@assets/my-report-online/my_report_online.png';
import EntregouMeWeb from '@assets/entregoume-white-label/entregou_me_web.png';

export type IItemNavigationCase = {
  title: string,
  linkID: string,
}

export const CaseNavigationItems: IItemNavigationCase[] = [{
  title: "Overview",
  linkID: "section-overview"
},
{
  title: "Entregáveis",
  linkID: "section-deliverables"
},
{
  title: "Visuais",
  linkID: "section-visuals"
},
{
  title: "Resultados",
  linkID: "section-results"
}]

export type ICase = {
  client?: string;
  date?: string;
  image: string;
  descriptionRoles: string;
  title: string;
  roles?: string[];
  products?: string[];
  team?: string[];
  href?: string;
  comingSoon: boolean;
};

const MyReport : ICase = {
  client: "Ceará Inspeção",
  date: "2023 - Em andamento",
  image: MyReportOnline,
  descriptionRoles: 'Branding, UX/UI Designer, UI Designer, User testing',
  title:
  'Meu relatório online: Plataforma web para ajudar na inspeção predial',
  // href: "cases/my-report-online",
  roles: ['UX/UI Designer', 'Visual Design', 'Graphic Design', 'Illustrator'],
  products: ['Aplicativo', 'WebApp', 'Template PDF'],
  team: ['Junin, FS Developer e PM','Willamy, Fullstack Developer','(Eu), Product Designer'],  
  comingSoon: true,
};

const EntregouMe: ICase = {
  client: "Automação.com",
  date: "2021",
  image: EntregouMeWeb,
  descriptionRoles: 'UX/UI Designer, UI Designer',
  title:
    'Automação.com: Experiência do aplicativo de pedidos adaptada para a web',
    // href: "cases/entregou-me-web",
    roles: ['UX/UI Designer', 'Visual Design'],
  products: ['Website'],
  team: ['(Eu), Product Designer'],
  comingSoon: true
};

type IProject = {
  MyReportOnline?: ICase;
  EntregouMeWeb?: ICase;
}

export const CasesArray: ICase[] = [
  MyReport,
  EntregouMe
];

export const CasesObject: IProject = {
  MyReportOnline : MyReport,
  EntregouMeWeb: EntregouMe,
}