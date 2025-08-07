import { State } from '../../types/store';

const selectOffers = (state: Pick<State, 'offers'>) => state.offers.offers;

const selectCity = (state: Pick<State, 'offers'>) => state.offers.city;

const selectSorting = (state: Pick<State, 'offers'>) => state.offers.sorting;

const selectStatus = (state: Pick<State, 'offers'>) => state.offers.status;

const selectActiveOffer = (state: Pick<State, 'offers'>) => state.offers.activeOffer;

const selectBookmarks = (state: Pick<State, 'offers'>) => state.offers.favorites;

export { selectOffers, selectCity, selectSorting, selectStatus, selectActiveOffer, selectBookmarks };
