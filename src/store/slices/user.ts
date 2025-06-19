import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { checkAuthAction, login } from '../api-actions';
import { RequestStatus } from '../../const';
import { UserType } from '../../types/user';
import { saveToken } from '../../services/token';


interface UserState {
    auth: AuthorizationStatus;
    status: RequestStatus;
    info: UserType;
}

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

const userSlice = createSlice(
  {
    initialState,
    name: 'user',
    reducers: {
      setAuthStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
        state.auth = action.payload;
      },
    },
    extraReducers(builder) {
      builder.addCase(checkAuthAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
        .addCase(checkAuthAction.fulfilled, (state) => {
          state.auth = AuthorizationStatus.Auth;
          state.status = RequestStatus.Success;
        }).addCase(checkAuthAction.rejected, (state) => {
          state.auth = AuthorizationStatus.NoAuth;
          state.status = RequestStatus.Failed;
        }).addCase(login.pending, (state) => {
          state.status = RequestStatus.Loading;
        }).addCase(login.fulfilled, (state, action) => {
          state.auth = AuthorizationStatus.Auth;
          state.info = action.payload;
          saveToken(action.payload.token);
          state.status = RequestStatus.Success;
        }).addCase(login.rejected, (state) => {
          state.auth = AuthorizationStatus.NoAuth;
          state.status = RequestStatus.Failed;
        });
    }
  }
);

const userActions = userSlice.actions;

export { userActions, userSlice, type UserState };
