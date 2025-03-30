import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Favorites from '../../pages/favorites/favorites';
import Layout from '../layout';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Offer from '../../pages/offer/offer';
import Page404 from '../404';

type MainPageProps = {
  rentCount: number;
}

function App({ rentCount }: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Main rentCount={rentCount} />} />
          <Route path="login" element={<Login />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path="offer/:id" element={<Offer />} />
          <Route path="*" element={<Page404 />} />
        </Route >
      </Routes >
    </BrowserRouter>);
}
export default App;
