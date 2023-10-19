import { Route, Routes } from 'react-router-dom';

import Home from '@pages/home';
import EntregouMeWeb from '@pages/entregou-me-web';
import DefaultLayout from './DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/cases/entregou-me-web' element={<EntregouMeWeb />} />
      </Route>
    </Routes>
  );
}
