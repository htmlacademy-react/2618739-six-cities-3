import State from '../../types/store';

const selectOffers = (state: State) => state.offers;

const selectCity = (state: State) => state.city;

export { selectOffers, selectCity };
