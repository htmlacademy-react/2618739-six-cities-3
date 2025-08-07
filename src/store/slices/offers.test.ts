import { OffersSlice } from './offers';
import { RequestStatus, CITIES } from '../../const';
import { Sorting } from '../../types/sorting';
import { fetchOfferAction, toBookmarksAction } from '../api-actions';
import { fetchMockOffer } from '../../mock/offers';

describe('Offers slice tests', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Idle,
      sorting: Sorting.Default,
      favorites: []
    };

    const result = OffersSlice.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });
  it('should return initial state with empty state and empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Idle,
      sorting: Sorting.Default,
      favorites: []
    };

    const result = OffersSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });
  it('choosing city', () => {
    const result = OffersSlice.reducer(undefined, OffersSlice.actions.setCity(CITIES[1].title));
    expect(result.city).toEqual(CITIES[1].title);
  });
  it('set sorting', () => {
    const result = OffersSlice.reducer(undefined, OffersSlice.actions.setSorting(Sorting.Hight));
    expect(result.sorting).toEqual(Sorting.Hight);
  });
  it('set active offer', () => {
    const result = OffersSlice.reducer(undefined, OffersSlice.actions.setActiveOffer(1));
    expect(result.activeOffer).toEqual(1);
  });
  it('should set status Loading on fetchOfferAction pending', () => {
    const initialState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Idle,
      sorting: Sorting.Default,
      favorites: []
    };
    const expectedState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Loading,
      sorting: Sorting.Default,
      favorites: []
    };
    const result = OffersSlice.reducer(initialState, fetchOfferAction.pending);
    expect(result).toEqual(expectedState);
  });
  it('should set status Loading on fetchOfferAction pending', () => {
    const initialState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Idle,
      sorting: Sorting.Default,
      favorites: []
    };
    const expectedState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Loading,
      sorting: Sorting.Default,
      favorites: []
    };
    const result = OffersSlice.reducer(initialState, fetchOfferAction.pending);
    expect(result).toEqual(expectedState);
  });
  it('should set status Sucess on fetchOfferAction fulfilled', () => {
    const initialState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Idle,
      sorting: Sorting.Default,
      favorites: []
    };
    const mockOffers = [fetchMockOffer()];
    const expectedState = {
      city: CITIES[0].title,
      offers: mockOffers,
      activeOffer: 0,
      status: RequestStatus.Success,
      sorting: Sorting.Default,
      favorites: []
    };
    const result = OffersSlice.reducer(initialState, fetchOfferAction.fulfilled(mockOffers, '', undefined));
    expect(result).toEqual(expectedState);
  });
  it('should set status Failed on fetchOfferAction rejected', () => {
    const initialState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Idle,
      sorting: Sorting.Default,
      favorites: []
    };
    const expectedState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Failed,
      sorting: Sorting.Default,
      favorites: []
    };
    const result = OffersSlice.reducer(initialState, fetchOfferAction.rejected);
    expect(result).toEqual(expectedState);
  });
  it('should set status Loading on toBookmarksAction pending', () => {
    const initialState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Idle,
      sorting: Sorting.Default,
      favorites: []
    };
    const expectedState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Loading,
      sorting: Sorting.Default,
      favorites: []
    };
    const result = OffersSlice.reducer(initialState, toBookmarksAction.pending);
    expect(result).toEqual(expectedState);
  });
  it('should set status Sucess on toBookmarksAction fulfilled', () => {
    const initialState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Idle,
      sorting: Sorting.Default,
      favorites: []
    };
    const mockOffer = fetchMockOffer();
    const expectedState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Success,
      sorting: Sorting.Default,
      favorites: [mockOffer]
    };
    const result = OffersSlice.reducer(initialState, toBookmarksAction.fulfilled(mockOffer, '', { id: mockOffer.id, status: 1 }));
    expect(result).toEqual(expectedState);
  });
  it('should set status Failed on toBookmarksAction rejected', () => {
    const initialState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Idle,
      sorting: Sorting.Default,
      favorites: []
    };
    const expectedState = {
      city: CITIES[0].title,
      offers: [],
      activeOffer: 0,
      status: RequestStatus.Failed,
      sorting: Sorting.Default,
      favorites: []
    };
    const result = OffersSlice.reducer(initialState, toBookmarksAction.rejected);
    expect(result).toEqual(expectedState);
  });
});
