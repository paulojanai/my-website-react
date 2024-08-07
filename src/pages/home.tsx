import { Code2, ExternalLink, Layers, MoveUp } from 'lucide-react';

import CardWork from '@components/card/CardWork';
import GridContainer from '@components/Grid';
import Separator from '@components/ui/Separator';
import CardConcept from '@components/card/CardConcept';

import { CasesArray } from '@data/cases/casesWork';
import CasesConcept from '@data/cases/casesConcept';

//Logos
import GrupoBoticario from '@assets/companies/grupo_boticario.svg';
import CasaMagalhaes from '@assets/companies/casamagalhaes.png';
import Automacaocom from '@assets/companies/automacaocom.svg';

import {
  AllDesignerExpertises,
  AllDesignerTools,
  AllDeveloperExpertises,
  AllDeveloperTools,
} from '@data/global';
import ItemHowHelp from '@components/ItemHowHelp';

import imageStars from '@assets/starts.svg';
import MyProfile from '@assets/my_photo_hero.png';
import MyStudio from '@assets/my_studio.png';
import QuickPages from '@assets/products/quickpages.svg';

const AllImages = () => {
  return (
    <div className='all-images'>
      <a href='' className='box-image' data-aos='fade-left'>
        <img
          className='image-hero'
          src={MyProfile}
          alt='Minha imagem de perfil'
        />
      </a>
      <a
        href='https://www.nocapstudio.com.br'
        className='box-image'
        data-aos='fade-left'
        target='_blank'
      >
        <div className='description' data-aos='fade-up' data-aos-delay='600'>
          <p className='body-md'>Co-fundador do estúdio Nocap</p>
          <MoveUp color='#4E5256' size={24} />
        </div>
        <img
          className='image-hero img-studio'
          src={MyStudio}
          alt='Meu estúdio de design e tecnologia'
        />
      </a>
    </div>
  );
};

function Home() {
  const widthScreen = window.innerWidth;
  const isMobile: boolean = widthScreen < 768;

  return (
    <div className='homepage'>
      <section className='section-hero'>
        <GridContainer>
          <div className='text'>
            <div className='header'>
              <div className='title' data-aos='fade-up'>
                <p className='body-2xl'>Com mais de 4 anos de experiência</p>
                <div className='text-product-designer'>
                  <h1 className='display-lg'>Product Designer</h1>
                  <AllImages />
                </div>
                <span className='display-lg color-grayscale-300'>
                  & Frontend Developer
                </span>
              </div>
              <p
                className='body-lg paragraph-high'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                Continuamente colaborando com negócio, designers e
                desenvolvedores para aprimorar as experiências dos usuários
                desde a criação e evolução, através de soluções de design e
                desenvolvimento.
              </p>
            </div>

            <div className='companies' data-aos='fade-up' data-aos-delay='200'>
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
          <div className='listview-works'>
            {CasesArray.map((item, index) => {
              return (
                <CardWork
                  key={index}
                  client={item.client}
                  date={item.date}
                  images={item.images}
                  title={item.title}
                  role={item.role}
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
          <h2 data-aos='fade-up'>O que ando construindo</h2>

          <div className='listview-products' data-aos='fade-up'>
            <p className='body-xl'>Produtos</p>
            <a
              href='https://paulojanai.com/'
              className='card-product'
              target='_blank'
            >
              <div className='product-img-container'>
                <img className='img-product' src={QuickPages} alt='' />
                <ExternalLink
                  className='external-link-mobile'
                  color='#A1A6AA'
                  size={24}
                />
              </div>
              <div className='description'>
                <p className='body-lg-strong'>Quickpages</p>
                <p className='body-md paragraph-normal'>
                  Desenhe e desenvolva sites de forma prática e rápida. Um
                  produto por{' '}
                  <a href='https://www.nocapstudio.com.br' target='_blank'>
                    Nocap Studio
                  </a>
                </p>
              </div>
              <ExternalLink
                className='external-link-desktop'
                color='#A1A6AA'
                size={32}
              />
            </a>
          </div>

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
              <div className='card-header' data-aos='fade-up'>
                <Layers size={isMobile ? 28 : 40} color='white' />
                <h3>Designer</h3>
                <p className='body-md paragraph-medium'>
                  Pensando estrategicamente, desenhando interfaces estruturadas
                  e interações inteligentes
                </p>
              </div>

              <Separator animation='fade-up' />

              <div className='card-body' data-aos='fade-up'>
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
              <div className='card-header' data-aos='fade-up'>
                <Code2 size={isMobile ? 28 : 40} color='white' />
                <h3>Developer</h3>
                <p className='body-md paragraph-medium'>
                  Curto em codificar as coisas do zero e dá vidas as ideias na
                  forma de aplicativos ou websites
                </p>
              </div>

              <Separator animation='fade-up' />

              <div className='card-body' data-aos='fade-up'>
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
