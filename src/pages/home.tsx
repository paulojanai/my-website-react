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

import TagDS from '@assets/tags/tag_design_system.svg';
import TagUI from '@assets/tags/tag_interface_design.svg';
import TagBS from '@assets/tags/tag_business.svg';
import TagMI from '@assets/tags/tag_microinteractions.svg';
import TagFD from '@assets/tags/tag_frontend_developer.svg';
import TagPT from '@assets/tags/tag_prototyping.svg';

import imageMePhoto from '@assets/about/my_photo.png';

import imageStars from '@assets/starts.svg';

function Home() {
  const isMobile: boolean = window.innerWidth < 768;

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      ease: 'circ',
      repeatRefresh: true,
      delay: 1.2,
    });

    tl.to('.tag-ui', {
      duration: 1,
      opacity: 1,
    })
      .to('.tag-ui', {
        delay: 2.5,
        duration: 0.5,
        opacity: 0,
      })
      .to('.tag-ds', {
        duration: 1,
        opacity: 1,
      })
      .to('.tag-ds', {
        delay: 2.5,
        duration: 0.5,
        opacity: 0,
      })
      .to('.tag-bs', {
        duration: 1,
        opacity: 1,
      })
      .to('.tag-bs', {
        delay: 2.5,
        duration: 0.5,
        opacity: 0,
      })
      .to('.tag-fd', {
        duration: 1,
        opacity: 1,
      })
      .to('.tag-fd', {
        delay: 2.5,
        duration: 0.5,
        opacity: 0,
      })
      .to('.tag-pt', {
        duration: 1,
        opacity: 1,
      })
      .to('.tag-pt', {
        delay: 2.5,
        duration: 0.5,
        opacity: 0,
      })
      .to('.tag-mi', {
        duration: 1,
        opacity: 1,
      })
      .to('.tag-mi', {
        delay: 2.5,
        duration: 0.5,
        opacity: 0,
      });
  });

  return (
    <div className='homepage'>
      <section className='section-hero'>
        <GridContainer dataAos='fade-up'>
          <div className='text'>
            <div className='header'>
              <div className='title'>
                <div className='hello'>
                  <h3>Opa,</h3>
                  <img
                    src={HandHello}
                    alt='Hand hello'
                    className='hand-hello'
                  />
                </div>

                <h1 className='display-lg'>Paulo Janai</h1>
                <div className='current-company'>
                  <p className='body-2xl'>
                    Product Designer e Frontend Developer
                  </p>
                  {/* <a&nbsp;
                    href='https://www.instagram.com/nocapsttudio/'
                    className='company body-2xl'
                    target='_blank'
                  >
                    Nocap Studio
                  </a> */}
                </div>
              </div>
              <p className='body-lg paragraph-medium'>
                Com mais de 4 anos de experiência. Continuamente colaborando com
                negócio, designers e desenvolvedores para aprimorar as
                experiências dos usuários desde a criação e evolução, através de
                soluções de design e desenvolvimento.
              </p>
            </div>

            <div className='companies'>
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

          <div className='box-picture'>
            <img src={imageMePhoto} className='my-picture' alt='Minha foto' />
            <div className='tags-container'>
              <img
                src={TagUI}
                alt='Tag Interface Design'
                className='tags tag-ui'
              />

              <img
                src={TagDS}
                alt='Tag Design System'
                className='tags tag-ds'
              />

              <img src={TagBS} alt='Tag Business' className='tags tag-bs' />

              <img
                src={TagFD}
                alt='Tag Frontend Developer'
                className='tags tag-fd'
              />

              <img src={TagPT} alt='Tag Prototyping' className='tags tag-pt' />

              <img
                src={TagMI}
                alt='Tag Microinteractions'
                className='tags tag-mi'
              />
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
