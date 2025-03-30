import { Navigate } from 'react-router-dom';
import { } from 'react-router-dom';
type PrivateRouteProps = {
    authorizationStatus: string;
    children: JSX.Element;
}

function Private(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;
  return (
    authorizationStatus === 'Auth'
      ? children
      : <Navigate to='/login' />
  );
}

export default Private;
