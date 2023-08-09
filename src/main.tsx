import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!); 

//roteamento//
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);