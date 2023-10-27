import GridContainer from '@components/Grid';

function Home() {
  return (
    <div className='section-hero'>
      <GridContainer>
        <h5>Opa, eu sou Paulo Janai 👋🏾</h5>
        <h1>
          Product designer e front-end developer com foco na criação e evolução
          das experiências do usuário através de soluções de design
        </h1>

        <div className='companies'>
          <p className='body-l'>Trabalhou em</p>
        </div>
      </GridContainer>
    </div>
  );
}

export default Home;
