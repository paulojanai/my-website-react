import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Menu, X } from 'lucide-react';

import GridContainer from '@components/Grid';
import Logo from '@assets/logo-dark.svg';

import CVPDF from '../../../paulojanai-cv.pdf';

function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const actionMenu = () => {
    setOpen(!open);

    document.documentElement.classList.toggle('open-menu');
  };

  return (
    <header>
      <GridContainer>
        <Link to='/' className='logo' data-aos='fade-right'>
          <img src={Logo} alt='Logo Paulo Janai' />
        </Link>

        <nav className='nav-default' data-aos='fade-left'>
          <ul>
            <li>
              <a href='/#section-works'>Trabalhos</a>
            </li>
            <li>
              <a href='/#section-how-help'>Como eu ajudo</a>
            </li>
            <li>
              <a href='#section-contact'>Sobre</a>
            </li>
            <li>
              <a href={CVPDF} target='_blank'>
                CV
              </a>
            </li>
            <ul className='social'>
              <li>
                <a
                  href='https://www.linkedin.com/in/paulojanai/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin size={20} />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/paulojanai'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Github size={20} />
                </a>
              </li>
            </ul>
          </ul>
        </nav>

        <span data-aos='fade-left' className='menu-icon'>
          <Menu size={32} onClick={actionMenu} />
        </span>

        <div className={`menu-mobile ${open ? 'active' : ''}`}>
          <div className='header-menu-mobile'>
            <GridContainer>
              <Link to='/' className='logo'>
                <img src={Logo} alt='Logo Paulo Janai' />
              </Link>
              <span className='close'>
                <X className='menu-bar' size={32} onClick={actionMenu} />
              </span>
            </GridContainer>
          </div>

          <nav className='nav-mobile'>
            <ul>
              <li>
                <a href='#section-works'>Trabalhos</a>
              </li>
              <li>
                <a href='/#section-about'>Como eu ajudo</a>
              </li>
              <li>
                <a href='#section-contact'>Sobre</a>
              </li>
              <li>
                <a href='' target='_blank'>
                  CV
                </a>
              </li>
              <ul className='social'>
                <li>
                  <a
                    href='https://www.linkedin.com/in/paulojanai/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Linkedin size={40} />
                  </a>
                </li>
                <li>
                  <a
                    href='https://github.com/paulojanai'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Github size={40} />
                  </a>
                </li>
              </ul>
            </ul>
          </nav>
        </div>
      </GridContainer>
    </header>
  );
}

export default Header;
