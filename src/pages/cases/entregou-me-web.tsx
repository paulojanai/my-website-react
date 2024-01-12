import GridContainer from '@components/Grid';
import { NavigationCase } from '@components/ui/NavigationCase';
import { CaseSectionHero } from '@components/case/CaseSectionHero';
import Button from '@components/button/Button';
import { CaseSectionItem } from '@components/case/CaseSectionItem';
import { CaseNavigationItems, CasesObject } from '@data/cases/casesWork';
import { useNav } from '@hooks/useNav';
import { ArrowUpRight } from 'lucide-react';

import userFlow from '@assets/entregoume-white-label/user_flow_entregoume-white-label.jpg';
import journeyMap from '@assets/entregoume-white-label/journey_map.jpg';
import wireframe from '@assets/entregoume-white-label/wireframe.jpg';

function EntregouMeWeb() {
  const project = CasesObject['EntregouMeWeb'];

  const overviewRef = useNav({ navLinkID: 'section-overview' });
  const deliverablesRef = useNav({ navLinkID: 'section-deliverables' });
  const visualsRef = useNav({ navLinkID: 'section-visuals' });
  const resultsRef = useNav({ navLinkID: 'section-results' });

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
                      Entregou.me é uma plataforma que possui dois tipos de
                      usuários: gestores de loja e consumidores, onde realizam
                      diferentes tarefas desde configurar a loja até a entrega
                      final do produto. Diante disso, existem duas frentes onde
                      os usuários interagem: o gestor web e o aplicativo.
                    </p>
                    <p className='body-lg paragraph-medium'>
                      O aplicativo visa facilitar a realização e acompanhamento
                      de pedidos. Já o gestor web, tem como principal objetivo o
                      gerenciamento de pedidos e entregas.
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
                    <span style={{ marginTop: 24 }}></span>
                    <p className='body-xl'>
                      Alguns feedbacks fornecidos pela própria empresa:
                    </p>
                    <p className='body-lg paragraph-medium'>
                      1. Preferem utilizar um site do que o aplicativo, como
                      outras (Anota ai, Plataforma123)
                      <br />
                      2. Acham mais prático e não precisa instalar
                      <br />
                      3.
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
                      Inicialmente, utilizei os tokens e alguns components dos
                      outros produtos existentes. De acordo com a necessidade
                      fui adicionando novos componentes.
                    </p>
                  </div>

                  <Button>
                    <p>Ver user flow completo</p>
                    <ArrowUpRight size={24} />
                  </Button>

                  <img
                    className='img-case-section'
                    src={userFlow}
                    alt='User Flow'
                  />
                </CaseSectionItem>
                <CaseSectionItem title='Jornada do usuário'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Para compreender totalmente e ter empatia com as
                      experiências dos usuários, criei uma jornada de usuário
                      detalhada para o projeto, descrevendo seus objetivos,
                      desafios e pontos problemáticos em cada etapa.
                    </p>
                  </div>

                  <Button>
                    <p>Ver mapa da jornada do usuário</p>
                    <ArrowUpRight size={24} />
                  </Button>

                  <img
                    className='img-case-section'
                    src={journeyMap}
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

                  <Button>
                    <p>Ver wireframe completo</p>
                    <ArrowUpRight size={24} />
                  </Button>

                  <img
                    className='img-case-section'
                    src={wireframe}
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
                    src={userFlow}
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
            <section
              ref={resultsRef}
              className='section-case'
              id='section-results'
            >
              <div className='listview'>
                <CaseSectionItem title='🚀 Métricas e resultados'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      O processo de tracking foi construído com o time de dados,
                      PM e o meu auxílio, o que contribuiu para podermos medir o
                      impacto da iniciativa.
                    </p>
                    <p className='body-lg paragraph-medium'>
                      <ul>
                        <li>
                          - Ao analisar o período de dezembro a março,{' '}
                          <span className='highlighted-text'>
                            com a nova funcionalidade observamos um aumento de
                            96% em 2023 em comparação 2022
                          </span>
                        </li>
                        <li>
                          - Por outro lado, nos meses em que o Plurall não
                          registra picos de acesso, houve um aumento de mais de
                          180 mil cadastros de responsáveis,
                          <span className='highlighted-text'>
                            representando um aumento de aproximadamente 33%
                          </span>{' '}
                          em relação aos meses com maior acesso.
                        </li>
                        <li>
                          - Outras iniciativas se intensificaram para gerar
                          ainda mais valor para os novos usuários.
                        </li>
                        <li>
                          - A comunicação via rede social se intensificou para
                          incentivar ainda mais os responsáveis a se cadastrarem
                          e se vincularem aos alunos
                        </li>
                      </ul>
                    </p>
                  </div>
                </CaseSectionItem>

                <CaseSectionItem title='🧠 Aprendizados'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Foi enriquecedor entrar em uma equipe que não tinha muita
                      experiência com design e, mesmo assim, estava aberta a
                      mudanças. Houve vários momentos de compartilhamento de
                      conhecimento de design com os Product Managers, o squad e
                      os stakeholders, na tentativa de transmitir um pouco mais
                      sobre nosso trabalho e do nosso dia a dia, colaborando com
                      todos. No final da iniciativa, todos do time estavam
                      satisfeitos com o trabalho que tínhamos realizado e
                      expressaram interesse em participar mais vezes dos
                      processos de design.
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
