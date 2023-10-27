import GridContainer from '@components/Grid';
import { Link } from 'react-router-dom';
import Logo from '@assets/logo-dark.svg';

function Header() {
  return (
    <header>
      <GridContainer>
        <Link to='/' className='logo'>
          <img src={Logo} alt='Logo Paulo Janai' />
        </Link>

        <span data-aos='fade-left' className='menu'></span>
      </GridContainer>
    </header>
  );
}

export default Header;
