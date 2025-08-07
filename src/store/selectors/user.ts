import { AuthorizationStatus, } from '../../const';
import { State } from '../../types/store';

export const getAuthorizationStatus = (state: Pick<State, 'user'>): AuthorizationStatus =>
  state.user.auth;

export const getUserInfo = (state: Pick<State, 'user'>) =>
  state.user.info;
