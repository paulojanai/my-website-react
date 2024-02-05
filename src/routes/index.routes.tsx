import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Home from '@pages/home';
import About from '@pages/about';
import Error from '@pages/error';
import EntregouMeWeb from '@pages/cases/entregoume-client';
import MyReportOnline from '@pages/cases/my-report-online';

import DefaultLayout from './DefaultLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<DefaultLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='cases/'>
        <Route path='entregoume-client' element={<EntregouMeWeb />} />
        <Route path='my-report-online' element={<MyReportOnline />} />
      </Route>
    </Route>
  )
);

export default router;
