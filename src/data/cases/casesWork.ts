import MyReportOnline from '@assets/my-report-online/my_report_online.png';
import EntregouMeWeb from '@assets/entregoume-white-label/entregou_me_client.png';

export type IItemNavigationCase = {
  title: string,
  linkID: string,
}

export const CaseNavigationItems: IItemNavigationCase[] = [{
  title: "Visão geral",
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
  description: string;
  roles?: string;
  products?: string;
  team?: string;
  href?: string;
  comingSoon: boolean;
};

const MyReport : ICase = {
  client: "Ceará Inspeção",
  date: "2023 - Em andamento",
  image: MyReportOnline,
  descriptionRoles: 'Branding, Research, UX/UI Designer, UI Designer',
  title:
  `Meu relatório`,
  description: "aplicativo e webapp para auxiliar na inspeção predial",
  // href: "cases/my-report-online",
  roles: 'UX/UI Designer, Visual Design, Graphic Design, Illustrations',
  products: 'WebApp, App Android e Template PDF',
  team: 'Júnior, Willamy Silva e Eu',  
  comingSoon: true,
};

const EntregouMe: ICase = {
  client: "Automação.com",
  date: "2021",
  image: EntregouMeWeb,
  descriptionRoles: 'UX/UI Designer, UI Designer',
  title:
    'Entregou.me',
    description: "plataforma para gerenciar, realizar e acompanhar pedidos",
    // href: "cases/entregou-me-web",
    roles: 'UX/UI Designer, Visual Design',
  products: 'Website',
  team: 'Eu',
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