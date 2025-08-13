import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { AppThunkDispatch, State } from '../types/store';
import { Provider } from 'react-redux';
import { mockUser } from './user';
import { AuthorizationStatus, RequestStatus } from '../const';
import { Sorting } from '../types/sorting';
import { mockReview } from './reviews';
import { fetchMockOffer } from './offers';

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

export function withStore(
  component: JSX.Element,
  initialState: Partial<State> = {},
): ComponentWithMockStore {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  const mockStore = mockStoreCreator(initialState);

  return ({
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  });
}

const userInfo = mockUser();

const mockOffer = fetchMockOffer();

export const mockStore = {
  user: {
    auth: AuthorizationStatus.Auth, status: RequestStatus.Idle, info: userInfo
  },
  offers:
  {
    city: mockOffer.city.name,
    offers: [mockOffer, fetchMockOffer(), fetchMockOffer()],
    favorites: [fetchMockOffer(), fetchMockOffer()],
    activeOfferId: 1,
    activeOffer: fetchMockOffer(),
    status: RequestStatus.Idle,
    sorting: Sorting.Default,
    nearOffers: []
  },
  reviews:
  {
    reviews: [mockReview],
    status: RequestStatus.Success,
  }
};
