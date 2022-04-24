import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import AppProvider from './AppProvider';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </StrictMode>
);