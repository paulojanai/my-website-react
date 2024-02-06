import MyReportOnline from '@assets/my-report-online/my_report_online.png';
import EntregouMeWeb from '@assets/entregoume-client/entregou_me_client.png';

export type IItemNavigationCase = {
  title: string,
  linkID: string,
}

export type ICase = {
  client?: string;
  date?: string;
  image: string;
  title: string;
  description: string;
  roles?: string;
  products?: string;
  keyDeliverables?: string;
  href?: string;
  comingSoon: boolean;
};

const MyReport : ICase = {
  client: "Ceará Inspeção",
  date: "2023",
  image: MyReportOnline,
  title:
  `Meu relatório`,
  description: "aplicativo e webapp para auxiliar na inspeção predial",
  // href: "cases/my-report-online",
  roles: 'UX/UI Designer, Visual Design, Graphic Design, Illustrations',
  products: 'WebApp, App Android e Template PDF',
  keyDeliverables: 'Brand, Components, Wireframes e Protótipo',  
  comingSoon: true,
};

const EntregouMe: ICase = {
  client: "Automação.com",
  date: "2021",
  image: EntregouMeWeb,
  title:
    'Entregou.me',
    description: "website para os usuários realizarem compras e acompanhar seus pedidos",
    // href: "cases/entregoume-client",
    roles: 'UX/UI Designer, Visual Design',
  products: 'Website',
  keyDeliverables: 'Styleguide, Wireframes e Protótipo',
  comingSoon: true
};

type IProject = {
  MyReportOnline?: ICase;
  EntregouMeWeb?: ICase;
}

export const CasesArray: ICase[] = [
  EntregouMe,
  MyReport
];

export const CasesObject: IProject = {
  MyReportOnline : MyReport,
  EntregouMeWeb: EntregouMe,
}