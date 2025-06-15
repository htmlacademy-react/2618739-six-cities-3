import { AuthorizationStatus, } from '../../const';
import { State } from '../../types/store';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state.user.auth;

export const getUserInfo = (state: State) =>
  state.user.info;
