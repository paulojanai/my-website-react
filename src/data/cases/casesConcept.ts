import MStore from '@assets/personal/mstore/mstore.png';
import WeatherForecast from '@assets/personal/weather-forecast/weather_forecast.png';
import GymLife from '@assets/personal/gymlife/gymlife.png';
import PalleteClickUp from '@assets/personal/palette_colors_clickup.png';

export type ICaseConcept = {
  image: string;
  roles: string;
  title: string;
  figmaURL?: string,
  githubURL?: string,
  comingSoon: boolean;
};

const CasesConcept: ICaseConcept[] = [
  {
    image: MStore,
    roles: 'Auditória de UX, UX/UI Designer',
    title: 'MStore: Melhorando interface com uma auditória de UX',
    comingSoon: true,
  },
  {
    image: WeatherForecast,
    roles: 'UI Designer, Frontend developer',
    title: 'Weather Forecast: Aplicativo para acompanhar a previsão do tempo',
    figmaURL: 'https://www.figma.com/file/o4Be8mHxRE3UbIzdDZvCqL/Weather-Forecast?type=design&node-id=0%3A1&mode=design&t=DaRVFmOPPO3Di5qO-1',
    comingSoon: false,
  },
  {
    image: GymLife,
    roles: 'UI Designer, Frontend developer',
    title: 'Gymfile: Página de cadastro para academias',
    figmaURL: 'https://www.figma.com/file/0r9bZxbSauKBwlqnJTMIvY/GymLife?type=design&node-id=1%3A36&mode=design&t=PiUomjubz6OYssmS-1',
    githubURL: 'https://github.com/paulojanai/gymlife',
    comingSoon: false,
  },
  {
    image: PalleteClickUp,
    roles: 'UI Designer, Styleguide, Design System',
    title: 'Resource: Paleta de cores baseada no ClickUp',
    figmaURL: 'https://www.figma.com/community/file/1007003859649427952/palette-colors-clickup-1-0',
    comingSoon: false,
  },
];

export default CasesConcept;