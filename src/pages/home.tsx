import { useEffect } from 'react';
import { gsap } from 'gsap';
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
import HandHello from '@assets/hand-hello.png';

import TagDS from '@assets/tag_design_system.svg';
import TagUI from '@assets/tag_interface_design.svg';
import TagBS from '@assets/tag_business.svg';
import TagMI from '@assets/tag_microinteractions.svg';
import TagFD from '@assets/tag_frontend_developer.svg';
import TagPT from '@assets/tag_prototyping.svg';

import imageStars from '@assets/starts.svg';

function Home() {
  useEffect(() => {
    gsap.defaults({
      opacity: 1,
      repeat: -1,
      ease: 'circ',
      repeatRefresh: true,
    });

    gsap.to('.tag-ui', {
      x: 'random(0, 390)',
      y: 'random(0, 495)',
      duration: 3.5,
    });
    gsap.to('.tag-ds', {
      x: 'random(0, 260)',
      y: 'random(0, 195)',
      duration: 4.5,
    });
    gsap.to('.tag-bs', {
      x: 'random(0, 495)',
      y: 'random(0, 195)',
      duration: 5.5,
    });
    gsap.to('.tag-fd', {
      x: 'random(0, 315)',
      y: 'random(0, 195)',
      duration: 5,
    });
    gsap.to('.tag-pt', {
      x: 'random(0, 370)',
      y: 'random(0, 195)',
      duration: 4,
    });
    gsap.to('.tag-mi', {
      x: 'random(0, 825)',
      y: 'random(0, 195)',
      duration: 3,
    });
  });

  return (
    <>
      <section className='section-hero'>
        <div className='tags-container'>
          <div className='zone-tag-ui' data-aos='zoom-in'>
            <img
              src={TagUI}
              alt='Tag Interface Design'
              className='tags tag-ui'
            />
          </div>
          <div className='zone-tag-ds' data-aos='zoom-in'>
            <img src={TagDS} alt='Tag Design System' className='tags tag-ds' />
          </div>

          <div className='zone-tag-bs' data-aos='zoom-in'>
            <img src={TagBS} alt='Tag Business' className='tags tag-bs' />
          </div>

          <div className='zone-tag-fd' data-aos='zoom-in'>
            <img
              src={TagFD}
              alt='Tag Frontend Developer'
              className='tags tag-fd'
            />
          </div>

          <div className='zone-tag-pt' data-aos='zoom-in'>
            <img src={TagPT} alt='Tag Prototyping' className='tags tag-pt' />
          </div>

          <div className='zone-tag-mi' data-aos='zoom-in'>
            <img
              src={TagMI}
              alt='Tag Microinteractions'
              className='tags tag-mi'
            />
          </div>
        </div>
        <GridContainer dataAos='fade-right'>
          <div className='hello'>
            <p className='body-xl'>
              Opa, eu sou <span className='color-white'>Paulo Janai</span>
            </p>
            <img src={HandHello} alt='Hand hello' className='hand-hello' />
          </div>
          <div className='text'>
            <h1 className='display-lg'>
              Product <span className='italic'>Designer</span> &
              <span className='italic'> Developer</span>
            </h1>
            <p className='body-xl paragraph-medium'>
              Focado na criação e evolução das experiências dos usuários através
              de soluções de design. Com mais de 4 anos de experiência.
            </p>
          </div>

          <div className='companies'>
            <p className='span'>Trabalhou em</p>
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
        </GridContainer>
      </section>

      <section className='section-works' id='section-works'>
        <GridContainer>
          <h2 data-aos='fade-up'>Trabalhos selecionados</h2>

          <div className='listview-works'>
            {CasesArray.map((item, index) => {
              return (
                <CardWork
                  key={index}
                  image={item.image}
                  descriptionRoles={item.descriptionRoles}
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
          <h2 data-aos='fade-up'>Projetos pessoais e Conceito</h2>

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

            <img className='image-stars' src={imageStars} alt='' />
          </div>

          <div className='design-developer' data-aos='fade-up'>
            <div className='card-help'>
              <div className='card-header'>
                <Layers size={40} color='white' />
                <h3>Designer</h3>
                <p className='body-sm paragraph-medium'>
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
            <div className='card-help'>
              <div className='card-header'>
                <Code2 size={40} color='white' />
                <h3>Developer</h3>
                <p className='body-sm paragraph-medium'>
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
    </>
  );
}

export default Home;
