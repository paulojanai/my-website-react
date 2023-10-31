import { Asterisk } from 'lucide-react';
import Link from './Link';

interface CardConceptProps {
  roles: string;
  title: string;
  img: string;
  linkFigma?: string;
  linkRepo?: string;
  comingSoon?: boolean;
}

const CardConcept = ({
  img,
  roles,
  title,
  linkFigma,
  linkRepo,
  comingSoon,
}: CardConceptProps) => {
  return (
    <div className='card-concept'>
      <div className='thumb'>
        <img src={img} alt='' />
      </div>
      <div className='text'>
        <p className='body-m'>{roles}</p>
        <h4 className=''>{title}</h4>
      </div>

      {comingSoon ? (
        <div className='comingSoon'>
          <Asterisk size={16} />
          <p>Em breve</p>
        </div>
      ) : (
        <div className='links'>
          {linkFigma && <Link link={linkFigma} text='Figma' nameIcon='Figma' />}
          {linkFigma && (
            <Link link={linkRepo} text='Repositório' nameIcon='Github' />
          )}
        </div>
      )}
    </div>
  );
};

export default CardConcept;
