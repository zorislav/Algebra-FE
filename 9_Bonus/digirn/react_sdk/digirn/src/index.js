import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import HamburgermenuProvider from './context/HamburgermenuProvider';
import HeaderProvider from './context/HeaderProvider';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderProvider>
      <HamburgermenuProvider>
        <App />
      </HamburgermenuProvider>
    </HeaderProvider>
  </React.StrictMode>
);

