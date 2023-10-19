import GridContainer from '@components/Grid';
import Logo from '@assets/logo-dark.svg';

function Header() {
  return (
    <header>
      <GridContainer>
        <a className='logo' href='https://paulojanai.com'>
          <img src={Logo} alt='Logo Paulo Janai' />
        </a>

        <span data-aos='fade-left' className='menu'></span>
      </GridContainer>
    </header>
  );
}

export default Header;
