import ThumbMRO from '@assets/my-report-online/thumb.png';
import BrandMRO from '@assets/my-report-online/brand.png';
import AppMRO from '@assets/my-report-online/app.png';

import ThumbEMW from '@assets/entregoume-client/thumb.png';
import ModalsEMW from '@assets/entregoume-client/modals.png';
import CheckoutEMW from '@assets/entregoume-client/checkout.png';

import AutomacaoCom from '@assets/companies/automacao.com.svg';
import InspecaoCeara from '@assets/companies/inspecao_ceara.svg';

export type IItemNavigationCase = {
  title: string;
  linkID: string;
};

export type ICompany = {
  name: string;
  logo: string;
};

export type ICase = {
  client: ICompany;
  date?: string;
  images: string[];
  title: string;
  description: string;
  role?: string;
  href?: string;
  comingSoon: boolean;
};

const EntregouMe: ICase = {
  client: { name: 'Automação.com', logo: AutomacaoCom },
  date: '2021',
  images: [ThumbEMW, ModalsEMW, CheckoutEMW],
  title: 'Adaptando e melhorando experiência do aplicativo para o navegador',
  description:
    'Projetei a plataforma baseado na experiência e decisões de negócio do aplicativo. Projetei recursos como listagem de produtos, carrinho de compras, ilustrações para estados vazios, detalhes do produto, login e cadastro.',
  // href: "cases/entregoume-client",
  role: 'UI Design',
  comingSoon: true,
};

const MyReport: ICase = {
  client: { name: 'Inspeção Ceará', logo: InspecaoCeara },
  date: '2023 - Presente',
  images: [ThumbMRO, BrandMRO, AppMRO],
  title: `Construindo uma ferramenta de produtividade completa do zero`,
  description:
    'Meu relatório online é uma ferramenta que tem um aplicativo e possui um sistema com acesso através de navegadores. Essa ferramenta auxilia na geração e gerenciamento de relatórios prediais complexos.',
  // href: "cases/my-report-online",
  role: 'Product Designer',
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
