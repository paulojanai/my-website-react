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
import { Code2, Layers } from 'lucide-react';
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
    </>
  );
}

export default Home;
