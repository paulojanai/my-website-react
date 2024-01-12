import { RouterProvider } from 'react-router-dom';
import '@scss/main.scss';
import router from '@routes/index.routes';
import Hotjar from '@hotjar/browser';

const siteId = 3815671;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
