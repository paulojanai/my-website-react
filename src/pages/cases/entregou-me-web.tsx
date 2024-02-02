import GridContainer from '@components/Grid';
import { NavigationCase } from '@components/ui/NavigationCase';
import { CaseSectionHero } from '@components/case/CaseSectionHero';
import Button from '@components/button/Button';
import { CaseSectionItem } from '@components/case/CaseSectionItem';
import { CaseNavigationItems, CasesObject } from '@data/cases/casesWork';
import { useNav } from '@hooks/useNav';
import { ArrowUpRight } from 'lucide-react';

import imageDefault from '@assets/image.png';
import imageWirefameHigh from '@assets/entregoume-white-label/wireframe_high.png';
import imageStyleguide from '@assets/entregoume-white-label/styleguide.png';

function EntregouMeWeb() {
  const project = CasesObject['EntregouMeWeb'];

  const overviewRef = useNav({ navLinkID: 'section-overview' });
  const deliverablesRef = useNav({ navLinkID: 'section-deliverables' });
  const visualsRef = useNav({ navLinkID: 'section-visuals' });
  // const resultsRef = useNav({ navLinkID: 'section-results' });

  return (
    <>
      <CaseSectionHero project={project} />

      <section className='about-case'>
        <GridContainer>
          <NavigationCase items={CaseNavigationItems} />

          <main>
            <section
              ref={overviewRef}
              className='section-case'
              id='section-overview'
            >
              <div className='listview'>
                <CaseSectionItem title='Sobre'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      <span className='highlighted-text'>Entregou.me</span> é um
                      produto digital que permite pequenos negócios criarem e
                      gerenciarem seu negócio onde os clientes têm acesso para
                      realizarem e acompanharem seus pedidos. Este produto
                      possui duas frentes:{' '}
                      <span className='highlighted-text'>
                        entregou.me gestor
                      </span>{' '}
                      e{' '}
                      <span className='highlighted-text'>
                        entregou.me client
                      </span>
                      . O gestor é uma plataforma web e o client é um
                      aplicativo.
                    </p>
                    <p className='body-lg paragraph-medium'>
                      O objetivo deste projeto é proporcionar ao cliente final
                      (usuário do client) realizar e acompanhar seus pedidos
                      através do navegador e assim aumentar as vendas dos
                      gestores.
                    </p>
                  </div>
                </CaseSectionItem>

                <CaseSectionItem title='Magia do design solo'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Trabalhei como o único designer no projeto. Minhas
                      responsabilidades incluíam pesquisa, wireframing, design
                      de interface e prototipagem.
                    </p>
                  </div>
                </CaseSectionItem>

                <CaseSectionItem title='Entendendo o problema'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Alguns usuários (gestores) relataram que a maioria dos
                      seus clientes não usam o aplicativo e preferem utilizar o
                      whatsapp ou o instagram para realizarem seus pedidos.
                    </p>
                    <span style={{ marginTop: 16 }}></span>
                    <p className='body-xl'>
                      Alguns feedbacks fornecidos pelo cliente:
                    </p>
                    <p className='body-lg paragraph-medium'>
                      1. Preferem utilizar um site do que o aplicativo, como
                      outros (Anota ai, Plataforma123)
                      <br />
                      2. Acham mais prático e não precisam instalar nenhum
                      recurso
                    </p>
                  </div>
                </CaseSectionItem>

                <CaseSectionItem title='Definindo objetivos'>
                  <div className='text'>
                    <p className='body-xl'>Objetivo do negócio</p>
                    <p className='body-lg paragraph-medium'>
                      O objetivo final do négocio foi fornecer aos clientes
                      (gestores de loja) mais um meio de comunicação que
                      possibilitasse realizar e acompanhar pedidos sem precisar
                      instalar o aplicativo.
                    </p>
                    <span style={{ marginTop: 24 }}></span>
                    <p className='body-xl'>Objetivo de design</p>
                    <p className='body-lg paragraph-medium'>
                      1. Tornar mais fácil para as pessoas realizarem e
                      acompanharem seus pedidos.
                      <br />
                      2. Projetar uma interface atendendo o estilo visual dos
                      outros produtos (Gestor web e aplicativo)
                    </p>
                  </div>
                </CaseSectionItem>
              </div>
            </section>

            <section
              ref={deliverablesRef}
              className='section-case'
              id='section-deliverables'
            >
              <div className='listview'>
                <CaseSectionItem title='Styleguide'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Utilizei a base de tokens e componentes dos produtos
                      Gestor e Client . Todo o material do Entregou.me estava no
                      software adobe XD, foi sugerido começar um processo de
                      migração para o figma, os tokens, componentes e patterns
                      foram migrados para o figma de acordo com sua necessidade.
                    </p>
                  </div>

                  <Button size='medium'>
                    <p>Ver styleguide completo</p>
                    <ArrowUpRight size={24} />
                  </Button>

                  <img
                    className='img-case-section'
                    src={imageStyleguide}
                    alt='User Flow'
                  />
                </CaseSectionItem>
                <CaseSectionItem title='Alta fidelidade'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Visão geral? Simples e limpo ✨
                    </p>
                  </div>

                  <Button size='medium'>
                    <p>Ver completo</p>
                    <ArrowUpRight size={24} />
                  </Button>

                  <img
                    className='img-case-section'
                    src={imageWirefameHigh}
                    alt='User Flow'
                  />
                </CaseSectionItem>
                <CaseSectionItem title='Wireframe'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Trabalhando em estreita colaboração com o pesquisador de
                      UX, Ija, focamos nos elementos centrais do projeto e
                      criamos um wireframe parcial de baixa fidelidade no Figma.
                      Este wireframe serviu de base para o resto do design,
                      permitindo-nos garantir que os elementos mais importantes
                      foram abordados antes de prosseguir com o resto do
                      projeto.
                    </p>
                  </div>

                  <Button size='medium'>
                    <p>Ver wireframe completo</p>
                    <ArrowUpRight size={24} />
                  </Button>

                  <img
                    className='img-case-section'
                    src={imageDefault}
                    alt='User Flow'
                  />
                </CaseSectionItem>
              </div>
            </section>

            <section
              ref={visualsRef}
              className='section-case'
              id='section-visuals'
            >
              <div className='listview'>
                <CaseSectionItem title='Visuais'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Pellentesque at fringilla ante, nec porttitor ligula.
                    </p>
                  </div>

                  <img
                    className='img-case-section'
                    src={imageDefault}
                    alt='User Flow'
                  />
                </CaseSectionItem>
                <CaseSectionItem title='Autenticação e cadastro'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut euismod dapibus magna sit amet porttitor.
                    </p>
                  </div>
                </CaseSectionItem>
                <CaseSectionItem title='Carrinho de compras'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut euismod dapibus magna sit amet porttitor. Ut vehicula
                      eros est, in dictum nibh faucibus id.
                    </p>
                  </div>
                </CaseSectionItem>
              </div>
            </section>
          </main>
        </GridContainer>
      </section>
    </>
  );
}

export default EntregouMeWeb;
