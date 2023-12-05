import CardWork from '@components/card/CardWork';
import GridContainer from '@components/Grid';
import Separator from '@components/ui/Separator';
import CardConcept from '@components/card/CardConcept';

import { CasesArray } from '@data/cases/casesWork';
import CasesConcept from '@data/cases/casesConcept';

import PictureAbout from '@assets/picture-about.webp';

//Logos
import GrupoBoticario from '@assets/grupo_boticario.png';
import CasaMagalhaes from '@assets/cm.png';
import Automacaocom from '@assets/automacao_com.png';
import { Code2, Layers } from 'lucide-react';
import ButtonIcon from '@components/button/ButtonIcon';
import {
  AllDesignerExpertises,
  AllDesignerTools,
  AllDeveloperExpertises,
  AllDeveloperTools,
} from '@data/global';
import ItemHowHelp from '@components/ItemHowHelp';

function Home() {
  return (
    <>
      <section className='section-hero'>
        <GridContainer dataAos='fade-right'>
          <p className='body-xl'>Opa, eu sou Paulo Janai 👋🏾</p>
          <div className='text'>
            <h1 className='display-lg'>
              Product designer &{' '}
              <span className='color-grayscale-300'>
                <h1 className='display-lg'>frontend developer</h1>
              </span>
            </h1>
            <p className='body-xl paragraph-medium'>
              Focado na criação e evolução das experiências dos usuários através
              de soluções de design. Com mais de 4 anos de experiência.
            </p>
          </div>

          <div className='companies'>
            <p className='body-lg'>Trabalhou em</p>
            <div className='list'>
              <img src={GrupoBoticario} alt='Logo Grupo Boticário' />
              <img src={CasaMagalhaes} alt='Logo Casa Magalahães' />
              <img src={Automacaocom} alt='Logo Automação.com' />
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

      <GridContainer>
        <Separator />
      </GridContainer>

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
          <h2 data-aos='fade-up'>Como eu ajudo</h2>

          <p className='body-lg paragraph-medium' data-aos='fade-up'>
            Contrate-me se precisar de um designer de produto, visual designer,
            criação e manutenção de design system, desenvolvimento front-end.
          </p>

          <div className='design-developer' data-aos='fade-up'>
            <div className='card-help'>
              <div className='card-header'>
                <Layers size={40} color='white' />
                <h3>Designer</h3>
                <p className='body-md paragraph-medium'>
                  Pensando estrategicamente e desenhando interfaces estruturadas
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
                <p className='body-md paragraph-medium'>
                  Curto em codificar as coisas do zero e dá vidas as ideias no
                  mobile e na web
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

      <section className='section-about' id='section-about'>
        <GridContainer>
          <div className='text-about'>
            <h2 data-aos='fade-up'>
              Paulo Janai, Product Designer, Developer, atualmente morando no
              Brasil
            </h2>
            <div className='description' data-aos='fade-up'>
              <p className='body-md paragraph-medium'>
                Meu nome é Paulo Janai Mariano da Silva. Atuo como{' '}
                <span className='highlighted-text'>product designer</span> que
                mora no Canindé, Brasil. Minha principal área hoje é{' '}
                <span className='highlighted-text'>
                  designer de interfaces, design de interação e design systems.
                </span>
              </p>
              <p className='body-md paragraph-medium'>
                Acreditando que a{' '}
                <span className='highlighted-text'>
                  construção estruturada de interfaces
                </span>{' '}
                é a melhor maneira de projetar produtos{' '}
                <span className='highlighted-text'>
                  eficientes, intuitivos, consistentes e, principalmente,
                  escaláveis.
                </span>
              </p>
              <p className='body-md paragraph-medium'>
                Além disso, gosto de{' '}
                <span className='highlighted-text'>
                  estudar e codificar as coisas do zero
                </span>{' '}
                pensando em cada pixel e pequenas interações, como este meu
                portfolio 😎. Costumo utilizar{' '}
                <span className='highlighted-text'>
                  HTML, Javascript, CSS com Sass
                </span>{' '}
                e alguns frameworks como{' '}
                <span className='highlighted-text'>ReactJS</span> para websites
                e <span className='highlighted-text'>React Native</span> para
                aplicativos.
              </p>
            </div>
            {/* <Button className='see-cv'>
              <p className='body-md'>Ver currículo</p>
              <FileText size={24} />
            </Button> */}
          </div>
          <div className='image-about' data-aos='fade-up'>
            <img src={PictureAbout} alt='Foto de Paulo Janai' />
            <div className='group-social'>
              <ButtonIcon
                href='https://www.linkedin.com/in/paulojanai/'
                nameIcon='Linkedin'
              />
              <ButtonIcon
                href='https://github.com/paulojanai'
                nameIcon='Github'
              />
            </div>
          </div>
        </GridContainer>
      </section>
    </>
  );
}

export default Home;
