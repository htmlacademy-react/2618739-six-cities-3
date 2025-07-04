import { RequestStatus } from "../../const";
import { ReviewsSlice } from "./review";

describe("Revew slice tests", () => {
    it('should return initial state with empty action', () => {
        const emptyAction = { type: '' };
        const expectedState = {
            reviews: [],
            status: RequestStatus.Idle
        };

        const result = ReviewsSlice.reducer(expectedState, emptyAction);
        expect(result).toEqual(expectedState);
    });
    it('should return initial state with empty state and empty action', () => {
        const emptyAction = { type: '' };
        const expectedState = {
            reviews: [],
            status: RequestStatus.Idle
        };

        const result = ReviewsSlice.reducer(undefined, emptyAction);
        expect(result).toEqual(expectedState);
    });
});