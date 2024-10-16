import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import GridContainer from '@components/Grid';
import ButtonIcon from '@components/button/ButtonIcon';

import imgProfile from '@assets/about/profile.webp';
import imgPaisagem from '@assets/about/paisagem.webp';
import imgLove from '@assets/about/love.webp';
import imgKeyboard from '@assets/about/keyboard.webp';
import imgPC from '@assets/about/pc.webp';
import imgColors from '@assets/about/colors.webp';
import imgApp from '@assets/about/app.webp';
import imgVolleyAttack from '@assets/about/volleyball_attack.webp';
import imgVolleyBack from '@assets/about/volleyball_back.webp';
import imgFont1 from '@assets/about/font_sentient.svg';
import imgFont2 from '@assets/about/font_sora.svg';
import Signature from '@assets/about/signature.svg';

function About() {
  const triggerRef: React.RefObject<HTMLDivElement> = useRef(null);
  const photoRef: React.RefObject<HTMLDivElement> = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sTotalWidth = triggerRef.current?.scrollWidth;
    const windowWidthScreen = window.innerWidth;

    const finalTranslateX = (sTotalWidth ?? 0) - windowWidthScreen;

    console.log(finalTranslateX);

    const pin = gsap.to(photoRef.current, {
      translateX: -finalTranslateX,
      ease: 'none',
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: '28.75 100',
        end: '2000 bottom',
        scrub: 1,
        pin: true,

        // markers: {
        //   startColor: 'green',
        //   endColor: 'red',
        //   fontSize: '18px',
        //   fontWeight: 'bold',
        //   indent: 20,
        // },
      },
    });

    gsap.fromTo(
      '.section-gallery',
      { opacity: 0 },
      {
        opacity: 1,
        delay: 0.3,
        duration: 3,
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <>
      <section className='section-gallery'>
        <div ref={triggerRef} className='container-scroll-wheel'>
          <div ref={photoRef} className='photos-container'>
            <div className='me'>
              <img
                src={imgProfile}
                alt='Imagem de perfil'
                className='img-about img-profile'
              />
            </div>
            <div className='traveling'>
              <p className='text-traveling'>
                Viagem com a esposa para <br />a serra de Guaramiranga ❤️
              </p>
              <img
                src={imgPaisagem}
                alt='Uma paisagem'
                className='img-about img-paisagem'
              />
              <img
                src={imgLove}
                alt='Imagem com meu amor'
                className='img-about img-love'
              />
            </div>
            <div className='my-setup'>
              <p className='text-setup-1'>
                - Mouse logitech MX master 3 <br />- Keyboard logitech MX Keys
              </p>
              <p className='text-setup-2'>
                - 1TB SSD e 32GB RAM
                <br />
                - processador i5-12400F
                <br />
                - GPU Radeon RX 6600
                <br />
                - case montech Sky 2<br />
              </p>
              <img
                src={imgKeyboard}
                alt='Imagem de um teclado'
                className='img-about img-keyboard'
              />
              <img
                src={imgPC}
                alt='Imagem do meu PC'
                className='img-about img-pc'
              />
            </div>
            <div className='ui-design'>
              <p className='text-colors'>
                Paleta de cores com 9 variables <br />
                baseada no sistema ClickUP
              </p>

              <p className='text-app'>
                App projetado para o programa
                <br />
                de seleção dev.academy
              </p>
              <img
                src={imgColors}
                alt='Um design de uma cor'
                className='img-about img-colors'
              />
              <img
                src={imgApp}
                alt='Telas de um app'
                className='img-about img-app'
              />
            </div>
            <div className='volleyball'>
              <p className='text-volleyball'>
                Jogando na cidade de Itapiúna. <br />
                Jogo pela fase de grupos da Copa <br />
                Sertão Maciço de Voleibol 2023
              </p>
              <img
                src={imgVolleyAttack}
                alt='Eu jogando'
                className='img-about img-volley-attack'
              />
              <img
                src={imgVolleyBack}
                alt='Eu jogando'
                className='img-about img-volley-back'
              />
            </div>
            <div className='fonts'>
              <img
                src={imgFont1}
                alt='Eu jogando'
                className='img-font img-font-1'
              />
              <img
                src={imgFont2}
                alt='Eu jogando'
                className='img-font img-font-2'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='section-about'>
        <GridContainer>
          <div className='text-about'>
            <div className='text-caption' data-aos='fade-up'>
              <p className='body-lg-strong'>Sobre minha jornada</p>
              <p className='body-md'>Ponto de partida, foco e vida pessoal</p>
            </div>

            <h2 data-aos='fade-up'>
              Paulo Janai, Product Designer, Frontend Developer, atualmente
              morando no Brasil
            </h2>

            <div className='description' data-aos='fade-up'>
              <p className='body-md paragraph-high'>
                Meu nome é Paulo Janai Mariano da Silva. Sou brasileiro nascido
                e criado no interior do estado do Ceará. Desde cedo costumava
                explorar essa área de programação e design, em 2013, aos 15
                anos, comecei a estudar profundamente sobre essas áreas
                juntamente com a minha grade escolar comum. Isso marca o início
                da minha carreira como desenvolvedor e designer.
              </p>
              <p className='body-md paragraph-high'>
                Moro em Canindé, Brasil - atualmente, atuo como product designer
                na Nocap Studio e como desenvolvedor frontend. Minha principal
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
                apaixonado em tocar contra-baixo e violão. Além disso, gosto de
                está bastante com minha família, amigos (jogando vôlei e jogos
                de tabuleiro) e minha esposa.
              </p>
            </div>
          </div>

          <div className='plataforms'>
            <div className='signature' data-aos='fade-up'>
              <img className='img-signature' src={Signature} alt='' />
            </div>
            <div className='text-caption' data-aos='fade-up'>
              <p className='body-lg-strong'>Em plataformas</p>
              <p className='body-md paragraph-medium'>
                As DMs estão abertos – fique à vontade para entrar em contato.
              </p>
            </div>
            <div className='group-social' data-aos='fade-up'>
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
          <h2 data-aos='fade-up'>Carreira - até aqui</h2>

          <div className='listview-experiences' data-aos='fade-up'>
            <div className='past-experiences'>
              <p className='title'>EXPERIÊNCIAS PASSADAS</p>
              <ul>
                <li className='experience'>
                  <p className='body-md'>Jul 2022 - Mar 2023</p>
                  <p className='body-xl'>Product Designer</p>
                  <p className='body-md'>Grupo Boticário (Remote)</p>
                </li>
                <li className='experience'>
                  <p className='body-md'>Mar 2021 - Ago 2022</p>
                  <p className='body-xl'>UX/UI Designer</p>
                  <p className='body-md'>Casa Magalhães (Remoto)</p>
                </li>
                <li className='experience'>
                  <p className='body-md'>Fev 2020 - Fev 2021</p>
                  <p className='body-xl'>Mobile Developer e UI Designer</p>
                  <p className='body-md'>Automação.com</p>
                </li>
                <li className='experience'>
                  <p className='body-md'>Mar 2019 - Nov 2019</p>
                  <p className='body-xl'>UI Designer e Frontend Developer</p>
                  <p className='body-md'>CET Tecnologia (Remoto)</p>
                </li>
              </ul>
            </div>

            <div className='current'>
              <p className='title'>PRESENTE</p>
              <ul>
                <li className='experience'>
                  <p className='body-md'>2023 - Presente</p>
                  <p className='body-xl'>Co-fundador e Product Designer</p>
                  <p className='body-md'>Nocap Studio (Remoto)</p>
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
