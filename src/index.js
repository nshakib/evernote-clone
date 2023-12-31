import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="240391671223-hkqhtla82jrsd6p43jilk42gj6ijcnif.apps.googleusercontent.com">
  <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
  
);