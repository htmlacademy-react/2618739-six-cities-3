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
  console.log(authorizationStatus);
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to='/login' />
  );
}

export default Private;
