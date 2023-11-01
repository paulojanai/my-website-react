import { ArrowUpRight } from 'lucide-react';
import Button from './Button';
import { ICase } from '@data/cases/casesWork';

const CardWork: React.FC<ICase> = ({
  image,
  roles,
  title,
  comingSoon,
}: ICase) => {
  return (
    <div className='card-work'>
      <div className='thumb'>
        <img src={image} alt='' />
      </div>
      <div className='text'>
        <p className='body-m'>{roles}</p>
        <h3 className=''>{title}</h3>
      </div>

      <Button disabled={comingSoon}>
        <p className='body-m'>
          Ver caso de estudo {comingSoon && '(Em breve)'}
        </p>
        <ArrowUpRight size={24} />
      </Button>
    </div>
  );
};

export default CardWork;
