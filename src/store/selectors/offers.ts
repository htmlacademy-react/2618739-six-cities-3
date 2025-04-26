import { State } from '../../types/store';

const selectOffers = (state: State) => state.offers;

const selectCity = (state: State) => state.city;

const selectSorting = (state: State) => state.sorting;

export { selectOffers, selectCity, selectSorting };
