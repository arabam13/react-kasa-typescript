import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { PropertiesContextProvider } from './services/PropertiesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PropertiesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PropertiesContextProvider>
  </React.StrictMode>
);
