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
      <section className='section-about' id='section-about'>
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
                Meu nome é Paulo Janai Mariano da Silva. Atuo como{' '}
                <span className='highlighted-text'>product designer</span> que
                mora no Canindé, Brasil. Minha principal área hoje é{' '}
                <span className='highlighted-text'>
                  designer de interfaces, design de interação e design systems.
                </span>
              </p>
              <p className='body-md paragraph-high'>
                Acreditando que a construção estruturada de interfaces é a
                melhor maneira de projetar produtos eficientes, intuitivos,
                consistentes e, principalmente, escaláveis.
              </p>
              <p className='body-md paragraph-high'>
                Além disso, gosto de estudar e codificar as coisas do zero
                pensando em cada pixel e pequenas interações, como este meu
                portfolio 😎. Costumo utilizar HTML, Javascript, CSS com Sass e
                alguns frameworks comoReactJS para websites e React Native para
                aplicativos.
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
    </>
  );
}

export default About;
