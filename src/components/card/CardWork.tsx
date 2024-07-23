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
    <div className='card-work'>
      <div className='container-header'>
        <div className='client' data-aos='fade-up'>
          <img
            className='img-logo-client'
            src={client.logo}
            alt='Logo do cliente'
          />
          <p className='body-lg-strong'>{client.name}</p>
          {comingSoon && (
            <img
              data-aos='fade-left'
              className='tag-coming-soon'
              src={TagComingSoon}
              alt='Tag de em breve'
            />
          )}
        </div>
        <div className='descrition-work'>
          <div className='title' data-aos='fade-up'>
            <h4>{title}</h4>
            <p className='body-lg-strong'>
              {role}, {date}
            </p>
          </div>
          <div className='description' data-aos='fade-up'>
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
          aria-label={`Link to ${href}`}
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
            aria-label={`Link to ${href}`}
          >
            <img src={images[1]} alt='' />
          </a>
          <a
            href={href}
            className='thumb'
            data-aos='fade-up'
            data-aos-duration='1500'
            aria-label={`Link to ${href}`}
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
          aria-label={`Link to ${href}`}
        >
          <img className='cursor-active' src={images[3]} alt='' />
        </a>
      )}
    </div>
  );
};

export default CardWork;
