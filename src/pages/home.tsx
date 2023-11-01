import CardWork from '@components/CardWork';
import GridContainer from '@components/Grid';
import Separator from '@components/Separator';
import CardConcept from '@components/CardConcept';

import Cases from '@data/cases/casesWork';
import CasesConcept from '@data/cases/casesConcept';

import PictureAbout from '@assets/picture-about.webp';

//Logos
import GrupoBoticario from '@assets/grupo_boticario.png';
import CasaMagalhaes from '@assets/cm.png';
import Automacaocom from '@assets/automacao_com.png';
import Button from '@components/Button';
import { FileText } from 'lucide-react';
import ButtonIcon from '@components/ButtonIcon';

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
                  image={item.image}
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
            {CasesConcept.map((item, index) => {
              return (
                <CardConcept
                  key={index}
                  image={item.image}
                  roles={item.roles}
                  title={item.title}
                  comingSoon={item.comingSoon}
                  figmaURL={item.figmaURL}
                  githubURL={item.githubURL}
                />
              );
            })}
          </div>
        </GridContainer>
      </div>

      <div className='section-how-help'>
        <GridContainer>
          <h2>Como eu ajudo</h2>
        </GridContainer>
      </div>

      <div className='section-about'>
        <GridContainer>
          <div className='text-about'>
            <h2>
              Paulo Janai, Product Designer, Developer, atualmente baseado no
              Brasil
            </h2>
            <div className='description'>
              <p className='body-m'>
                Meu nome é Paulo Janai Mariano da Silva. Atuo como product
                designer que mora no Canindé, Brasil. Minha principal área hoje
                é designer de interfaces, sempre estudando e praticando sobre
                design system.
              </p>
              <p className='body-m'>
                Acreditando que a construção estruturada de interfaces é a
                melhor maneira de projetar produtos eficientes, intuitivos,
                consistentes e, principalmente, escaláveis.
              </p>
              <p className='body-m'>
                Além disso, gosto de estudar e codificar as coisas do zero
                pensando em cada pixel e pequenas interações, como este meu
                portfolio 😎. Costumo utilizar HTML, Javascript, CSS com Sass e
                alguns frameworks como ReactJS para websites e React Native para
                aplicativos.
              </p>
            </div>
            <Button className='see-cv'>
              <p className='body-m'>Ver currículo</p>
              <FileText size={24} />
            </Button>
          </div>
          <div className='image-about'>
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
      </div>
    </>
  );
}

export default Home;
