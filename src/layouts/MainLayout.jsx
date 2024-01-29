import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function MainLayout() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
