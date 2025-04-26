import { createReducer } from '@reduxjs/toolkit';
import TOffer from '../types/offers';
import mockOffers from '../mock/offers_mock';
import { fillOffers, setCity, setSorting } from './actions';

type offerState = {
  city: string;
  offers: TOffer[];
  sorting: string;
}

const initialState: offerState = {
  city: 'Paris',
  offers: [],
  sorting: 'Popular'
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  }
  ).addCase(fillOffers, (state) => {
    state.offers = mockOffers();
  }).addCase(setSorting, (state, action) => {
    state.sorting = action.payload;
  });
});

export { reducer };
