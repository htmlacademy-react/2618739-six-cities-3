import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type ReviewPropType from '../../types/reviews';
import { fetchReviewsAction } from '../api-actions';
import { RequestStatus } from '../../const';


interface ReviewState {
  reviews: ReviewPropType[];
  status: RequestStatus;
}

const reviews: ReviewPropType[] = [];

const initialState: ReviewState = {
  reviews,
  status: RequestStatus.Idle
};

const ReviewsSlice = createSlice(

  {
    initialState,
    name: 'reviews',
    reducers: {},
    extraReducers(builder) {
      builder.addCase(fetchReviewsAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
        .addCase(fetchReviewsAction.fulfilled, (state, action) => {
          state.status = RequestStatus.Success;
          state.reviews = action.payload;
        }).addCase(fetchReviewsAction.rejected, (state) => {
          state.status = RequestStatus.Failed;
        });
    }
  }
);

const reviewsActions = ReviewsSlice.actions;

export { reviewsActions, ReviewsSlice };
