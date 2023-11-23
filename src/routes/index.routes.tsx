import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Home from '@pages/home';
import Error from '@pages/error';
import EntregouMeWeb from '@pages/cases/entregou-me-web';
import MyReportOnline from '@pages/cases/my-report-online';
import NavProvider from '@context/NavContext';

import DefaultLayout from './DefaultLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<DefaultLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route
        path='cases/'
        element={
          <NavProvider>
            <Outlet />
          </NavProvider>
        }
      >
        <Route path='entregou-me-web' element={<EntregouMeWeb />} />
        <Route path='my-report-online' element={<MyReportOnline />} />
      </Route>
    </Route>
  )
);

export default router;
