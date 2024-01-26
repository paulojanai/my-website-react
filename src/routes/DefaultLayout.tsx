import { Header } from '@components/ui/hHeader';
import { Outlet } from 'react-router-dom';
import { Footer } from '@components/ui/fFooter';

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
