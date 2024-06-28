import Link from '@components/Link';
import GridContainer from '@components/Grid';
import Separator from '@components/ui/Separator';

import CVPDF from '../../../paulojanai-cv.pdf';
import NocapStudio from '@assets/nocap_studio.svg';

import EmailClipboard from '@components/EmailClipboard';

export function Footer() {
  return (
    <footer id='section-contact'>
      <GridContainer>
        <div className='top'>
          <div className='content'>
            <p className='span'>Vamos conversar</p>
            <EmailClipboard />
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
          <p className='span'>Redes sociais</p>
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
          <p className='body-sm'>
            © Copyright 2024. Todos os direitos reservados.
          </p>
          <div className='development body-sm'>
            <p>Construído por</p>
            <a href=''>
              <img src={NocapStudio} alt='Logo da empresa Nocap Studio' />
            </a>
          </div>
        </div>
      </GridContainer>
    </footer>
  );
}
