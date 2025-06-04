import { createAsyncThunk } from '@reduxjs/toolkit';
import TOffer from '../types/offers';
import ReviewPropType from '../types/reviews';
import { AppDispatch, State } from '../types/store';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../const';

export const fetchOfferAction = createAsyncThunk<TOffer[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchOffers',
    async (_arg, { extra: api }) => {
        const { data } = await api.get<TOffer[]>(APIRoute.Offers);
        return data;
    },
);

export const fetchReviewsAction = createAsyncThunk<ReviewPropType[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchReviews',
    async (_arg, { extra: api }) => {
        const { data } = await api.get<ReviewPropType[]>(APIRoute.Reviews);
        return data;
    },
);