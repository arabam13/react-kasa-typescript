import { Outlet } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useLocation } from 'react-router-dom';

const RootLayout = () => {
  const params = useLocation();
  // console.log(params.pathname);
  return (
    <div className="main-container">
      <div
        className="container"
        style={{ height: params.pathname === '/about' ? '67vh' : '' }}
      >
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
