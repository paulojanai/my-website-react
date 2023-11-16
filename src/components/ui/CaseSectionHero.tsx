import GridContainer from '@components/Grid';
import { ICase } from '@data/cases/casesWork';

type CaseSectionHeroProps = {
  project?: ICase;
};

function CaseSectionHero({ project }: CaseSectionHeroProps) {
  return (
    <div className='section-hero-case'>
      <GridContainer>
        <p data-aos='fade-up' className='body-xl'>
          {project?.client} - {project?.date}
        </p>

        <h2 data-aos='fade-up'>{project?.title}</h2>

        <div data-aos='fade-up' data-aos-duration='2400' className='thumb-hero'>
          <img src={project?.image} alt='Thumb' />
        </div>
      </GridContainer>
    </div>
  );
}

export default CaseSectionHero;
