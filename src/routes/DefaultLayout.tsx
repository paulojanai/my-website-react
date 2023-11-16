import { Outlet } from 'react-router-dom';
import { Header } from '@components/ui/header';
import { Footer } from '@components/ui/footer';

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
