import GridContainer from '@components/Grid';
import { NavigationCase } from '@components/ui/NavigationCase';
import CaseSectionHero from '@components/ui/case-section-hero';
import { CasesObject } from '@data/cases/casesWork';

function EntregouMeWeb() {
  const project = CasesObject['EntregouMeWeb'];

  return (
    <>
      <CaseSectionHero project={project} />

      <section className='section-overview-case'>
        <GridContainer>
          <NavigationCase items={project?.navigation} />

          <main>
            <section id='section-overvie'>
              <h2>Visão geral</h2>
              <div className='text'>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  [Descrever que fim levou o produto e feedbacks]
                </p>
              </div>

              <div className='details'>
                <div className='item'>
                  <p className='body-xl'>Produtos</p>
                  <ul>
                    <li className='body-m'>Ecommerce Web</li>
                  </ul>
                </div>
                <div className='item'>
                  <p className='body-xl'>Equipe</p>
                  <ul>
                    <li className='body-m'>Neto, FullStack Developer</li>
                    <li className='body-m'>Thais, Frontend Developer</li>
                    <li className='body-m'>(Eu), UX/UI Designer</li>
                  </ul>
                </div>
                <div className='item'>
                  <p className='body-xl'>O que eu fiz</p>
                  <ul>
                    <li className='body-m'>Auditória de design</li>
                    <li className='body-m'>UI Designer</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id='section-deliverables'>
              <h2>Entregáveis</h2>
              <div className='text'>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  [Descrever que fim levou o produto e feedbacks]
                </p>
              </div>

              <div className='details'>
                <div className='item'>
                  <p className='body-xl'>Produtos</p>
                  <ul>
                    <li className='body-m'>Ecommerce Web</li>
                  </ul>
                </div>
                <div className='item'>
                  <p className='body-xl'>Equipe</p>
                  <ul>
                    <li className='body-m'>Neto, FullStack Developer</li>
                    <li className='body-m'>Thais, Frontend Developer</li>
                    <li className='body-m'>(Eu), UX/UI Designer</li>
                  </ul>
                </div>
                <div className='item'>
                  <p className='body-xl'>O que eu fiz</p>
                  <ul>
                    <li className='body-m'>Auditória de design</li>
                    <li className='body-m'>UI Designer</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id='section-visuals'>
              <h2>Visuais</h2>
              <div className='text'>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  Entregou.me foi desenvolvido pela empresa automação.com para
                  ser usado pelos seus clientes e novos usuários que possuíssem
                  um empreendimento que possibilitasse realizar entregas e
                  organizar de forma mais pratica seus pedidos.
                </p>
                <p className='body-m'>
                  [Descrever que fim levou o produto e feedbacks]
                </p>
              </div>

              <div className='details'>
                <div className='item'>
                  <p className='body-xl'>Produtos</p>
                  <ul>
                    <li className='body-m'>Ecommerce Web</li>
                  </ul>
                </div>
                <div className='item'>
                  <p className='body-xl'>Equipe</p>
                  <ul>
                    <li className='body-m'>Neto, FullStack Developer</li>
                    <li className='body-m'>Thais, Frontend Developer</li>
                    <li className='body-m'>(Eu), UX/UI Designer</li>
                  </ul>
                </div>
                <div className='item'>
                  <p className='body-xl'>O que eu fiz</p>
                  <ul>
                    <li className='body-m'>Auditória de design</li>
                    <li className='body-m'>UI Designer</li>
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </GridContainer>
      </section>
    </>
  );
}

export default EntregouMeWeb;
