import { Header } from '@components/ui/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from '@components/ui/Footer';

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
