import { createAction } from '@reduxjs/toolkit';
import TOffer from '../types/offers';

const setCity = createAction<string>('offers/setCity');

const fillOffers = createAction<TOffer>('offers/fillOffers');

const setSorting = createAction<string>('offers/setSorting');

const setActiveOffer = createAction<number>('offers/setActiveOffer');

export { setCity, fillOffers, setSorting, setActiveOffer };
