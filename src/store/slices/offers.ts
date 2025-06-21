import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type TOffer from '../../types/offers';
import { CITIES } from '../../const';
import { fetchOfferAction } from '../api-actions';
import { RequestStatus } from '../../const';
import { Sorting } from '../../types/sorting';


interface OffersState {
  city: string;
  offers: TOffer[];
  status: RequestStatus;
  sorting: Sorting;
}

const offers: TOffer[] = [];

const initialState: OffersState = {
  city: CITIES[0].title,
  offers,
  status: RequestStatus.Idle,
  sorting: Sorting.Default
};

const OffersSlice = createSlice(

  {
    initialState,
    name: 'offers',
    reducers: {
      setCity: (state, action: PayloadAction<string>) => {
        state.city = action.payload;
      },
    },
    extraReducers(builder) {
      builder.addCase(fetchOfferAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
        .addCase(fetchOfferAction.fulfilled, (state, action) => {
          state.status = RequestStatus.Success;
          state.offers = action.payload;
        }).addCase(fetchOfferAction.rejected, (state) => {
          state.status = RequestStatus.Failed;
        });
    }
  }
);

const offersActions = OffersSlice.actions;

export { offersActions, OffersSlice, type OffersState };
