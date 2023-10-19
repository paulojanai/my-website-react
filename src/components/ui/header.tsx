import GridContainer from '@components/Grid';
import Logo from '@assets/logo-dark.svg';

function Header() {
  return (
    <>
      <header>
        <GridContainer>
          <a className='logo' href='https://paulojanai.com'>
            <img src={Logo} alt='Logo Paulo Janai' />
          </a>
          <nav>
            <ul data-aos='fade-left' className='js-nav'>
              <li>
                <a href='#section-work' className='js-link'>
                  Trabalhos
                </a>
              </li>
              <li>
                <a href='#section-about' className='js-link'>
                  Sobre
                </a>
              </li>
              <li>
                <a href='#section-contact' className='js-link'>
                  Contato
                </a>
              </li>
              <ul className='social'>
                <li>
                  <a href='https://github.com/paulojanai' target='_blank'>
                    <img src='./img/brand-github.svg' alt='Ícone github' />
                  </a>
                </li>
                <li>
                  <a href='https://dribbble.com/paulojanai' target='_blank'>
                    <img src='./img/brand-dribbble.svg' alt='Ícone dribbble' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/paulojanai/'
                    target='_blank'
                  >
                    <img src='./img/brand-linkedin.svg' alt='Ícone linkedin' />
                  </a>
                </li>
              </ul>
            </ul>
          </nav>

          <span data-aos='fade-left' className='menu'>
            <img src='./img/menu.svg' alt='Ícone menu' />
          </span>
        </GridContainer>
      </header>

      <div className='menu-mobile'>
        <div className='grid-container'>
          <div className='container'>
            <span data-aos='fade-left' className='close'>
              <img src='./img/x.svg' alt='Ícone menu' />
            </span>
          </div>

          <nav>
            <ul data-aos='fade-left' className='items-menu js-nav'>
              <li>
                <a href='#section-work' className='js-link'>
                  Trabalhos
                </a>
              </li>
              <li>
                <a href='#section-about' className='js-link'>
                  Sobre
                </a>
              </li>
              <li>
                <a href='#section-contact' className='js-link'>
                  Contato
                </a>
              </li>
              <div className='social'>
                <li>
                  <a href='https://github.com/paulojanai' target='_blank'>
                    <img src='./img/brand-github.svg' alt='Ícone github' />
                  </a>
                </li>
                <li>
                  <a href='https://dribbble.com/paulojanai' target='_blank'>
                    <img src='./img/brand-dribbble.svg' alt='Ícone dribbble' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/paulojanai/'
                    target='_blank'
                  >
                    <img src='./img/brand-linkedin.svg' alt='Ícone linkedin' />
                  </a>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
