import { createReducer, combineReducers } from '@reduxjs/toolkit';
import TOffer from '../types/offers';
import { setCity, setSorting } from './actions';
import { OffersSlice } from './slices/offers';
import { ReviewsSlice } from './slices/review';
import { userSlice } from './slices/user';
import { RequestStatus } from '../const';
import { Sorting } from '../types/sorting';

type offerState = {
  city: string;
  offers: TOffer[];
  sorting: string;
  status: RequestStatus;
}

const initialState: offerState = {
  city: 'Paris',
  offers: [],
  sorting: Sorting.Default,
  status: RequestStatus.Idle,

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
  [ReviewsSlice.name]: ReviewsSlice.reducer,
  [userSlice.name]: userSlice.reducer
});
