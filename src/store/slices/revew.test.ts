import { RequestStatus } from "../../const";
import { ReviewsSlice } from "./review";
import { fetchReviewsAction, putReviewsAction } from "../api-actions";
import { mockReview } from "../../mock/reviews";

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
    it("should set status Loading on fetchReviewsAction pending", () => {
        const initialState = {
            reviews: [],
            status: RequestStatus.Idle
        };
        const expectedState = {
            reviews: [],
            status: RequestStatus.Loading
        };
        const result = ReviewsSlice.reducer(initialState, fetchReviewsAction.pending);
        expect(result).toEqual(expectedState);
    });
    it("should set status Sucess on fetchReviewsAction fulfilled", () => {
        const initialState = {
            reviews: [],
            status: RequestStatus.Idle
        };

        const expectedState = {
            reviews: [mockReview],
            status: RequestStatus.Success
        };
        const result = ReviewsSlice.reducer(initialState, fetchReviewsAction.fulfilled([mockReview], '', '1'));
        expect(result).toEqual(expectedState);
    });
    it("should set status Failed on fetchReviewsAction rejected", () => {
        const initialState = {
            reviews: [],
            status: RequestStatus.Idle
        };
        const expectedState = {
            reviews: [],
            status: RequestStatus.Failed
        };
        const result = ReviewsSlice.reducer(initialState, fetchReviewsAction.rejected);
        expect(result).toEqual(expectedState);
    });
    it("should set status Loading on putReviewsAction pending", () => {
        const initialState = {
            reviews: [],
            status: RequestStatus.Idle
        };
        const expectedState = {
            reviews: [],
            status: RequestStatus.Loading
        };
        const result = ReviewsSlice.reducer(initialState, putReviewsAction.pending);
        expect(result).toEqual(expectedState);
    });
    it("should set status Sucess on putReviewsAction fulfilled", () => {
        const initialState = {
            reviews: [],
            status: RequestStatus.Idle
        };

        const expectedState = {
            reviews: [mockReview],
            status: RequestStatus.Success
        };
        const result = ReviewsSlice.reducer(initialState, putReviewsAction.fulfilled(mockReview, '', { id: "1", comment: "", rating: 5 }));
        expect(result).toEqual(expectedState);
    });
    it("should set status Failed on putReviewsAction rejected", () => {
        const initialState = {
            reviews: [],
            status: RequestStatus.Idle
        };
        const expectedState = {
            reviews: [],
            status: RequestStatus.Failed
        };
        const result = ReviewsSlice.reducer(initialState, putReviewsAction.rejected);
        expect(result).toEqual(expectedState);
    });
});