import Link from '@components/Link';
import GridContainer from '@components/Grid';
import Separator from '@components/Separator';

function Footer() {
  return (
    <footer id='section-contact'>
      <GridContainer>
        <div className='top'>
          <div className='content'>
            <p className='span'>Contato</p>
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
          <p className='span'>Siga-me</p>
          <div className='links'>
            <div className='left'>
              <Link
                link='https://github.com/paulojanai'
                text='Github'
                nameIcon='Github'
              />
              <Link
                link='https://dribbble.com/paulojanai'
                text='Dribbble'
                nameIcon='Dribbble'
              />
            </div>
            <div className='right'>
              <Link
                link='https://www.linkedin.com/in/paulojanai/'
                text='Linkedin'
                nameIcon='Linkedin'
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
          <p>Design e developer por Nocap Studio</p>
        </div>
      </GridContainer>
    </footer>
  );
}

export default Footer;
