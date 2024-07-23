import PalleteClickUp from '@assets/personal/palette_colors_clickup.webp';
import ContaAzul from '@assets/personal/conta_azul_pro_home.webp';
import EleicaoAgil from '@assets/personal/eleicao_agil.webp';
import WeatherForecast from '@assets/personal/weather_forecast.webp';

export type ICaseConcept = {
  image: string;
  descriptionRoles: string;
  title: string;
  figmaURL?: string;
  githubURL?: string;
  comingSoon: boolean;
};

const CasesConcept: ICaseConcept[] = [
  {
    image: PalleteClickUp,
    descriptionRoles: 'UI Designer, Styleguide, Design System',
    title: 'Resource: paleta de cores baseada no ClickUp',
    figmaURL:
      'https://www.figma.com/community/file/1007003859649427952/palette-colors-clickup-1-0',
    comingSoon: false,
  },
  {
    image: EleicaoAgil,
    descriptionRoles: 'WebApp, UX/UI Designer',
    title: 'Eleição Ágil: tornando eficiente e prática a coleta de boletins',
    figmaURL: '',
    comingSoon: true,
  },
  {
    image: ContaAzul,
    descriptionRoles: 'Landing Page, UI Designer',
    title: 'Conta Azul Pro: redesign da página principal',
    figmaURL: '',
    comingSoon: true,
  },
  {
    image: WeatherForecast,
    descriptionRoles: 'Mobile App, UI Designer',
    title: 'Weather Forecast: app para acompanhar a previsão do tempo',
    figmaURL:
      'https://www.figma.com/file/o4Be8mHxRE3UbIzdDZvCqL/Weather-Forecast?type=design&node-id=0%3A1&mode=design&t=DaRVFmOPPO3Di5qO-1',
    comingSoon: false,
  },
];

export default CasesConcept;
