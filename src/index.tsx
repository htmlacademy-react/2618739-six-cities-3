import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import getOffers from './mock/offers_mock';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Settings = { rentCount: 312 } as const;
root.render(
  <React.StrictMode>
    <App rentCount={Settings.rentCount} offersProps={getOffers()} />
  </React.StrictMode>
);
