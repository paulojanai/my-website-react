import { Code2, Layers } from 'lucide-react';

import CardWork from '@components/card/CardWork';
import GridContainer from '@components/Grid';
import Separator from '@components/ui/Separator';
import CardConcept from '@components/card/CardConcept';

import { CasesArray } from '@data/cases/casesWork';
import CasesConcept from '@data/cases/casesConcept';

//Logos
import GrupoBoticario from '@assets/grupo_boticario.png';
import CasaMagalhaes from '@assets/cm.png';
import Automacaocom from '@assets/automacao_com.png';

import {
  AllDesignerExpertises,
  AllDesignerTools,
  AllDeveloperExpertises,
  AllDeveloperTools,
} from '@data/global';
import ItemHowHelp from '@components/ItemHowHelp';

import imageStars from '@assets/starts.svg';
import MyProfile from '@assets/my_photo_hero.png';

function Home() {
  const isMobile: boolean = window.innerWidth < 768;

  return (
    <div className='homepage'>
      <section className='section-hero'>
        <GridContainer>
          <div className='text'>
            <div className='header'>
              <div className='title' data-aos='fade-up'>
                <p className='body-2xl'>Com mais de 4 anos de experiência</p>
                <div className='container-title'>
                  <h1 className='display-lg'>Product Designer</h1>
                  <img
                    className='image-profile-hero'
                    src={MyProfile}
                    alt='Minha imagem de perfil'
                  />
                </div>
                <span className='display-lg color-grayscale-300'>
                  & Frontend Developer
                </span>
              </div>
              <p
                className='body-lg paragraph-high'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                Continuamente colaborando com negócio, designers e
                desenvolvedores para aprimorar as experiências dos usuários
                desde a criação e evolução, através de soluções de design e
                desenvolvimento.
              </p>
            </div>

            <div className='companies' data-aos='fade-up' data-aos-delay='600'>
              <p className='span'>Trabalhou com</p>
              <div className='list'>
                <a href='https://www.grupoboticario.com.br' target='_blank'>
                  <img src={GrupoBoticario} alt='Logo Grupo Boticário' />
                </a>
                <a href='https://www.casamagalhaes.com.br' target='_blank'>
                  <img src={CasaMagalhaes} alt='Logo Casa Magalahães' />
                </a>
                <a href='https://www.sysautomacao.com.br' target='_blank'>
                  <img src={Automacaocom} alt='Logo Automação.com' />
                </a>
              </div>
            </div>
          </div>
        </GridContainer>
      </section>

      <section className='section-works' id='section-works'>
        <GridContainer>
          <h2 data-aos='fade-up'>Trabalhos</h2>

          <div className='listview-works'>
            {CasesArray.map((item, index) => {
              return (
                <CardWork
                  key={index}
                  client={item.client}
                  date={item.date}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  comingSoon={item.comingSoon}
                />
              );
            })}
          </div>
        </GridContainer>
      </section>

      <section className='section-concept'>
        <GridContainer>
          <h2 data-aos='fade-up'>Pessoais e conceito</h2>

          <div className='listview-concepts'>
            {CasesConcept.map((item, index) => {
              return (
                <CardConcept
                  key={index}
                  image={item.image}
                  descriptionRoles={item.descriptionRoles}
                  title={item.title}
                  comingSoon={item.comingSoon}
                  figmaURL={item.figmaURL}
                  githubURL={item.githubURL}
                />
              );
            })}
          </div>
        </GridContainer>
      </section>

      <section className='section-how-help' id='section-how-help'>
        <GridContainer>
          <div className='title'>
            <h2 data-aos='fade-up'>Como eu ajudo</h2>

            <p className='body-lg paragraph-medium' data-aos='fade-up'>
              Contrate-me se precisar de um designer de produto, visual
              designer, criação e manutenção de design system, desenvolvimento
              front-end.
            </p>

            <img
              className='image-stars'
              src={imageStars}
              alt=''
              data-aos='fade-down'
              data-aos-duration='3000'
            />
          </div>

          <div className='designer-developer' data-aos='fade-up'>
            <div className='card-help designer'>
              <div className='card-header'>
                <Layers size={isMobile ? 28 : 40} color='white' />
                <h3>Designer</h3>
                <p className='body-md paragraph-medium'>
                  Pensando estrategicamente, desenhando interfaces estruturadas
                  e interações inteligentes
                </p>
              </div>

              <Separator />

              <div className='card-body'>
                <div className='group'>
                  <p className='body-lg'>Habilidades</p>
                  <ul className='list'>
                    {AllDesignerExpertises.map((item, index) => {
                      return <ItemHowHelp key={index} label={item} />;
                    })}
                  </ul>
                </div>

                <div className='group'>
                  <p className='body-lg'>Ferramentas</p>
                  <ul className='list'>
                    {AllDesignerTools.map((item, index) => {
                      return <ItemHowHelp key={index} label={item} />;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className='card-help developer'>
              <div className='card-header'>
                <Code2 size={isMobile ? 28 : 40} color='white' />
                <h3>Developer</h3>
                <p className='body-md paragraph-medium'>
                  Curto em codificar as coisas do zero e dá vidas as ideias na
                  forma de aplicativos ou websites
                </p>
              </div>

              <Separator />

              <div className='card-body'>
                <div className='group'>
                  <p className='body-lg'>Habilidades</p>
                  <ul className='list'>
                    {AllDeveloperExpertises.map((item, index) => {
                      return <ItemHowHelp key={index} label={item} />;
                    })}
                  </ul>
                </div>

                <div className='group'>
                  <p className='body-lg'>Ferramentas</p>
                  <ul className='list'>
                    {AllDeveloperTools.map((item, index) => {
                      return <ItemHowHelp key={index} label={item} />;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </GridContainer>
      </section>
    </div>
  );
}

export default Home;
