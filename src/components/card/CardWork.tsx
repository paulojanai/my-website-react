import { ArrowUpRight } from 'lucide-react';
import Button from '../button/Button';
import { ICase } from '@data/cases/casesWork';

const CardWork: React.FC<ICase> = ({
  image,
  descriptionRoles,
  title,
  description,
  href,
  comingSoon,
}: ICase) => {
  return (
    <div className='card-work' data-aos='fade-up'>
      <div className='thumb'>
        <img src={image} alt='' />
      </div>
      <div className='text'>
        <p className='body-sm'>{descriptionRoles}</p>
        <h3>
          {title}: {description}
        </h3>
      </div>

      <Button disabled={comingSoon} href={href}>
        <p>Ver caso de estudo {comingSoon && '(Em breve)'}</p>
        <ArrowUpRight size={24} />
      </Button>
    </div>
  );
};

export default CardWork;