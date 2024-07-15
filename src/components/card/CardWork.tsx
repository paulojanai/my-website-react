import { ICase } from '@data/cases/casesWork';
import TagComingSoon from '@assets/tag_coming_soon.svg';

const CardWork: React.FC<ICase> = ({
  images,
  client,
  date,
  role,
  title,
  description,
  href,
  comingSoon,
}: ICase) => {
  return (
    <div className='card-work' data-aos='fade-up'>
      <div className='container-header'>
        <div className='client'>
          <img
            className='img-logo-client'
            src={client.logo}
            alt='Logo do cliente'
          />
          <p className='body-lg-strong'>{client.name}</p>
          {comingSoon && (
            <img
              className='tag-coming-soon'
              src={TagComingSoon}
              alt='Tag de em breve'
            />
          )}
        </div>
        <div className='descrition-work'>
          <div className='title'>
            <h4>{title}</h4>
            <p className='body-lg-strong'>
              {role}, {date}
            </p>
          </div>
          <div className='description '>
            <p className='body-lg paragraph-medium'>{description}</p>
          </div>
        </div>
      </div>

      {images[0] && (
        <a
          href={href}
          className='thumb'
          data-aos='fade-up'
          data-aos-duration='1500'
        >
          <img className='cursor-active' src={images[0]} alt='' />
        </a>
      )}

      {images[1] && images[2] && (
        <div className='row-images'>
          <a
            href={href}
            className='thumb'
            data-aos='fade-up'
            data-aos-duration='1500'
          >
            <img src={images[1]} alt='' />
          </a>
          <a
            href={href}
            className='thumb'
            data-aos='fade-up'
            data-aos-duration='1500'
          >
            <img src={images[2]} alt='' />
          </a>
        </div>
      )}

      {images[3] && (
        <a
          href={href}
          className='thumb'
          data-aos='fade-up'
          data-aos-duration='1500'
        >
          <img className='cursor-active' src={images[3]} alt='' />
        </a>
      )}
    </div>
  );
};

export default CardWork;
