import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Dribbble, Github, Linkedin, Menu, X } from 'lucide-react';

import GridContainer from '@components/Grid';
import Logo from '@assets/logo-dark.svg';

import CVPDF from '../../../paulojanai-cv.pdf';
import { navLinks } from '@data/nav/links';
import Button from '@components/button/Button';
import { XTwitter } from '@components/Icons';
import OpenToWork from '@components/OpenToWork';

export function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [modeCase, setModeCase] = useState<boolean>(false);
  const actualPage = useLocation();

  useEffect(() => {
    if (actualPage.pathname === '/') {
      setModeCase(false);
    } else {
      setModeCase(true);
    }
  }, [actualPage.pathname, modeCase]);

  const actionMenu = () => {
    setOpen(!open);
    document.documentElement.classList.toggle('open-menu');
  };

  const handleClickNav = (link: string) => {
    if (screen.width <= 768) {
      actionMenu();
    }

    const initPosition: number = document.getElementById(link)?.offsetTop || 0;

    window.scrollTo({
      top: initPosition - 40,
      behavior: 'smooth',
    });
  };

  return (
    <header>
      {modeCase ? (
        <GridContainer className='navbar-mode-case'>
          <div className='left' data-aos='fade-down'>
            <Button href='/'>
              <ArrowLeft size={24} />
              <p>Voltar</p>
            </Button>
            <OpenToWork />
          </div>

          <nav className='nav-default-mode-case' data-aos='fade-down'>
            <ul>
              <ul className='social'>
                <li className='nav-link'>
                  <a
                    href='https://www.linkedin.com/in/paulojanai/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Linkedin size={20} />
                  </a>
                </li>
                <li className='nav-link'>
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
        </GridContainer>
      ) : (
        <GridContainer>
          <div className='left' data-aos='fade-down'>
            <Link to='/' className='logo'>
              <img src={Logo} alt='Logo Paulo Janai' />
            </Link>
            <div className='open-to-work-visible'>
              <OpenToWork />
            </div>
          </div>

          <nav className='nav-default' data-aos='fade-down'>
            <ul>
              {navLinks.map((item, index) => (
                <li className='nav-link' key={index}>
                  <a onClick={() => handleClickNav(item.linkID)}>{item.name}</a>
                </li>
              ))}
              <li className='nav-link'>
                <a href='/about'>Sobre</a>
              </li>
              <li className='nav-link'>
                <a href={CVPDF} target='_blank'>
                  Resume
                </a>
              </li>
              <ul className='social'>
                <li className='nav-link'>
                  <a
                    href='https://www.linkedin.com/in/paulojanai/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Linkedin size={20} />
                  </a>
                </li>
                <li className='nav-link'>
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
                {navLinks.map((item, index) => (
                  <li className='nav-link' key={index}>
                    <a onClick={() => handleClickNav(item.linkID)}>
                      {item.name}
                    </a>
                  </li>
                ))}
                <li className='nav-link'>
                  <a href='/about'>Sobre</a>
                </li>
                <li className='nav-link'>
                  <a href='' target='_blank'>
                    Resume
                  </a>
                </li>
                <ul className='social'>
                  <li className='nav-link'>
                    <a
                      href='https://www.linkedin.com/in/paulojanai/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Linkedin size={32} />
                    </a>
                  </li>
                  <li className='nav-link'>
                    <a
                      href='https://github.com/paulojanai'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Dribbble size={32} />
                    </a>
                  </li>
                  <li className='nav-link'>
                    <a
                      href='https://github.com/paulojanai'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Github size={32} />
                    </a>
                  </li>
                  <li className='nav-link'>
                    <a
                      href='https://github.com/paulojanai'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <div className='x-twitter'>
                        <XTwitter />
                      </div>
                    </a>
                  </li>
                </ul>
              </ul>
            </nav>
          </div>
        </GridContainer>
      )}
    </header>
  );
}
