import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from '../../pages/favorites/favorites';
import Layout from '../layout';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Offer from '../../pages/offer/offer';
import Page404 from '../404';
import { useAppSelector } from '../../hooks';
import { selectAuth, selectOffers, selectStatus } from '../../store/selectors/offers';
import { AuthorizationStatus, RequestStatus } from '../../const';
import TOffer from '../../types/offers';

function App(): JSX.Element {
  const auth: AuthorizationStatus = useAppSelector(selectAuth);
  console.log(auth)
  const offers: TOffer[] = useAppSelector(selectOffers);
  const status: RequestStatus = useAppSelector(selectStatus);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />} >
          <Route index element={<Main offersProps={offers} status={status} />} />
          <Route path='favorites' element={<Favorites offers={offers} />} />
          <Route path="offer/:id" element={<Offer offers={offers} />} />
          <Route path="*" element={<Page404 />} />
        </Route >
      </Routes >
    </BrowserRouter>);
}
export default App;
