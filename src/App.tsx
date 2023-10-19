import { BrowserRouter } from 'react-router-dom';
import { Router } from '@routes/index.routes';
import '@scss/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
