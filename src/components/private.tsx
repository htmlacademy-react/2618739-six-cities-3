import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../const';
import { useAppSelector } from '../hooks';
import { selectAuth } from '../store/selectors/offers';
type PrivateRouteProps = {
  children: JSX.Element;
}

function Private(props: PrivateRouteProps): JSX.Element {
  const { children } = props;

  const authorizationStatus = useAppSelector(selectAuth);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return (
      <div>Loading...
        <div>
          <img src="img/Spinner-5.gif" />
        </div>
      </div>);
  }

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (children);
  } else {
    return (<Navigate to='/login' />);
  }
}

export default Private;
