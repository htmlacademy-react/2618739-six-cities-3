import { RequestStatus, CITIES } from '../../const';
import { Sorting } from '../../types/sorting';
import { selectActiveOfferId, selectCity, selectSorting, selectStatus, selectBookmarks, selectOffers } from './offers';
import { fetchMockOffer } from '../../mock/offers';

describe('offers slice selectors', () => {

  it('Shoud return offers from the state', () => {
    const mockOffers = [fetchMockOffer()];
    const state = {
      offers: {
        city: CITIES[0].title,
        offers: mockOffers,
        activeOfferId: 333,
        status: RequestStatus.Success,
        sorting: Sorting.Hight,
        favorites: []
      }
    };
    const res = selectOffers(state);
    expect(res).toBe(mockOffers);
  });

  it('Shoud return city from the state', () => {

    const state = {
      offers: {
        city: CITIES[3].title,
        offers: [],
        activeOfferId: 0,
        status: RequestStatus.Idle,
        sorting: Sorting.Default,
        favorites: []
      }
    };
    const res = selectCity(state);
    expect(res).toBe(CITIES[3].title);
  });
  it('Shoud return sorting from the state', () => {

    const state = {
      offers: {
        city: CITIES[0].title,
        offers: [],
        activeOfferId: 0,
        status: RequestStatus.Idle,
        sorting: Sorting.Hight,
        favorites: []
      }
    };
    const res = selectSorting(state);
    expect(res).toBe(Sorting.Hight);
  });
  it('Shoud return status from the state', () => {

    const state = {
      offers: {
        city: CITIES[0].title,
        offers: [],
        activeOfferId: 0,
        status: RequestStatus.Success,
        sorting: Sorting.Hight,
        favorites: []
      }
    };
    const res = selectStatus(state);
    expect(res).toBe(RequestStatus.Success);
  });
  it('Shoud return active offer from the state', () => {

    const state = {
      offers: {
        city: CITIES[0].title,
        offers: [],
        activeOfferId: 333,
        activeOffer: undefined,
        status: RequestStatus.Success,
        sorting: Sorting.Hight,
        favorites: [],
        nearOffers: []
      }
    };
    const res = selectActiveOfferId(state);
    expect(res).toBe(333);
  });
  it('Shoud return favorites from the state', () => {
    const mockFavorites = [fetchMockOffer()];
    const state = {
      offers: {
        city: CITIES[0].title,
        offers: [],
        activeOfferId: 333,
        activeOffer: undefined,
        status: RequestStatus.Success,
        sorting: Sorting.Hight,
        favorites: mockFavorites,
        nearOffers: []
      }
    };
    const res = selectBookmarks(state);
    expect(res).toBe(mockFavorites);
  });

});
