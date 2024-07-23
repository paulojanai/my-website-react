import PalleteClickUp from '@assets/personal/palette_colors_clickup.webp';
import ContaAzul from '@assets/personal/conta_azul_pro_home.webp';
import JerseyEagles2025 from '@assets/personal/jersey_eagles_2025.webp';
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
    image: JerseyEagles2025,
    descriptionRoles: 'Graphic Design, Jersey, Volleyball Team',
    title: 'Eagles: Jersey oficial Eagles Vôlei Canindé 2025',
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
