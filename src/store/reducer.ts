import { createReducer, combineReducers } from '@reduxjs/toolkit';
import TOffer from '../types/offers';
import { setCity, setSorting } from './actions';
import { OffersSlice } from './slices/offers';
import { ReviewsSlice } from './slices/review';

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

const cityReducer = createReducer(initialState, (builder) => {
  builder.addCase(setCity, (state, action) => {
    state.city = action.payload;
  }
  ).addCase(setSorting, (state, action) => {
    state.sorting = action.payload;
  });
});


export const reducer = combineReducers({
  [OffersSlice.name]: OffersSlice.reducer,
  [cityReducer.name]: cityReducer,
  [ReviewsSlice.name]: ReviewsSlice.reducer
});
