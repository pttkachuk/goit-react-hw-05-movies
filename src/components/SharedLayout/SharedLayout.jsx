import CastLoader from 'components/CastLoader/CastLoader';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>
      <Suspense fallback={<CastLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
