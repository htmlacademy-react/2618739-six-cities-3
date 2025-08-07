import { combineReducers } from '@reduxjs/toolkit';
import { OffersSlice } from './slices/offers';
import { ReviewsSlice } from './slices/review';
import { userSlice } from './slices/user';


export const reducer = combineReducers({
  [OffersSlice.name]: OffersSlice.reducer,
  [ReviewsSlice.name]: ReviewsSlice.reducer,
  [userSlice.name]: userSlice.reducer
});
