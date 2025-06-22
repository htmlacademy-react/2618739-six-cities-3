import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type TOffer from '../../types/offers';
import { CITIES } from '../../const';
import { fetchOfferAction, toBookmarksAction, getBookmarksAction } from '../api-actions';
import { RequestStatus } from '../../const';
import { Sorting } from '../../types/sorting';


interface OffersState {
  city: string;
  offers: TOffer[];
  activeOffer: number;
  status: RequestStatus;
  sorting: Sorting;
  favorites: TOffer[];
}

const offers: TOffer[] = [];

const initialState: OffersState = {
  city: CITIES[0].title,
  offers,
  activeOffer: 0,
  status: RequestStatus.Idle,
  sorting: Sorting.Default,
  favorites: []
};

const OffersSlice = createSlice(

  {
    initialState,
    name: 'offers',
    reducers: {
      setCity: (state, action: PayloadAction<string>) => {
        state.city = action.payload;
      },
      setSorting: (state, action: PayloadAction<Sorting>) => {
        state.sorting = action.payload;
      },
      setActiveOffer: (state, action: PayloadAction<number>) => {
        state.activeOffer = action.payload;
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
        }).addCase(toBookmarksAction.pending, (state) => {
          state.status = RequestStatus.Loading;
        })
        .addCase(toBookmarksAction.fulfilled, (state, action) => {
          state.status = RequestStatus.Success;
          if (action.payload.isFavorite === true) {
            state.favorites.push(action.payload);
          }
          else {
            const index = state.favorites.findIndex(item => item.id === action.payload.id);
            if (index > -1) {
              state.favorites.splice(index);
            }
          }
        }).addCase(toBookmarksAction.rejected, (state) => {
          state.status = RequestStatus.Failed;
        }).addCase(getBookmarksAction.pending, (state) => {
          state.status = RequestStatus.Loading;
        })
        .addCase(getBookmarksAction.fulfilled, (state, action) => {
          state.status = RequestStatus.Success;
          state.favorites = action.payload;
        }).addCase(getBookmarksAction.rejected, (state) => {
          state.status = RequestStatus.Failed;
        });
    }
  }
);

const offersActions = OffersSlice.actions;

export { offersActions, OffersSlice, type OffersState };
