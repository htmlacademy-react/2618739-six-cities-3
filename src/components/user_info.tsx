import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { getAuthorizationStatus, getUserInfo } from '../store/selectors/user';
import { AuthorizationStatus } from '../const';
import { dropToken } from '../services/token';

function UserInfo(): JSX.Element {
  const authStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUserInfo);
  if (authStatus === AuthorizationStatus.Auth) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">{user.email}</span>
              <span className="header__favorite-count">3</span>
            </a>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="#">
              <span className="header__signout" onClick={dropToken}>Sign out</span>
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

export default UserInfo;
