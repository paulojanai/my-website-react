import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import Button from '@components/button/Button';
import GridContainer from '@components/Grid';

function Error() {
  return (
    <section className='page-error'>
      <GridContainer>
        <h1>Oops...</h1>
        <h4>Página não encontrada</h4>
        <Button size='medium' href='/'>
          <ArrowLeft size={24} />
          <p className='body-m'>Voltar a página inicial</p>
        </Button>
        <Link to='/'></Link>
      </GridContainer>
    </section>
  );
}

export default Error;
