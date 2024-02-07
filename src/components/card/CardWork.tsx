import { ArrowRight } from 'lucide-react';
import Button from '../button/Button';
import { ICase } from '@data/cases/casesWork';

const CardWork: React.FC<ICase> = ({
  image,
  client,
  date,
  title,
  description,
  href,
  comingSoon,
}: ICase) => {
  const screenWidth = screen.width;

  return (
    <div className='card-work' data-aos='fade-up'>
      <div className='text'>
        <p className='body-lg-strong'>
          {client} - {date}
        </p>
        <h3>
          {title}: {description}
        </h3>
        {/* <p className='body-md paragraph-medium'>{description}</p> */}
      </div>
      <Button size='medium' disabled={comingSoon} href={href}>
        <p>Ver caso {comingSoon && screenWidth <= 768 ? '(Em breve)' : ''}</p>
        <ArrowRight size={20} />
      </Button>
      <a
        href={href}
        className={`thumb ${!comingSoon ? 'cursor-active' : ''}`}
        data-aos='zoom-in-up'
        data-aos-duration='1500'
      >
        {comingSoon && <span className='coming-soon'></span>}
        <img src={image} alt='' />
      </a>
    </div>
  );
};

export default CardWork;
