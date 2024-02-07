import { Outlet } from 'react-router-dom';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const RootLayout = () => {
  return (
    <div className="main-container">
      <div className="container">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
