import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import PlaceCard from './components/place-card/place-card';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Settings = { rentCount: 312 } as const
root.render(
  <React.StrictMode>
    <App rentCount={Settings.rentCount} />
  </React.StrictMode>
);
