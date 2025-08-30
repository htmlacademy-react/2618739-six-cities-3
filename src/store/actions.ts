import { createAction } from '@reduxjs/toolkit';
import TOffer from '../types/offers';

const setCity = createAction<string>('offers/setCity');

const fillOffers = createAction<TOffer>('offers/fillOffers');

const setSorting = createAction<string>('offers/setSorting');

const setActiveOfferId = createAction<number>('offers/setActiveOfferId');

export { setCity, fillOffers, setSorting, setActiveOfferId };
