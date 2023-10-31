import CardWork from '@components/CardWork';
import GridContainer from '@components/Grid';
import Separator from '@components/Separator';

//images
import MyReport from '../assets/my-report-online/my_report_online.png';
import EntregouMeWeb from '../assets/entregoume-white-label/entregou-me-web.png';
import GrupoBoticario from '../assets/grupo_boticario.png';
import CasaMagalhaes from '../assets/cm.png';
import Automacaocom from '../assets/automacao_com.png';

function Home() {
  return (
    <>
      <div className='section-hero'>
        <GridContainer dataAos='fade-right'>
          <h5>Opa, eu sou Paulo Janai 👋🏾</h5>
          <h1>
            Product designer e front-end developer com foco na criação e
            evolução das experiências do usuário através de soluções de design
          </h1>

          <div className='companies'>
            <p className='body-l'>Trabalhou em</p>
            <div className='list'>
              <img src={GrupoBoticario} alt='Logo Grupo Boticário' />
              <img src={CasaMagalhaes} alt='Logo Casa Magalahães' />
              <img src={Automacaocom} alt='Logo Automação.com' />
            </div>
          </div>
        </GridContainer>
      </div>

      <div className='section-works'>
        <GridContainer>
          <h2>Trabalhos selecionados</h2>

          <div className='listview-works'>
            <CardWork
              img={MyReport}
              roles='UX/UI Designer, UI Designer, User testing'
              title='Meu relatório online: Plataforma web para ajudar na inspeção predial'
              comingSoon
            />

            <Separator />

            <CardWork
              img={EntregouMeWeb}
              roles='UX/UI Designer, UI Designer'
              title='Automação.com: Experiência do aplicativo de pedidos adaptada para a web'
            />
          </div>
        </GridContainer>
      </div>
    </>
  );
}

export default Home;
