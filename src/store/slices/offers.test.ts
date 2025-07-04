import { OffersSlice } from './offers';
import { RequestStatus, CITIES } from '../../const';
import { Sorting } from '../../types/sorting';

describe("Offers slice tests", () => {
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
    it("choosing city", () => {
        const result = OffersSlice.reducer(undefined, OffersSlice.actions.setCity(CITIES[1].title));
        expect(result.city).toEqual(CITIES[1].title);
    })
    it("set sorting", () => {
        const result = OffersSlice.reducer(undefined, OffersSlice.actions.setSorting(Sorting.Hight));
        expect(result.sorting).toEqual(Sorting.Hight);
    })

});