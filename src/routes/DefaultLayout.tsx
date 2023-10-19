import { Outlet } from 'react-router-dom';
import Footer from '@components/ui/footer';
import Navbar from '@components/ui/navbar';

function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
