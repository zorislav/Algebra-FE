import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import NaloziProvider from './context/NaloziProvider';
import HamburgermenuProvider from './context/HamburgermenuProvider';


import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NaloziProvider>
      <HamburgermenuProvider>
        <App />
      </HamburgermenuProvider>
    </NaloziProvider>
  </React.StrictMode>
);

