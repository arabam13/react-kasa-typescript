import App from '@/App';
import '@/index.scss';
import { PropertiesContextProvider } from '@/services/PropertiesContextProvider';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PropertiesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PropertiesContextProvider>
  </React.StrictMode>
);
