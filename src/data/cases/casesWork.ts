import ThumbMRO from '@assets/my-report-online/thumb.webp';
import BrandMRO from '@assets/my-report-online/brand.webp';
import AppMRO from '@assets/my-report-online/app.webp';
import ModalTypesMRO from '@assets/my-report-online/modal_reports_types.webp';

import ThumbEMW from '@assets/entregoume-client/thumb.webp';
import ModalsEMW from '@assets/entregoume-client/modals.webp';
import CheckoutEMW from '@assets/entregoume-client/checkout.webp';

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
  images: [ThumbMRO, ModalTypesMRO, BrandMRO, AppMRO],
  title: `Construindo uma ferramenta de produtividade completa do zero`,
  description:
    'Meu relatório online é uma ferramenta que tem um aplicativo android e possui um sistema com acesso através de navegadores. Essa ferramenta auxilia na geração e gerenciamento de relatórios prediais complexos.',
  // href: "cases/my-report-online",
  role: 'Product Designer',
  comingSoon: true,
};

type IProject = {
  EntregouMeWeb?: ICase;
  MyReportOnline?: ICase;
};

export const CasesArray: ICase[] = [MyReport, EntregouMe];

export const CasesObject: IProject = {
  EntregouMeWeb: EntregouMe,
  MyReportOnline: MyReport,
};
