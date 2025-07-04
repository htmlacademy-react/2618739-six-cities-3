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
});