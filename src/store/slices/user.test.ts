import { AuthorizationStatus, RequestStatus } from "../../const";
import { userSlice } from "./user";

describe("User slice tests", () => {
    it('should return initial state with empty action', () => {
        const emptyAction = { type: '' };
        const expectedState = {
            auth: AuthorizationStatus.Unknown,
            status: RequestStatus.Idle,
            info: {
                name: '',
                avatarUrl: '',
                isPro: false,
                email: '',
                token: ''
            }
        };

        const result = userSlice.reducer(expectedState, emptyAction);
        expect(result).toEqual(expectedState);
    });
    it('should return initial state with empty state and empty action', () => {
        const emptyAction = { type: '' };
        const expectedState = {
            auth: AuthorizationStatus.Unknown,
            status: RequestStatus.Idle,
            info: {
                name: '',
                avatarUrl: '',
                isPro: false,
                email: '',
                token: ''
            }
        };

        const result = userSlice.reducer(undefined, emptyAction);
        expect(result).toEqual(expectedState);
    });
    it('should change authorization state by action', () => {
        const initialState = {
            auth: AuthorizationStatus.Auth,
            status: RequestStatus.Idle,
            info: {
                name: '',
                avatarUrl: '',
                isPro: false,
                email: '',
                token: ''
            }
        };
        const expectedState = {
            auth: AuthorizationStatus.NoAuth,
            status: RequestStatus.Idle,
            info: {
                name: '',
                avatarUrl: '',
                isPro: false,
                email: '',
                token: ''
            }
        };

        const result = userSlice.reducer(initialState, userSlice.actions.setAuthStatus(AuthorizationStatus.NoAuth));
        expect(result).toEqual(expectedState);
    });
});