import { ArrowUpRight } from 'lucide-react';

import GridContainer from '@components/Grid';
import { NavigationCase } from '@components/ui/NavigationCase';
import { CaseSectionHero } from '@components/case/CaseSectionHero';
import { CasesObject, IItemNavigationCase } from '@data/cases/casesWork';
import { CaseSectionItem } from '@components/case/CaseSectionItem';
import Button from '@components/button/Button';

const CaseNavigationItems: IItemNavigationCase[] = [
  {
    title: 'Visão geral',
    linkID: 'section-overview',
  },
  {
    title: 'Entregáveis',
    linkID: 'section-deliverables',
  },
  {
    title: 'Visuais',
    linkID: 'section-visuals',
  },
];

function MyReportOnline() {
  const project = CasesObject['MyReportOnline'];

  return (
    <>
      <CaseSectionHero project={project} />

      <section className='about-case'>
        <GridContainer>
          <NavigationCase items={CaseNavigationItems} />

          <main>
            <section className='section-case' id='section-overview'>
              <div className='listview'>
                <CaseSectionItem title='Sobre'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Meu relatório online é uma ferramente web que auxilia na
                      geração de relatórios complexos, personalizados e seguros
                      para os usuários adicionarem facilmente seus endereços de
                      carteira existentes para enviar e receber criptografia com
                      segurança. Eu pessoalmente nunca teria entendido o projeto
                      com essa definição.
                    </p>
                    <p className='body-lg paragraph-medium'>
                      Inferus é uma plataforma que visa facilitar o envio e
                      recebimento de criptomoedas pelos usuários, criando links
                      simples e seguros para seus endereços de carteira
                      existentes. É isso.
                    </p>
                  </div>
                </CaseSectionItem>
                <CaseSectionItem title='Deveres e rabiscos'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Principalmente, fui o designer de UI deste projeto. Tive a
                      sorte de trabalhar com um designer de marca e um
                      pesquisador de UX no projeto.
                    </p>
                    <p className='body-lg paragraph-medium'>
                      O pesquisador de UX (Ija), que também é gerente de
                      projeto, fez a pesquisa de usuários, que incluiu
                      entrevistas online e presenciais, idealização de conceito,
                      pesquisa de negócios e alinhamento dos principais
                      interessados nos objetivos e decisões do produto.
                    </p>
                    <p className='body-lg paragraph-medium'>
                      Lidei com a criação de fluxos de usuário, design visual,
                      prototipagem, testes de usuário, incorporando feedback do
                      usuário em iterações de design e acompanhando a
                      implementação do produto para garantir que as escolhas de
                      design e visuais sejam implementados corretamente.
                    </p>
                  </div>
                </CaseSectionItem>

                <CaseSectionItem title='Fundindo visão com estética'>
                  <div className='text'>
                    <p className='body-xl'>Objetivo do negócio</p>
                    <p className='body-lg paragraph-medium'>
                      Principalmente, fui o designer de UI deste projeto. Tive a
                      sorte de trabalhar com um designer de marca e um
                      pesquisador de UX no projeto.
                    </p>
                    <span style={{ marginTop: 24 }}></span>
                    <p className='body-xl'>Objetivo de design</p>
                    <p className='body-lg paragraph-medium'>
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

            <section className='section-case' id='section-deliverables'>
              <div className='listview'>
                <CaseSectionItem title='Branding'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Foi feito uma pesquisa visando as características do
                      produto e com base na ideia do cliente. Desenvolvi algo
                      simples e objetivo.
                    </p>
                  </div>

                  {/* <img
                    className='img-case-section'
                    src={imageBranding}
                    alt='User Flow'
                  /> */}
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

                  <Button size='medium'>
                    <p>Ver mapa da jornada do usuário</p>
                    <ArrowUpRight size={24} />
                  </Button>

                  {/* <img
                    className='img-case-section'
                    src={imageDefault}
                    alt='User Flow'
                  /> */}
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

                  {/* <img
                    className='img-case-section'
                    src={imageDefault}
                    alt='User Flow'
                  /> */}
                </CaseSectionItem>
              </div>
            </section>

            <section className='section-case' id='section-visuals'>
              <div className='listview'>
                <CaseSectionItem title='Visuais'>
                  {/* <img
                    className='img-case-section'
                    src={imageDefault}
                    alt='User Flow'
                  /> */}
                </CaseSectionItem>
                <CaseSectionItem title='Autenticação'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      O onboarding da nossa aplicação tem um fluxo direto e
                      simples, contudo, algumas etapas ainda são manuais.
                    </p>
                    <p className='body-lg paragraph-medium'>
                      Para ter o acesso a plataforma os usuários precisam enviar
                      um email para a equipe cadastrar manualmente e uma senha é
                      gerada. Os usuários acessam a plataforma utilizando um
                      email e a senha que foi gerada.
                    </p>
                  </div>
                  {/* <img
                    className='img-case-section'
                    src={screenLogin}
                    alt='User Flow'
                  /> */}
                </CaseSectionItem>
                <CaseSectionItem title='Title'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
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
                    <p className='body-lg paragraph-medium'>
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

export default MyReportOnline;
