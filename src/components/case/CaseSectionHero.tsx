import GridContainer from '@components/Grid';
import { ICase } from '@data/cases/casesWork';

type CaseSectionHeroProps = {
  project?: ICase;
};

export const CaseSectionHero = ({ project }: CaseSectionHeroProps) => {
  return (
    <div className='section-hero-case'>
      <GridContainer>
        <p data-aos='fade-up' className='body-xl'>
          {project?.client.name}, {project?.date}
        </p>

        <h1 className='display-xl' data-aos='fade-up'>
          {project?.title}
        </h1>

        <div data-aos='fade-up' className='details'>
          <div className='item'>
            <p className='body-md'>O que eu fiz</p>
            <p className='body-lg paragraph-medium'>
              UX/UI Designer, Visual Design
            </p>
          </div>
          <div className='item'>
            <p className='body-md'>Duração</p>
            <p className='body-lg paragraph-medium'>Presente</p>
          </div>
          <div className='item'>
            <p className='body-md'>Produtos</p>
            <p className='body-lg paragraph-medium'>
              Website, App e Template PDF
            </p>
          </div>
          <div className='item'>
            <p className='body-md'>Principais entregas</p>
            <p className='body-lg paragraph-medium'>Styleguide e Protótipo</p>
          </div>
        </div>

        <div
          data-aos='zoom-in-up'
          data-aos-duration='1500'
          className='thumb-hero'
        >
          <img src={project?.images[0]} alt='Thumb' />
        </div>
      </GridContainer>
    </div>
  );
};
