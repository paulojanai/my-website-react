import { Outlet } from 'react-router-dom';
import Footer from '@components/ui/footer';
import { Header } from '@components/ui/header';

function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
