import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Favorites from '../../pages/favorites/favorites';
import Layout from '../layout';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Offer from '../../pages/offer/offer';
import Page404 from '../404';
import { useAppSelector } from '../../hooks';
import { selectOffers, selectStatus } from '../../store/selectors/offers';
import { AuthorizationStatus, RequestStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/selectors/user';
import TOffer from '../../types/offers';

function App(): JSX.Element {
  const offers: TOffer[] = useAppSelector(selectOffers);
  const status: RequestStatus = useAppSelector(selectStatus);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const loginPageRoute = (auth: AuthorizationStatus) => {
    if (auth === AuthorizationStatus.Auth) {
      return (<Route path="login" element={<Navigate to='/' />} />);
    } else {
      return (<Route path="login" element={<Login />} />);
    }
  };
  return (
    <BrowserRouter>
      <Routes>
        {loginPageRoute(authStatus)}
        <Route path="/" element={<Layout />} >
          <Route index element={<Main offersProps={offers} status={status} />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path="offer/:id" element={<Offer offers={offers} />} />
          <Route path="*" element={<Page404 />} />
        </Route >
      </Routes >
    </BrowserRouter>);
}
export default App;
