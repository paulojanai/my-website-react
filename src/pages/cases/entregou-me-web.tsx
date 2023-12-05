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
                    <p className='body-md paragraph-high'>
                      Meu relatório online é uma ferramente web que auxilia na
                      geração de relatórios complexos, personalizados e seguros
                      para os usuários adicionarem facilmente seus endereços de
                      carteira existentes para enviar e receber criptografia com
                      segurança. Eu pessoalmente nunca teria entendido o projeto
                      com essa definição.
                    </p>
                    <p className='body-md paragraph-high'>
                      Inferus é uma plataforma que visa facilitar o envio e
                      recebimento de criptomoedas pelos usuários, criando links
                      simples e seguros para seus endereços de carteira
                      existentes. É isso.
                    </p>
                  </div>
                </CaseSectionItem>
                <CaseSectionItem title='Deveres e rabiscos'>
                  <div className='text'>
                    <p className='body-md paragraph-high'>
                      Principalmente, fui o designer de UI deste projeto. Tive a
                      sorte de trabalhar com um designer de marca e um
                      pesquisador de UX no projeto.
                    </p>
                    <p className='body-md paragraph-high'>
                      O pesquisador de UX (Ija), que também é gerente de
                      projeto, fez a pesquisa de usuários, que incluiu
                      entrevistas online e presenciais, idealização de conceito,
                      pesquisa de negócios e alinhamento dos principais
                      interessados nos objetivos e decisões do produto.
                    </p>
                    <p className='body-md paragraph-high'>
                      Lidei com a criação de fluxos de usuário, design visual,
                      prototipagem, testes de usuário, incorporando feedback do
                      usuário em iterações de design e acompanhando a
                      implementação do produto para garantir que as escolhas de
                      design e visuais sejam implementados corretamente.
                    </p>
                  </div>
                </CaseSectionItem>
                <CaseSectionItem title='Navegando em problemas criptográficos e simplificando soluções'>
                  <div className='text'>
                    <p className='body-md paragraph-high'>
                      A partir do conto que contei acima, você deve ter
                      descoberto um problema, coisas como inserir incorretamente
                      o endereço da sua carteira, esquecer qual token vai para
                      qual carteira ou qual carteira se destina a qual cadeia ou
                      rede. Você pode facilmente perder fundos e ativos quando
                      erros como esses são cometidos.
                    </p>
                    <p className='body-md paragraph-high'>
                      No entanto, há mais problemas. É bem sabido que a
                      indústria de criptomoedas e a Web3 em geral têm sido
                      vulneráveis a ataques significativos, que vão desde a
                      tomada de reféns até a infiltração de pontes e hacks de
                      carteiras.
                    </p>
                    <p className='body-md paragraph-high'>
                      Outro problema do usuário no nível inferior é ter que
                      copiar endereços de carteira sempre que necessário. Pode
                      ser cansativo.
                    </p>
                  </div>
                </CaseSectionItem>

                <CaseSectionItem title='Fundindo visão com estética'>
                  <div className='text'>
                    <p className='body-xl'>Objetivo do negócio</p>
                    <p className='body-md paragraph-high'>
                      Principalmente, fui o designer de UI deste projeto. Tive a
                      sorte de trabalhar com um designer de marca e um
                      pesquisador de UX no projeto.
                    </p>
                    <span style={{ marginTop: 24 }}></span>
                    <p className='body-xl'>Objetivo de design</p>
                    <p className='body-md paragraph-high'>
                      1. Tornar mais fácil para as pessoas fazerem pagamentos e
                      também receberem pagamentos por meio de criptografia.
                      <br />
                      2. Projetar uma interface coesa para iniciantes em
                      criptografia e nativos da web3.
                      <br />
                      3. Tornar um produto esteticamente agradável por meio do
                      uso de cor, formato e formato.
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
                <CaseSectionItem title='User flow'>
                  <div className='text'>
                    <p className='body-md paragraph-high'>
                      Inicialmente, colaborei com nosso pesquisador de UX para
                      criar um fluxo de usuário aproximado que todos pudéssemos
                      entender. Depois disso, fui mais fundo e usei o FigJam
                      para criar uma visualização detalhada do fluxo do usuário.
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
                    <p className='body-md paragraph-high'>
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
                    <p className='body-md paragraph-high'>
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
                    <p className='body-md paragraph-high'>
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
                    <p className='body-md paragraph-high'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut euismod dapibus magna sit amet porttitor.
                    </p>
                  </div>
                </CaseSectionItem>
                <CaseSectionItem title='Carrinho de compras'>
                  <div className='text'>
                    <p className='body-md paragraph-high'>
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
                    <p className='body-md paragraph-high'>
                      O processo de tracking foi construído com o time de dados,
                      PM e o meu auxílio, o que contribuiu para podermos medir o
                      impacto da iniciativa.
                    </p>
                    <p className='body-md paragraph-high'>
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
                    <p className='body-md paragraph-high'>
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
