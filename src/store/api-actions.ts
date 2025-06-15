import { createAsyncThunk } from '@reduxjs/toolkit';
import TOffer from '../types/offers';
import ReviewPropType from '../types/reviews';
import { UserType, AuthData } from '../types/user'
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

type offer_id = string;

export const fetchReviewsAction = createAsyncThunk<ReviewPropType[], offer_id, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (id: offer_id, { extra: api }) => {
    const { data } = await api.get<ReviewPropType[]>(`${APIRoute.Reviews}/${id}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserType[], void, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuthAction',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserType[]>(APIRoute.Login);
    return data;
  },
);

export const login = createAsyncThunk<UserType[], AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (authData: AuthData, { extra: api }) => {
    const { data } = await api.post<UserType[]>(APIRoute.Login, authData);
    return data;
  },
);

