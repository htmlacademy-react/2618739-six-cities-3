import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { State, AppThunkDispatch } from '../types/store';
import { APIRoute } from '../const';
import { checkAuthAction, fetchOfferAction, fetchReviewsAction, putReviewsAction, fetchNearOffersAction } from './api-actions';
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
  });
  describe('fetchOfferAction', () => {
    it('should dispatch "fetchOfferAction.pending" and "fetchOfferAction.fulfilled" with thunk "fetchOfferAction', async () => {
      const mockOffers = [fetchMockOffer()];
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
  });
  describe('fetchReviewsAction', () => {
    it('should dispatch "fetchReviewsAction.pending" and "fetchReviewsAction.fulfilled" with thunk "fetchReviewsAction', async () => {
      const id = '1111';
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
    it('should dispatch "fetchReviewsAction.pending" and "fetchReviewsAction.rejected" with thunk "fetchReviewsAction', async () => {
      const id = '1111';
      mockAxiosAdapter.onGet(`${APIRoute.Reviews}/${id}`).reply(400);

      await store.dispatch(fetchReviewsAction(id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.rejected.type,
      ]);
    });
  });
  describe('putReviewsAction', () => {
    it('should dispatch "putReviewsAction.pending" and "putReviewsAction.fulfilled" with thunk "putReviewsAction', async () => {
      const id = String(mockReview.id);
      mockAxiosAdapter.onPost(`${APIRoute.Reviews}/${id}`).reply(200, [mockReview]);

      await store.dispatch(putReviewsAction({ id: String(mockReview.id), comment: mockReview.comment, rating: mockReview.rating }));
      const actions = store.getActions();
      const actionTypes = extractActionsTypes(actions);
      const LoadedReviews = actions.at(1) as ReturnType<typeof putReviewsAction.fulfilled>;
      expect(actionTypes).toEqual([
        putReviewsAction.pending.type,
        putReviewsAction.fulfilled.type,
      ]);
      expect(LoadedReviews.payload).toEqual([mockReview]);
    });
    it('should dispatch "putReviewsAction.pending" and "putReviewsAction.rejected" with thunk "putReviewsAction', async () => {
      const id = '1111';
      mockAxiosAdapter.onPost(`${APIRoute.Reviews}/${id}`).reply(400);

      await store.dispatch(fetchReviewsAction(id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.rejected.type,
      ]);
    });
  });
  describe('fetchNearOffersAction', () => {
    it('should dispatch "fetchNearOffersAction.pending" and "fetchNearOffersAction.fulfilled" with thunk "putReviewsAction', async () => {
      const id = String(mockReview.id);
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${id}/nearby`).reply(200, [mockReview]);

      await store.dispatch(fetchNearOffersAction(String(mockReview.id)));
      const actions = store.getActions();
      const actionTypes = extractActionsTypes(actions);
      const LoadedReviews = actions.at(1) as ReturnType<typeof putReviewsAction.fulfilled>;
      expect(actionTypes).toEqual([
        fetchNearOffersAction.pending.type,
        fetchNearOffersAction.fulfilled.type,
      ]);
      expect(LoadedReviews.payload).toEqual([mockReview]);
    });
    it('should dispatch "fetchNearOffersAction.pending" and "fetchNearOffersAction.rejected" with thunk "putReviewsAction', async () => {
      const id = '1111';
      mockAxiosAdapter.onGet(`${APIRoute.Offers}/${id}/nearby`).reply(400);

      await store.dispatch(fetchReviewsAction(id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.rejected.type,
      ]);
    });
  });
});
