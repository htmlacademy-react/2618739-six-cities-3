import { AuthorizationStatus, RequestStatus } from '../../const';
import { userSlice } from './user';
import { checkAuthAction, login } from '../api-actions';
import { mockUser, mockAuthData } from '../../mock/user';

describe('User slice tests', () => {
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
  it('should set status Loading on checkAuthAction pending', () => {
    const initialState = {
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
    const expectedState = {
      auth: AuthorizationStatus.Unknown,
      status: RequestStatus.Loading,
      info: {
        name: '',
        avatarUrl: '',
        isPro: false,
        email: '',
        token: ''
      }
    };
    const result = userSlice.reducer(initialState, checkAuthAction.pending);
    expect(result).toEqual(expectedState);
  });
  it('should set status Sucess on checkAuthAction fulfilled', () => {
    const initialState = {
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
    const user = mockUser();
    const expectedState = {
      auth: AuthorizationStatus.Auth,
      status: RequestStatus.Success,
      info: user
    };
    const result = userSlice.reducer(initialState, checkAuthAction.fulfilled(user, '', undefined));
    expect(result).toEqual(expectedState);
  });
  it('should set status Failed on checkAuthAction rejected', () => {
    const initialState = {
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
    const expectedState = {
      auth: AuthorizationStatus.NoAuth,
      status: RequestStatus.Failed,
      info: {
        name: '',
        avatarUrl: '',
        isPro: false,
        email: '',
        token: ''
      }
    };
    const result = userSlice.reducer(initialState, checkAuthAction.rejected);
    expect(result).toEqual(expectedState);
  });
  it('should set status Loading on login pending', () => {
    const initialState = {
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
    const expectedState = {
      auth: AuthorizationStatus.Unknown,
      status: RequestStatus.Loading,
      info: {
        name: '',
        avatarUrl: '',
        isPro: false,
        email: '',
        token: ''
      }
    };
    const result = userSlice.reducer(initialState, login.pending);
    expect(result).toEqual(expectedState);
  });
  it('should set status Sucess on login fulfilled', () => {
    const initialState = {
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
    const user = mockUser();
    const expectedState = {
      auth: AuthorizationStatus.Auth,
      status: RequestStatus.Success,
      info: user
    };
    const result = userSlice.reducer(initialState, login.fulfilled(user, '', mockAuthData()));
    expect(result).toEqual(expectedState);
  });
  it('should set status Failed on login rejected', () => {
    const initialState = {
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
    const expectedState = {
      auth: AuthorizationStatus.NoAuth,
      status: RequestStatus.Failed,
      info: {
        name: '',
        avatarUrl: '',
        isPro: false,
        email: '',
        token: ''
      }
    };
    const result = userSlice.reducer(initialState, login.rejected);
    expect(result).toEqual(expectedState);
  });
});
