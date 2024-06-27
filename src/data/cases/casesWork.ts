import ThumbMRO from "@assets/my-report-online/thumb.png";
import ThumbEMW from "@assets/entregoume-client/thumb.png";

export type IItemNavigationCase = {
  title: string;
  linkID: string;
};

export type ICompany = {
  name: string;
  logo: string;
};

export type ICase = {
  client?: string;
  date?: string;
  images: string[];
  title: string;
  description: string;
  role?: string;
  products?: string;
  keyDeliverables?: string;
  href?: string;
  comingSoon: boolean;
};

const EntregouMe: ICase = {
  client: "Automação.com",
  date: "2021",
  images: [ThumbEMW],
  title: "Entregou.me",
  description:
    "website para os usuários realizarem compras e acompanharem seus pedidos",
  // href: "cases/entregoume-client",
  role: "UI Design",
  products: "Website",
  keyDeliverables: "Styleguide, Wireframes e Protótipo",
  comingSoon: true,
};

const MyReport: ICase = {
  client: "Ceará Inspeção",
  date: "2023",
  images: [ThumbMRO],
  title: `Meu relatório`,
  description: "aplicativo e webapp para auxiliar na inspeção predial",
  // href: "cases/my-report-online",
  role: "Product Designer",
  products: "WebApp, App Android e Template PDF",
  keyDeliverables: "Brand, Components, Wireframes e Protótipo",
  comingSoon: true,
};

type IProject = {
  MyReportOnline?: ICase;
  EntregouMeWeb?: ICase;
};

export const CasesArray: ICase[] = [EntregouMe, MyReport];

export const CasesObject: IProject = {
  MyReportOnline: MyReport,
  EntregouMeWeb: EntregouMe,
};
