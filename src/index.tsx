import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import getOffers from './mock/offers_mock';
import { Provider } from 'react-redux';
import { store } from './store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Settings = { rentCount: 312 } as const;
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App rentCount={Settings.rentCount} offersProps={getOffers()} />
    </Provider>
  </React.StrictMode>
);
