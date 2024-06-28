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
          {project?.client.name} - {project?.date}
        </p>

        <h1 className='display-xl' data-aos='fade-up'>
          {project?.title}: {project?.description}
        </h1>

        <div data-aos='fade-up' className='details'>
          <div className='item'>
            <p className='body-sm'>O que eu fiz</p>
            <p className='body-md paragraph-medium'></p>
          </div>
          <div className='item'>
            <p className='body-sm'>Produtos</p>
            <p className='body-md paragraph-medium'></p>
          </div>
          <div className='item'>
            <p className='body-sm'>Principais entregas</p>
            <p className='body-md paragraph-medium'></p>
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
