import { MockStore, configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { AppThunkDispatch, State } from '../types/store';
import { Provider } from 'react-redux';
import { mockUser } from './user';
import { AuthorizationStatus, CITIES, RequestStatus } from '../const';
import { Sorting } from '../types/sorting';
import { mockReview } from './reviews';

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

export const mockStore = {
    user: {
        auth: AuthorizationStatus.Auth, status: RequestStatus.Idle, info: userInfo
    },
    offers:
    {
        city: CITIES[0].title,
        offers: [],
        favorites: [],
        activeOffer: 1,
        status: RequestStatus.Idle,
        sorting: Sorting.Default
    },
    reviews:
    {
        reviews: [mockReview],
        status: RequestStatus.Idle,
    }
}