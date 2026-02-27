import { Outlet } from 'react-router-dom';
import { Header } from '../../../components/header/header';

export function AppLayout() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
