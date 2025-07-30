import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { State, AppThunkDispatch } from '../types/store';
import { APIRoute } from '../const';
import { checkAuthAction } from './api-actions';

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

describe('Async actions', () => {
    const axios = createAPI();
    const mockAxiosAdapter = new MockAdapter(axios);
    const middleware = [thunk.withExtraArgument(axios)];
    const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
    let store: ReturnType<typeof mockStoreCreator>;

    beforeEach(() => {
        store = mockStoreCreator(
            {}
        );
    });

    describe('checkAuthAction', () => {
        it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
            mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

            await store.dispatch(checkAuthAction());
            const actions = extractActionsTypes(store.getActions());

            expect(actions).toEqual([
                checkAuthAction.pending.type,
                checkAuthAction.fulfilled.type,
            ]);
        });

        it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async () => {
            mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

            await store.dispatch(checkAuthAction());
            const actions = extractActionsTypes(store.getActions());

            expect(actions).toEqual([
                checkAuthAction.pending.type,
                checkAuthAction.rejected.type,
            ]);
        });
    });
});