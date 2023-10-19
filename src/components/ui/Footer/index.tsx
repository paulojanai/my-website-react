import { Github, Dribbble, Twitter, Linkedin, Instagram } from 'lucide-react';
import Link from '@components/Link';
import GridContainer from '@components/Grid';

function Footer() {
  return (
    <footer id='section-contact'>
      <GridContainer>
        <div className='top'>
          <div className='content'>
            <h3>pjanai.m.s@gmail.com</h3>
          </div>

          <div className='group-links'>
            <p className='span'>Downloads</p>
            <div className='links'>
              <Link
                link='./paulojanai-cv.pdf'
                text='Currículo'
                nameIcon='FileText'
              />
              {/* <a
                href='./paulojanai-portfolio.pdf'
                className='footer-link'
                download='paulojanai-portfolio'
              >
                <img src='./img/file-text.svg' alt='Ícone file-text' />
                <span>Portfolio</span>
              </a> */}
            </div>
          </div>
        </div>

        <div className='group-links'>
          <p className='span'>Siga me</p>
          <div className='links'>
            <div className='left'>
              <a
                href='https://github.com/paulojanai'
                target='_blank'
                className='footer-link'
              >
                <Github color='white' size={20} />
                <span>github</span>
              </a>
              <a
                href='https://dribbble.com/paulojanai'
                className='footer-link'
                target='_blank'
              >
                <Dribbble color='white' size={20} />
                <span>dribbble</span>
              </a>
            </div>
            <div className='right'>
              <a
                href='https://www.linkedin.com/in/paulojanai/'
                className='footer-link'
                target='_blank'
              >
                <Linkedin color='white' size={20} />
                <span>linkedin</span>
              </a>
              <a
                href='https://twitter.com/paulo_janai'
                className='footer-link'
                target='_blank'
              >
                <Twitter color='white' size={20} />
                <span>twitter</span>
              </a>
              <a
                href='https://www.instagram.com/pjanai.ms/'
                className='footer-link'
                target='_blank'
              >
                <Instagram color='white' size={20} />
                <span>instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className='bottom'>
          <p>© Copyright 2023. All rights reserved.</p>
          <p>Designed and developed: Paulo Janai</p>
        </div>
      </GridContainer>
    </footer>
  );
}

export default Footer;
