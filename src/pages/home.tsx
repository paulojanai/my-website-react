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
import { Code2, Layers } from 'lucide-react';
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
          <h2 data-aos='fade-up'>Trabalhos selecionados</h2>

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
          <h2 data-aos='fade-up'>Projetos pessoais e Conceito</h2>

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
          <h2 data-aos='fade-up'>Como eu ajudo</h2>

          <p className='body-l-paragraph' data-aos='fade-up'>
            Contrate-me se precisar de um designer de produto, visual designer,
            criação e manutenção de design system, desenvolvimento front-end.
          </p>

          <div className='design-developer' data-aos='fade-up'>
            <div className='card-help'>
              <div className='card-header'>
                <Layers size={40} color='white' />
                <h3>Designer</h3>
                <p className='body-m'>
                  Pensando estrategicamente e desenhando interfaces
                  estruturadas, interações inteligentes e utilizando padrões de
                  UI
                </p>
              </div>

              <Separator />

              <div className='card-body'>
                <div className='group'>
                  <p className='body-l'>Habilidades</p>
                  <ul className='list'>
                    <li className='body-m'>Padrões de UI</li>
                    <li className='body-m'>Pesquisa de usuários</li>
                    <li className='body-m'>Análise de competidores</li>
                    <li className='body-m'>Handoff</li>
                    <li className='body-m'>Design System</li>
                    <li className='body-m'>Design de interação</li>
                    <li className='body-m'>Prototipagem</li>
                    <li className='body-m'>Teste de usabilidade</li>
                  </ul>
                </div>

                <div className='group'>
                  <p className='body-l'>Ferramentas</p>
                  <ul className='list'>
                    <li className='body-m'>Figma & Adobe XD</li>
                    <li className='body-m'>Papel & Caneta</li>
                    <li className='body-m'>LottieFiles</li>
                    <li className='body-m'>SVGator</li>
                    <li className='body-m'>Maze</li>
                    <li className='body-m'>Miro</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='card-help'>
              <div className='card-header'>
                <Code2 size={40} color='white' />
                <h3>Developer</h3>
                <p className='body-m'>
                  Curto em codificar as coisas do zero e dá vidas as ideias no
                  mobile e na web
                </p>
              </div>

              <Separator />

              <div className='card-body'>
                <div className='group'>
                  <p className='body-l'>Habilidades</p>
                  <ul className='list'>
                    <li className='body-m'>Websites</li>
                    <li className='body-m'>Web Apps</li>
                    <li className='body-m'>Padrões de UI</li>
                    <li className='body-m'>Desenvolvimento Cross-Platform</li>
                    <li className='body-m'>Integração e Deploy</li>
                  </ul>
                </div>

                <div className='group'>
                  <p className='body-l'>Ferramentas</p>
                  <ul className='list'>
                    <li className='body-m'>HTML & CSS (Sass)</li>
                    <li className='body-m'>Javascript</li>
                    <li className='body-m'>Expo CLI</li>
                    <li className='body-m'>React JS</li>
                    <li className='body-m'>Github</li>
                    <li className='body-m'>VS Code</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </GridContainer>
      </div>

      <div className='section-about'>
        <GridContainer>
          <div className='text-about'>
            <h2 data-aos='fade-up'>
              Paulo Janai, Product Designer, Developer, atualmente baseado no
              Brasil
            </h2>
            <div className='description' data-aos='fade-up'>
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
            {/* <Button className='see-cv'>
              <p className='body-m'>Ver currículo</p>
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
      </div>
    </>
  );
}

export default Home;
