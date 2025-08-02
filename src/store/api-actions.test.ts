import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { State, AppThunkDispatch } from '../types/store';
import { APIRoute } from '../const';
import { checkAuthAction, fetchOfferAction, fetchReviewsAction } from './api-actions';
import { fetchMockOffer } from '../mock/offers';
import { mockReview } from '../mock/reviews';


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
        it('should dispatch "fetchOfferAction.pending" and "fetchOfferAction.fulfilled" with thunk "fetchOfferAction', async () => {
            const mockOffers = [fetchMockOffer()]
            mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, mockOffers);

            await store.dispatch(fetchOfferAction());
            const actions = store.getActions();
            const actionTypes = extractActionsTypes(actions);
            const LoadedOffers = actions.at(1) as ReturnType<typeof fetchOfferAction.fulfilled>;
            expect(actionTypes).toEqual([
                fetchOfferAction.pending.type,
                fetchOfferAction.fulfilled.type,
            ]);
            expect(LoadedOffers.payload).toEqual(mockOffers);
        });
        it('should dispatch "fetchOfferAction.pending" and "fetchOfferAction.rejected" with thunk "fetchOfferAction', async () => {
            mockAxiosAdapter.onGet(APIRoute.Offers).reply(400);

            await store.dispatch(fetchOfferAction());
            const actions = extractActionsTypes(store.getActions());

            expect(actions).toEqual([
                fetchOfferAction.pending.type,
                fetchOfferAction.rejected.type,
            ]);
        });
        it('should dispatch "fetchReviewsAction.pending" and "fetchReviewsAction.fulfilled" with thunk "fetchReviewsAction', async () => {
            const id = "1111"
            mockAxiosAdapter.onGet(`${APIRoute.Reviews}/${id}`).reply(200, [mockReview]);

            await store.dispatch(fetchReviewsAction(id));
            const actions = store.getActions();
            const actionTypes = extractActionsTypes(actions);
            const LoadedReviews = actions.at(1) as ReturnType<typeof fetchOfferAction.fulfilled>;
            expect(LoadedReviews.payload).toEqual([mockReview]);
            expect(actionTypes).toEqual([
                fetchReviewsAction.pending.type,
                fetchReviewsAction.fulfilled.type,
            ]);
        });
        it('should dispatch "fetchReviewsAction.pending" and "fetchReviewsAction.fulfilled" with thunk "fetchReviewsAction', async () => {
            const id = "1111"
            mockAxiosAdapter.onGet(`${APIRoute.Reviews}/${id}`).reply(400);

            await store.dispatch(fetchReviewsAction(id));
            const actions = extractActionsTypes(store.getActions());

            expect(actions).toEqual([
                fetchReviewsAction.pending.type,
                fetchReviewsAction.rejected.type,
            ]);
        });
    });
});