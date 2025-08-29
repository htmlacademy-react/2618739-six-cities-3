import { Outlet } from 'react-router-dom';
import Header from './header';
import { useLocation } from 'react-router-dom';

function Layout(): JSX.Element {
  const { pathname } = useLocation();
  let pageClass = 'page';
  if (pathname === '/' || pathname.includes('login')) {
    pageClass += ' page--gray';
    if (pathname === '/') {
      pageClass += ' page--main';
    }
  }
  if (pathname.includes('favorites_empty')) {
    pageClass += ' page--favorites-empty';
  }
  if (pathname.includes('offer')) {
    pageClass += ' page__main--offer';
  }
  if (pathname.includes('login')) {
    pageClass += ' page--login';
  }

  return (
    <div className={pageClass} >
      <Header />
      <Outlet />
    </div>);
}

export default Layout;
