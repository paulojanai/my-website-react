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
          {project?.client} - {project?.date}
        </p>

        <h1 className='display-lg' data-aos='fade-up'>
          {project?.title}
        </h1>

        <div data-aos='fade-up' className='details'>
          <div className='item'>
            <p className='body-xl'>O que eu fiz</p>
            <p className='body-md paragraph-medium'>{project?.roles}</p>
          </div>
          <div className='item'>
            <p className='body-xl'>Produtos</p>
            <p className='body-md paragraph-medium'>{project?.products}</p>
          </div>
          <div className='item'>
            <p className='body-xl'>Equipe</p>
            <p className='body-md paragraph-medium'>{project?.team}</p>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='2400' className='thumb-hero'>
          <img src={project?.image} alt='Thumb' />
        </div>
      </GridContainer>
    </div>
  );
};
