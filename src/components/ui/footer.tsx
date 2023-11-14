// import { Copy } from 'lucide-react';

import Link from '@components/Link';
import GridContainer from '@components/Grid';
import Separator from '@components/Separator';

import CVPDF from '../../../paulojanai-cv.pdf';

import NocapStudio from '@assets/NocapStudio.svg';

function Footer() {
  return (
    <footer id='section-contact'>
      <GridContainer>
        <div className='top'>
          <div className='content'>
            <p className='span'>Contato</p>
            <div className='email'>
              <h3>pjanai.m.s@gmail.com</h3>
              {/* <button className='btn-copy'>
                <Copy />
              </button> */}
            </div>
          </div>

          <div className='group-links'>
            <p className='span'>Downloads</p>
            <div className='links'>
              <Link
                link={CVPDF}
                text='Resume'
                nameIcon='FileText'
                download={true}
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
          <p className='span'>Siga-me</p>
          <div className='links'>
            <div className='left'>
              <Link
                link='https://www.linkedin.com/in/paulojanai/'
                text='Linkedin'
                nameIcon='Linkedin'
              />

              <Link
                link='https://dribbble.com/paulojanai'
                text='Dribbble'
                nameIcon='Dribbble'
              />
            </div>
            <div className='right'>
              <Link
                link='https://github.com/paulojanai'
                text='Github'
                nameIcon='Github'
              />
              <Link
                link='https://twitter.com/paulo_janai'
                text='Twitter'
                nameIcon='Twitter'
              />
            </div>
          </div>
        </div>

        <Separator />

        <div className='bottom'>
          <p>© Copyright 2023. All rights reserved.</p>
          <div className='development'>
            <p>Design and development by</p>
            <a
              // href='https://nocapstudio.com.br'
              href='https://www.instagram.com/nocappro/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={NocapStudio} alt='Nocap Studio' />
            </a>
          </div>
        </div>
      </GridContainer>
    </footer>
  );
}

export default Footer;
