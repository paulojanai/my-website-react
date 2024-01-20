import GridContainer from '@components/Grid';
import ButtonIcon from '@components/button/ButtonIcon';

function About() {
  return (
    <>
      <section className='section-gallery'>
        <GridContainer>
          <h1>Gallety</h1>
        </GridContainer>
      </section>
      <section className='section-about'>
        <GridContainer>
          <div className='text-about'>
            <div className='text-caption' data-aos='fade-up'>
              <p className='body-lg-strong'>Sobre minha jornada</p>
              <p className='body-md'>Ponto de partida, foco e vida pessoal</p>
            </div>

            <h2 data-aos='fade-up'>
              Paulo Janai, Product Designer, Developer, atualmente morando no
              Brasil
            </h2>

            <div className='description' data-aos='fade-up'>
              <p className='body-md paragraph-high'>
                Meu nome é Paulo Janai Mariano da Silva. Sou brasileiro nascido
                e criado no interior do estado do Ceará. Desde cedo costumava
                explorar essa área de programação e design, em 2013, aos 15
                anos, comecei a estudar profundamente sobre essas áreas
                juntamente com a minha grade escolar comum. Isso marca o início
                da minha carreira como desenvolver e designer.
              </p>
              <p className='body-md paragraph-high'>
                Moro em Canindé, Brasil - atualmente, atuo como product designer
                e como desenvolvedor frontend de vez em quando. Minha principal
                área hoje é designer de interfaces, sempre estudando e
                praticando sobre design system. Acreditando que a construção
                estruturada de interfaces é a melhor maneira de projetar
                produtos eficientes, intuitivos, consistentes e, principalmente,
                escaláveis.
              </p>
              <p className='body-md paragraph-high'>
                Além disso, gosto de estudar e codificar as coisas do zero
                pensando em cada pixel e pequenas interações, como este meu
                portfolio. Costumo utilizar HTML, Javascript, CSS com Sass e
                alguns frameworks como ReactJS para websites e React Native para
                aplicativos.
              </p>
              <p className='body-md paragraph-high'>
                Quando não estou na frente do computador, amo treinar e
                participar de competições de voleibol. Gosto de música e sou
                apaixona em tocar contra-baixo e violão. Além disso, gosto de
                está bastante com minha família, amigos (jogando vôlei e jogos
                de tabuleiro) e minha esposa.
              </p>
            </div>
            {/* <Button className='see-cv'>
              <p className='body-md'>Ver currículo</p>
              <FileText size={24} />
            </Button> */}
          </div>
          <div className='plataforms' data-aos='fade-up'>
            <div className='text-caption'>
              <p className='body-lg-strong'>Em plataformas</p>
              <p className='body-md paragraph-medium'>
                As DMs estão abertos – fique à vontade para entrar em contato.
              </p>
            </div>
            <div className='group-social'>
              <ButtonIcon
                href='https://www.figma.com/@paulo_janai'
                nameIcon='Figma'
              />
              <ButtonIcon
                href='https://twitter.com/paulo_janai'
                nameIcon='Twitter'
              />
              <ButtonIcon
                href='https://github.com/paulojanai'
                nameIcon='Github'
              />
              <ButtonIcon
                href='https://www.linkedin.com/in/paulojanai/'
                nameIcon='Linkedin'
              />
            </div>
          </div>
        </GridContainer>
      </section>
      <section className='section-career'>
        <GridContainer>
          <h2>Carreira - até aqui</h2>

          <div className='listview-experiences'>
            <div className='past-experiences'>
              <p className='title'>EXPERIÊNCIAS PASSADAS</p>
              <ul>
                <li className='experience'>
                  <p className='body-lg'>Product Designer</p>
                  <p className='body-xl'>Grupo Boticário</p>
                  <p className='body-lg'>
                    Jul 2022 - Mar 2023, Brasil (Remote)
                  </p>
                </li>
                <li className='experience'>
                  <p className='body-lg'>UX/UI Designer</p>
                  <p className='body-xl'>Casa Magalhães</p>
                  <p className='body-lg'>
                    Mar 2021 - Ago 2022, (Brasil) Remoto
                  </p>
                </li>
                <li className='experience'>
                  <p className='body-lg'>Mobile Developer & UI Designer</p>
                  <p className='body-xl'>Automação.com</p>
                  <p className='body-lg'>Fev 2020 - Fev 2021, Canindé-CE</p>
                </li>
                <li className='experience'>
                  <p className='body-lg'>UX/UI Designer & Frontend Developer</p>
                  <p className='body-xl'>CET Tecnologia</p>
                  <p className='body-lg'>Mar 2019 - Nov 2019, Remoto</p>
                </li>
              </ul>
            </div>

            <div className='current'>
              <p className='title'>PRESENTE</p>
              <ul>
                <li className='experience'>
                  <p className='body-lg'>Product Designer & Partner</p>
                  <p className='body-xl'>Nocap Studio</p>
                  <p className='body-lg'>Set 2023 - Present, (Brasil) Remoto</p>
                </li>
              </ul>
            </div>
          </div>
        </GridContainer>
      </section>
    </>
  );
}

export default About;
