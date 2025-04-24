import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Favorites from '../../pages/favorites/favorites';
import Layout from '../layout';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Offer from '../../pages/offer/offer';
import Page404 from '../404';
import TOffer from '../../types/offers';

type MainPageProps = {
  offersProps: TOffer[];
}

function App({ offersProps }: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main offersProps={offersProps} />} />
          <Route path="login" element={<Login />} />
          <Route path='favorites' element={<Favorites offers={offersProps} />} />
          <Route path="offer/:id" element={<Offer offers={offersProps} />} />
          <Route path="*" element={<Page404 />} />
        </Route >
      </Routes >
    </BrowserRouter>);
}
export default App;
