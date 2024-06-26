import WeatherForecast from '@assets/personal/weather-forecast/weather_forecast.png';
import GymLife from '@assets/personal/gymlife/gymlife.png';
import PalleteClickUp from '@assets/personal/palette_colors_clickup.png';
import ContaAzul from '@assets/personal/conta_azul_pro_home.png';

export type ICaseConcept = {
  image: string;
  descriptionRoles: string;
  title: string;
  figmaURL?: string;
  githubURL?: string;
  comingSoon: boolean;
};

const CasesConcept: ICaseConcept[] = [
  // {
  //   image: MStore,
  //   descriptionRoles: 'Auditória de UX, UX/UI Designer',
  //   title: 'MStore: melhorando interface com uma auditória de UX',
  //   comingSoon: true,
  // },
  {
    image: ContaAzul,
    descriptionRoles: 'UI Designer',
    title: 'Conta Azul Pro: redesign da página principal',
    figmaURL: '',
    comingSoon: true,
  },
  {
    image: PalleteClickUp,
    descriptionRoles: 'UI Designer, Styleguide, Design System',
    title: 'Resource: paleta de cores baseada no ClickUp',
    figmaURL:
      'https://www.figma.com/community/file/1007003859649427952/palette-colors-clickup-1-0',
    comingSoon: false,
  },
  {
    image: WeatherForecast,
    descriptionRoles: 'UI Designer',
    title: 'Weather Forecast: app para acompanhar a previsão do tempo',
    figmaURL:
      'https://www.figma.com/file/o4Be8mHxRE3UbIzdDZvCqL/Weather-Forecast?type=design&node-id=0%3A1&mode=design&t=DaRVFmOPPO3Di5qO-1',
    comingSoon: false,
  },
  {
    image: GymLife,
    descriptionRoles: 'UI Designer, Frontend developer',
    title: 'Gymfile: página de cadastro para academias',
    figmaURL:
      'https://www.figma.com/file/0r9bZxbSauKBwlqnJTMIvY/GymLife?type=design&node-id=1%3A36&mode=design&t=PiUomjubz6OYssmS-1',
    githubURL: 'https://github.com/paulojanai/gymlife',
    comingSoon: false,
  },
];

export default CasesConcept;
