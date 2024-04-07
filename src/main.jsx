import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import studio from '@theatre/studio';
import extension from '@theatre/r3f/dist/extension'
import { Suspense } from 'react';

//Intializacion de Studio
studio.extend(extension);
studio.initialize();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={null}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
)
