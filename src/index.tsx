import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { fetchOfferAction } from './store/api-actions';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const Offers = await store.dispatch(fetchOfferAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offersProps={Offers.payload} />
    </Provider>
  </React.StrictMode>
);
