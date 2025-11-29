import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 👇 C'EST LA LIGNE QUI MANQUAIT : On importe le fichier qu'on vient de créer
import './index.css'; 

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);