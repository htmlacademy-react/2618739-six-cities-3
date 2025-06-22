import { State } from '../../types/store';

const selectOffers = (state: State) => state.offers.offers;

const selectCity = (state: State) => state.offers.city;

const selectSorting = (state: State) => state.offers.sorting;

const selectStatus = (state: State) => state.offers.status;

const selectActiveOffer = (state: State) => state.offers.activeOffer;

const selectAuth = (state: State) => state.user.auth;

const selectBookmarks = (state: State) => state.offers.favorites;

export { selectOffers, selectCity, selectSorting, selectStatus, selectAuth, selectActiveOffer, selectBookmarks };
