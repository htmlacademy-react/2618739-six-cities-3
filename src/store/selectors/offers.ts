import { State } from '../../types/store';

const selectOffers = (state: State) => state.offers.offers;

const selectCity = (state: State) => state.offers.city;

const selectSorting = (state: State) => state.sorting;

export { selectOffers, selectCity, selectSorting };
