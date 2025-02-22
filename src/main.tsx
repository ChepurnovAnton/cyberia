import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/shared/styles/index.scss';
import App from './app/App.tsx';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
