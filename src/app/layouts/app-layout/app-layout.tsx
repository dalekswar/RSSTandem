import { Outlet } from 'react-router-dom';
import { Header } from '../../../components/header/header';
import { Footer } from '../../../components/footer';

export const AppLayout = () => (
  <div className="wrapper">
    <Header />
    <main className="main">
      <Outlet />
    </main>
    <Footer />
  </div>
);
