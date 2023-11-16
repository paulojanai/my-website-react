import GridContainer from '@components/Grid';
import { NavigationCase } from '@components/ui/NavigationCase';
import { CaseSectionHero } from '@components/ui/CaseSectionHero';
import { CasesObject } from '@data/cases/casesWork';
import { useNav } from '@hooks/useNav';
import { CaseSectionItem } from '@components/ui/CaseSectionItem';

function EntregouMeWeb() {
  const project = CasesObject['EntregouMeWeb'];

  const refOverview = useNav();
  const refDeliverables = useNav();
  const refVisuals = useNav();

  return (
    <>
      <CaseSectionHero project={project} />

      <section className='about-case'>
        <GridContainer>
          <NavigationCase items={project?.navigation} />

          <main>
            <section
              ref={refOverview}
              className='section-case'
              id='section-overview'
            >
              <div className='listview'>
                <CaseSectionItem title='Sobre Entregou.me'>
                  <div className='text'>
                    <p className='body-m'>
                      Inferus é uma infraestrutura web3 que usa links simples,
                      personalizados e seguros para os usuários adicionarem
                      facilmente seus endereços de carteira existentes para
                      enviar e receber criptografia com segurança. Eu
                      pessoalmente nunca teria entendido o projeto com essa
                      definição.
                    </p>
                    <p className='body-m'>
                      Inferus é uma plataforma que visa facilitar o envio e
                      recebimento de criptomoedas pelos usuários, criando links
                      simples e seguros para seus endereços de carteira
                      existentes. É isso.
                    </p>
                  </div>
                </CaseSectionItem>
                <CaseSectionItem title='Deveres e rabiscos'>
                  <div className='text'>
                    <p className='body-m'>
                      Principalmente, fui o designer de UI deste projeto. Tive a
                      sorte de trabalhar com um designer de marca e um
                      pesquisador de UX no projeto.
                    </p>
                    <p className='body-m'>
                      O pesquisador de UX (Ija), que também é gerente de
                      projeto, fez a pesquisa de usuários, que incluiu
                      entrevistas online e presenciais, idealização de conceito,
                      pesquisa de negócios e alinhamento dos principais
                      interessados nos objetivos e decisões do produto.
                    </p>
                    <p className='body-m'>
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
                    <p className='body-m'>
                      A partir do conto que contei acima, você deve ter
                      descoberto um problema, coisas como inserir incorretamente
                      o endereço da sua carteira, esquecer qual token vai para
                      qual carteira ou qual carteira se destina a qual cadeia ou
                      rede. Você pode facilmente perder fundos e ativos quando
                      erros como esses são cometidos.
                    </p>
                    <p className='body-m'>
                      No entanto, há mais problemas. É bem sabido que a
                      indústria de criptomoedas e a Web3 em geral têm sido
                      vulneráveis a ataques significativos, que vão desde a
                      tomada de reféns até a infiltração de pontes e hacks de
                      carteiras.
                    </p>
                    <p className='body-m'>
                      Outro problema do usuário no nível inferior é ter que
                      copiar endereços de carteira sempre que necessário. Pode
                      ser cansativo.
                    </p>
                  </div>
                </CaseSectionItem>

                <CaseSectionItem title='Fundindo visão com estética'>
                  <div className='text'>
                    <p className='body-xl'>Objetivo do negócio</p>
                    <p className='body-m'>
                      Principalmente, fui o designer de UI deste projeto. Tive a
                      sorte de trabalhar com um designer de marca e um
                      pesquisador de UX no projeto.
                    </p>
                    <span style={{ marginTop: 24 }}></span>
                    <p className='body-xl'>Objetivo de design</p>
                    <p className='body-m'>
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
              ref={refDeliverables}
              className='section-case'
              id='section-deliverables'
            >
              <div className='listview'>
                <CaseSectionItem title='Title'>
                  <div className='text'>
                    <p className='body-m'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut euismod dapibus magna sit amet porttitor. Ut vehicula
                      eros est, in dictum nibh faucibus id. Nulla ullamcorper
                      facilisis odio. Aenean sed aliquam massa. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Nam fringilla
                      mauris tellus, eget varius lacus pellentesque non. Donec
                      porttitor turpis ac nisi efficitur, nec porttitor justo
                      ultricies. Fusce at leo risus. Morbi euismod, urna
                      condimentum vehicula auctor, massa tellus iaculis velit,
                      id tempor nulla nibh non purus. Nunc a mollis sapien.
                      Suspendisse efficitur ultrices suscipit.
                    </p>
                    <p className='body-m'>
                      Pellentesque at fringilla ante, nec porttitor ligula.
                      Proin ut mauris sem. Nullam id lobortis ligula. Mauris
                      varius eleifend mauris at venenatis. Fusce ac elementum
                      ligula. Sed consequat ligula lorem, facilisis tristique
                      nibh commodo nec. Maecenas ultricies erat sit amet arcu
                      mollis, in malesuada nisl rhoncus. Suspendisse fringilla
                      id tellus vel tincidunt. Etiam eleifend odio urna, at
                      vulputate dui pretium tincidunt. Fusce fermentum mauris
                      nulla, lacinia scelerisque dui hendrerit at.
                    </p>
                  </div>
                </CaseSectionItem>
                <CaseSectionItem title='Title'>
                  <div className='text'>
                    <p className='body-m'>
                      Pellentesque at fringilla ante, nec porttitor ligula.
                      Proin ut mauris sem. Nullam id lobortis ligula. Mauris
                      varius eleifend mauris at venenatis. Fusce ac elementum
                      ligula. Sed consequat ligula lorem, facilisis tristique
                      nibh commodo nec. Maecenas ultricies erat sit amet arcu
                      mollis, in malesuada nisl rhoncus. Suspendisse fringilla
                      id tellus vel tincidunt. Etiam eleifend odio urna, at
                      vulputate dui pretium tincidunt. Fusce fermentum mauris
                      nulla, lacinia scelerisque dui hendrerit at.
                    </p>
                  </div>
                </CaseSectionItem>
                <CaseSectionItem title='Title'>
                  <div className='text'>
                    <p className='body-m'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut euismod dapibus magna sit amet porttitor. Ut vehicula
                      eros est, in dictum nibh faucibus id. Nulla ullamcorper
                      facilisis odio. Aenean sed aliquam massa. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Nam fringilla
                      mauris tellus, eget varius lacus pellentesque non. Donec
                      porttitor turpis ac nisi efficitur, nec porttitor justo
                      ultricies. Fusce at leo risus. Morbi euismod, urna
                      condimentum vehicula auctor, massa tellus iaculis velit,
                      id tempor nulla nibh non purus. Nunc a mollis sapien.
                      Suspendisse efficitur ultrices suscipit.
                    </p>
                    <p className='body-m'>
                      Pellentesque at fringilla ante, nec porttitor ligula.
                      Proin ut mauris sem. Nullam id lobortis ligula. Mauris
                      varius eleifend mauris at venenatis. Fusce ac elementum
                      ligula. Sed consequat ligula lorem, facilisis tristique
                      nibh commodo nec. Maecenas ultricies erat sit amet arcu
                      mollis, in malesuada nisl rhoncus. Suspendisse fringilla
                      id tellus vel tincidunt. Etiam eleifend odio urna, at
                      vulputate dui pretium tincidunt. Fusce fermentum mauris
                      nulla, lacinia scelerisque dui hendrerit at.
                    </p>
                  </div>
                </CaseSectionItem>
              </div>
            </section>

            <section
              ref={refVisuals}
              className='section-case'
              id='section-visuals'
            >
              <div className='listview'>
                <CaseSectionItem title='Title'>
                  <div className='text'>
                    <p className='body-m'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut euismod dapibus magna sit amet porttitor. Ut vehicula
                      eros est, in dictum nibh faucibus id. Nulla ullamcorper
                      facilisis odio. Aenean sed aliquam massa. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Nam fringilla
                      mauris tellus, eget varius lacus pellentesque non. Donec
                      porttitor turpis ac nisi efficitur, nec porttitor justo
                      ultricies. Fusce at leo risus. Morbi euismod, urna
                      condimentum vehicula auctor, massa tellus iaculis velit,
                      id tempor nulla nibh non purus. Nunc a mollis sapien.
                      Suspendisse efficitur ultrices suscipit.
                    </p>
                    <p className='body-m'>
                      Pellentesque at fringilla ante, nec porttitor ligula.
                      Proin ut mauris sem. Nullam id lobortis ligula. Mauris
                      varius eleifend mauris at venenatis. Fusce ac elementum
                      ligula. Sed consequat ligula lorem, facilisis tristique
                      nibh commodo nec. Maecenas ultricies erat sit amet arcu
                      mollis, in malesuada nisl rhoncus. Suspendisse fringilla
                      id tellus vel tincidunt. Etiam eleifend odio urna, at
                      vulputate dui pretium tincidunt. Fusce fermentum mauris
                      nulla, lacinia scelerisque dui hendrerit at.
                    </p>
                  </div>
                </CaseSectionItem>
                <CaseSectionItem title='Title'>
                  <div className='text'>
                    <p className='body-m'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut euismod dapibus magna sit amet porttitor. Ut vehicula
                      eros est, in dictum nibh faucibus id. Nulla ullamcorper
                      facilisis odio. Aenean sed aliquam massa. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Nam fringilla
                      mauris tellus, eget varius lacus pellentesque non. Donec
                      porttitor turpis ac nisi efficitur, nec porttitor justo
                      ultricies. Fusce at leo risus. Morbi euismod, urna
                      condimentum vehicula auctor, massa tellus iaculis velit,
                      id tempor nulla nibh non purus. Nunc a mollis sapien.
                      Suspendisse efficitur ultrices suscipit.
                    </p>
                    <p className='body-m'>
                      Pellentesque at fringilla ante, nec porttitor ligula.
                      Proin ut mauris sem. Nullam id lobortis ligula. Mauris
                      varius eleifend mauris at venenatis. Fusce ac elementum
                      ligula. Sed consequat ligula lorem, facilisis tristique
                      nibh commodo nec. Maecenas ultricies erat sit amet arcu
                      mollis, in malesuada nisl rhoncus. Suspendisse fringilla
                      id tellus vel tincidunt. Etiam eleifend odio urna, at
                      vulputate dui pretium tincidunt. Fusce fermentum mauris
                      nulla, lacinia scelerisque dui hendrerit at.
                    </p>
                  </div>
                </CaseSectionItem>
                <CaseSectionItem title='Title'>
                  <div className='text'>
                    <p className='body-m'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut euismod dapibus magna sit amet porttitor. Ut vehicula
                      eros est, in dictum nibh faucibus id. Nulla ullamcorper
                      facilisis odio. Aenean sed aliquam massa. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. Nam fringilla
                      mauris tellus, eget varius lacus pellentesque non. Donec
                      porttitor turpis ac nisi efficitur, nec porttitor justo
                      ultricies. Fusce at leo risus. Morbi euismod, urna
                      condimentum vehicula auctor, massa tellus iaculis velit,
                      id tempor nulla nibh non purus. Nunc a mollis sapien.
                      Suspendisse efficitur ultrices suscipit.
                    </p>
                    <p className='body-m'>
                      Pellentesque at fringilla ante, nec porttitor ligula.
                      Proin ut mauris sem. Nullam id lobortis ligula. Mauris
                      varius eleifend mauris at venenatis. Fusce ac elementum
                      ligula. Sed consequat ligula lorem, facilisis tristique
                      nibh commodo nec. Maecenas ultricies erat sit amet arcu
                      mollis, in malesuada nisl rhoncus. Suspendisse fringilla
                      id tellus vel tincidunt. Etiam eleifend odio urna, at
                      vulputate dui pretium tincidunt. Fusce fermentum mauris
                      nulla, lacinia scelerisque dui hendrerit at.
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
