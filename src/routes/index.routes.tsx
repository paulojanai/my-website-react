import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Home from '@pages/home';
import Error from '@pages/error';
import EntregouMeWeb from '@pages/entregou-me-web';
import DefaultLayout from './DefaultLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<DefaultLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path='cases/entregou-me-web' element={<EntregouMeWeb />} />
    </Route>
  )
);

export default router;
