import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ErrorBoundary from './Components/Error_boundary/Error_boundary';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ErrorBoundary>
);