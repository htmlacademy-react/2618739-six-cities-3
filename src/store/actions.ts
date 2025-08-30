import { createAction } from '@reduxjs/toolkit';
import TOffer from '../types/offers';
import { AuthorizationStatus } from '../const';

const setCity = createAction<string>('offers/setCity');

const fillOffers = createAction<TOffer>('offers/fillOffers');

const setSorting = createAction<string>('offers/setSorting');

const setActiveOfferId = createAction<number>('offers/setActiveOfferId');

const setAuthStatus = createAction<AuthorizationStatus>('user/setAuthStatus');

export { setCity, fillOffers, setSorting, setActiveOfferId, setAuthStatus };
