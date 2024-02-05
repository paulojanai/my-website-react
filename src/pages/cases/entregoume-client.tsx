import { ArrowUpRight } from 'lucide-react';

import { CaseSectionHero } from '@components/case/CaseSectionHero';
import GridContainer from '@components/Grid';
import Button from '@components/button/Button';
import { CaseSectionItem } from '@components/case/CaseSectionItem';
import { NavigationCase } from '@components/ui/NavigationCase';

import { CasesObject, IItemNavigationCase } from '@data/cases/casesWork';

import imageWirefameHigh from '@assets/entregoume-client/wireframe_high.png';
import imageStyleguide from '@assets/entregoume-client/styleguide.png';
import imageVisuals from '@assets/entregoume-client/visuals.png';
import imageSignIn from '@assets/entregoume-client/auth_1.png';
import imageSignUp from '@assets/entregoume-client/auth_2.png';
import imageHome from '@assets/entregoume-client/home.png';
import imagePreviewCheckout from '@assets/entregoume-client/preview_checkout.png';
import imageProductDetails from '@assets/entregoume-client/details_product.png';
import imageCheckout from '@assets/entregoume-client/checkout.png';

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

function EntregouMeWeb() {
  const project = CasesObject['EntregouMeWeb'];

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

            <section className='section-case' id='section-deliverables'>
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
              </div>
            </section>

            <section className='section-case' id='section-visuals'>
              <div className='listview'>
                <CaseSectionItem title='Uma jornada visual'>
                  <img
                    className='img-case-section'
                    src={imageVisuals}
                    alt='User Flow'
                  />
                </CaseSectionItem>

                <CaseSectionItem title='Mais a fundo'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Os usuários tem acesso direto a página principal da loja.
                      Portanto, neste caso, a página de login ou cadastro é
                      necessária quando os usuários vão finalizar o seu pedido.
                    </p>
                  </div>

                  <img
                    className='img-case-section'
                    src={imageSignIn}
                    alt='Sign in'
                  />

                  <img
                    className='img-case-section'
                    src={imageSignUp}
                    alt='Sign up'
                  />
                </CaseSectionItem>

                <CaseSectionItem title='Início e muito mais 🚀'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Na página inicial, os usuários tem acesso as ofertas do
                      dia, mais vendidos, várias categorias, formas de
                      pagamento, informações da loja e podem checar o carrinho
                      de forma rápida.
                    </p>
                  </div>

                  <img
                    className='img-case-section'
                    src={imageHome}
                    alt='Sign in'
                  />

                  <img
                    className='img-case-section'
                    src={imagePreviewCheckout}
                    alt='Sign up'
                  />
                </CaseSectionItem>

                <CaseSectionItem title='Detalhes do produto'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      Nesta página, os usuários podem visualizar todas as
                      informações de um produto e produtos relacionados.
                    </p>
                  </div>

                  <img
                    className='img-case-section'
                    src={imageProductDetails}
                    alt='Sign in'
                  />
                </CaseSectionItem>

                <CaseSectionItem title='Carrinho de compras'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      [Brief description...]
                    </p>
                  </div>

                  <img
                    className='img-case-section'
                    src={imageCheckout}
                    alt='Sign in'
                  />
                </CaseSectionItem>

                <CaseSectionItem title='Conclusão'>
                  <div className='text'>
                    <p className='body-lg paragraph-medium'>
                      [Brief description...]
                    </p>
                    <p className='body-lg paragraph-medium'>
                      [Brief description...]
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
