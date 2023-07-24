import CastLoader from 'components/CastLoader/CastLoader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayoutStyled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <Suspense fallback={<CastLoader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
