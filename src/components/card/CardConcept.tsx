import { Asterisk } from 'lucide-react';
import Link from '../Link';
import { ICaseConcept } from '@data/cases/casesConcept';

const CardConcept: React.FC<ICaseConcept> = ({
  image,
  descriptionRoles,
  title,
  comingSoon,
  figmaURL,
  githubURL,
}: ICaseConcept) => {
  return (
    <div className='card-concept' data-aos='fade-up'>
      <div className='thumb'>
        <img src={image} alt='' />
      </div>
      <div className='text'>
        <p className='body-sm'>{descriptionRoles}</p>
        <h4 className=''>{title}</h4>
      </div>

      {comingSoon ? (
        <div className='comingSoon'>
          <Asterisk size={16} />
          <p>Em breve</p>
        </div>
      ) : (
        <div className='links'>
          {figmaURL && <Link link={figmaURL} text='Projeto' nameIcon='Figma' />}
          {githubURL && (
            <Link link={githubURL} text='Repositório' nameIcon='Github' />
          )}
        </div>
      )}
    </div>
  );
};

export default CardConcept;
