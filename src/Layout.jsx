import { Outlet, useLocation } from 'react-router-dom';
import { pageConfig } from './pageConfig';
import Header from './header/Header';

export default function Layout() {
  const location = useLocation();
  const config = pageConfig[location.pathname] || {};

  return (
    <>
      <Header title={config.title} showBack={config.back} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
