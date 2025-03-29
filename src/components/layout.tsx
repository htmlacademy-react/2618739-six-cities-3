import { Outlet } from 'react-router-dom';
import Header from './header';

function Layout(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <Outlet />
    </div>);
}

export default Layout;
