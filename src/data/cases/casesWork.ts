import MyReportOnline from '@assets/my-report-online/my_report_online.png';
import EntregouMeWeb from '@assets/entregoume-white-label/entregou_me_web.png';

export type ICase = {
  image: string;
  roles: string;
  title: string;
  comingSoon: boolean;
};

const Cases: ICase[] = [
  {
    image: MyReportOnline,
    roles: 'Branding, UX/UI Designer, UI Designer, User testing',
    title:
      'Meu relatório online: Plataforma web para ajudar na inspeção predial',
    comingSoon: true,
  },
  {
    image: EntregouMeWeb,
    roles: 'UX/UI Designer, UI Designer',
    title:
      'Automação.com: Experiência do aplicativo de pedidos adaptada para a web',
    comingSoon: true,
  },
];

export default Cases;