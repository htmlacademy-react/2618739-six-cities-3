import { RequestStatus, AuthorizationStatus } from '../../const';
import { getAuthorizationStatus, getUserInfo } from './user';
import { mockUser } from '../../mock/user';

describe('user slice selectors', () => {

  it('Shoud return auth from the state', () => {
    const state = {
      user: {
        auth: AuthorizationStatus.Auth,
        status: RequestStatus.Idle,
        info: {
          name: '',
          avatarUrl: '',
          isPro: false,
          email: '',
          token: ''
        }
      }
    };
    const res = getAuthorizationStatus(state);
    expect(res).toEqual(AuthorizationStatus.Auth);
  });
  it('Shoud return user info from the state', () => {
    const userInfo = mockUser();
    const state = {
      user: {
        auth: AuthorizationStatus.Auth,
        status: RequestStatus.Idle,
        info: userInfo
      }
    };
    const res = getUserInfo(state);
    expect(res).toEqual(userInfo);
  });


});
