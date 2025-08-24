import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { getAuthorizationStatus, getUserInfo } from '../store/selectors/user';
import { selectBookmarks } from '../store/selectors/offers';
import { AuthorizationStatus } from '../const';
import { dropToken } from '../services/token';
import { memo } from 'react';
import { store } from '../store';
import { userSlice } from '../store/slices/user';

function UserInfo(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUserInfo);
  const favorites = useAppSelector(selectBookmarks);
  const handleClick = () => {
    dropToken();
    store.dispatch(userSlice.actions.setAuthStatus(AuthorizationStatus.NoAuth));
  };
  if (authStatus === AuthorizationStatus.Auth) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <Link to="/favorites" className="header__user-name user__name">{user.email}</Link>
              <span className="header__favorite-count">{favorites.length}</span>
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              <span className="header__signout" onClick={handleClick}>Sign out</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__login">
                <Link to="/login">Sign in</Link>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    );

  }
}

export default memo(UserInfo);
