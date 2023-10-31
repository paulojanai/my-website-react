import CardWork from '@components/CardWork';
import GridContainer from '@components/Grid';
import Separator from '@components/Separator';
import CardConcept from '@components/CardConcept';

import Cases from '@data/cases/casesWork';

import MStore from '@assets/personal/mstore/mstore.png';
import WeatherForecast from '@assets/personal/weather-forecast/weather_forecast.png';
import GymLife from '@assets/personal/gymlife/gymlife.png';
import PalleteClickUp from '@assets/personal/palette_colors_clickup.png';

//Logos
import GrupoBoticario from '@assets/grupo_boticario.png';
import CasaMagalhaes from '@assets/cm.png';
import Automacaocom from '@assets/automacao_com.png';

function Home() {
  return (
    <>
      <div className='section-hero'>
        <GridContainer dataAos='fade-right'>
          <h5>Opa, eu sou Paulo Janai 👋🏾</h5>
          <h1>
            Product designer e front-end developer com foco na criação e
            evolução das experiências do usuário através de soluções de design
          </h1>

          <div className='companies'>
            <p className='body-l'>Trabalhou em</p>
            <div className='list'>
              <img src={GrupoBoticario} alt='Logo Grupo Boticário' />
              <img src={CasaMagalhaes} alt='Logo Casa Magalahães' />
              <img src={Automacaocom} alt='Logo Automação.com' />
            </div>
          </div>
        </GridContainer>
      </div>

      <div className='section-works'>
        <GridContainer>
          <h2>Trabalhos selecionados</h2>

          <div className='listview-works'>
            {Cases.map((item, index) => {
              return (
                <CardWork
                  key={index}
                  img={item.image}
                  roles={item.roles}
                  title={item.title}
                  comingSoon={item.comingSoon}
                />
              );
            })}
          </div>
        </GridContainer>
      </div>

      <GridContainer>
        <Separator />
      </GridContainer>

      <div className='section-concept'>
        <GridContainer>
          <h2>Projetos pessoais e Conceito</h2>

          <div className='listview-concepts'>
            <CardConcept
              img={MStore}
              roles='Auditória de UX, UX/UI Designer'
              title='MStore: Melhorando interface com uma auditória de UX'
              comingSoon
            />

            <CardConcept
              img={WeatherForecast}
              roles='UI Designer, Frontend developer'
              title='Weather Forecast 2.0: Aplicativo para acompanhar a previsão do tempo'
              linkFigma='#'
              linkRepo='#'
            />

            <CardConcept
              img={GymLife}
              roles='UI Designer, Frontend developer'
              title='Gymfile: Página de cadastro para  academias'
              linkFigma='#'
              linkRepo='#'
            />

            <CardConcept
              img={PalleteClickUp}
              roles='UI Designer, Styleguide, Design System'
              title='Resource: Paleta de cores baseada no ClickUp'
              linkFigma='#'
            />
          </div>
        </GridContainer>
      </div>
    </>
  );
}

export default Home;
