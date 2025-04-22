import { createReducer } from '@reduxjs/toolkit';
import TOffer from '../types/offers';
import mockOffers from '../mock/offers_mock';
import { fillOffers, setCity } from './actions';

type offerState = {
  city: string;
  offers: TOffer[];
}

const initialState: offerState = {
  city: 'Paris',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  }
  ).addCase(fillOffers, (state) => {
    state.offers = mockOffers();
  });
});

export { reducer };
