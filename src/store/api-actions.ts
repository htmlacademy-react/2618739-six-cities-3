import { createAsyncThunk } from '@reduxjs/toolkit';
import TOffer from '../types/offers';
import ReviewPropType from '../types/reviews';
import { UserType, AuthData } from '../types/user';
import { offerId } from '../types/reviews';
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
  }
);

export const fetchReviewsAction = createAsyncThunk<ReviewPropType[], offerId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id: offerId, { extra: api }) => {
    const { data } = await api.get<ReviewPropType[]>(`${APIRoute.Reviews}/${id}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserType, void, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthAction',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserType>(APIRoute.Login);
    return data;
  },
);

export const login = createAsyncThunk<UserType, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (authData: AuthData, { extra: api }) => {
    const { data } = await api.post<UserType>(APIRoute.Login, authData);
    return data;
  },
);

export type reviewData = { id: string; comment: string; rating: number }

export const putReviewsAction = createAsyncThunk<ReviewPropType, reviewData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/putReviews',
  async ({ id, comment, rating }, { extra: api }) => {
    const { data } = await api.post<ReviewPropType>(`${APIRoute.Reviews}/${id}`, { comment, rating });
    return data;
  },
);

export const toBookmarksAction = createAsyncThunk<TOffer, BookMarkState, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/toBookmarks',
  async ({ id, status }, { extra: api }) => {
    const { data } = await api.post<TOffer>(`${APIRoute.Favorites}/${id}/${status}`);
    return data;
  },
);
