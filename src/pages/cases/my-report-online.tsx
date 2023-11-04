import GridContainer from '@components/Grid';

import { CasesObject } from '@data/cases/casesWork';

function MyReportOnline() {
  const project = CasesObject['MyReportOnline'];

  return (
    <>
      <div className='section-hero-case'>
        <GridContainer>
          <p className='body-xl'>
            {project?.client}, {project?.date}
          </p>

          <h1>{project?.title}</h1>

          <div className='thumb-hero'>
            <img src={project?.image} alt='Thumb' />
          </div>
        </GridContainer>
      </div>

      <div className='section-overview-case'>
        <GridContainer>
          <h2>Visão geral</h2>
          <div className='text'>
            <p className='body-m'>
              O produto “Meu relatório online” foi desenvolvimento para ser
              usado por pessoas da área de construção civil com o foco de
              facilitar a inspeção predial, fazer anotações, captar fotos das
              irregularidades e gerar relatórios de cada inspeções.
            </p>
            <p className='body-m'>
              Liderei a estratégia desenhei o futuro da inspeção predial da
              construção civil - desempenhando um papel na definição do escopo e
              prototipagem dos recursos do produto. Em paralelo, estava em
              constante atualização sobre framework Radix UI no qual foi
              escolhido para desenvolvedor o visual e código.
            </p>
            <p className='body-m'>
              [Descrever que fim levou o produto e feedbacks]
            </p>
          </div>

          <div className='details'>
            <div className='item'>
              <p className='body-xl'>Produtos</p>
              <ul>
                <li className='body-m'>Website e Web App</li>
                <li className='body-m'>Mobile App</li>
                <li className='body-m'>Template PDF</li>
              </ul>
            </div>
            <div className='item'>
              <p className='body-xl'>Equipe</p>
              <ul>
                <li className='body-m'>Willamy, FullStack Developer</li>
                <li className='body-m'>Junior, Mobile Developer</li>
                <li className='body-m'>(Eu), UX/UI Designer</li>
              </ul>
            </div>
            <div className='item'>
              <p className='body-xl'>O que eu fiz</p>
              <ul>
                <li className='body-m'>UX/UI Design</li>
                <li className='body-m'>Visual Design</li>
              </ul>
            </div>
          </div>
        </GridContainer>
      </div>
    </>
  );
}

export default MyReportOnline;
