import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Home from '@pages/home';
import Error from '@pages/error';
import EntregouMeWeb from '@pages/cases/entregou-me-web';
import MyReportOnline from '@pages/cases/my-report-online';

import DefaultLayout from './DefaultLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<DefaultLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path='cases/entregou-me-web' element={<EntregouMeWeb />} />
      <Route path='cases/my-report-online' element={<MyReportOnline />} />
    </Route>
  )
);

export default router;
