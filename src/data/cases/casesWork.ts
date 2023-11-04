import MyReportOnline from '@assets/my-report-online/my_report_online.png';
import EntregouMeWeb from '@assets/entregoume-white-label/entregou_me_web.png';

export type ICase = {
  client?: string;
  date?: string;
  image: string;
  roles: string;
  title: string;
  href?: string;
  comingSoon: boolean;
};

const MyReport : ICase = {
  client: "Ceará Inspeção",
  date: "Ago 2023 - Em andamento",
  image: MyReportOnline,
  roles: 'Branding, UX/UI Designer, UI Designer, User testing',
  title:
  'Meu relatório online: Plataforma web para ajudar na inspeção predial',
  // href: "cases/my-report-online",
  comingSoon: true,
};

const EntregouMe: ICase = {
  client: "Automação.com",
  date: "Out 2021 - Nov 2021",
  image: EntregouMeWeb,
  roles: 'UX/UI Designer, UI Designer',
  title:
    'Automação.com: Experiência do aplicativo de pedidos adaptada para a web',
    // href: "cases/entregou-me-web",
  comingSoon: true,
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