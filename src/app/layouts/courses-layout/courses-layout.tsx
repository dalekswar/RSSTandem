import { NavLink, Outlet } from 'react-router-dom';
import { Paths } from '../../router/paths';

export const CoursesLayout = () => {
  return (
    <section className="courses">
      <nav>
        <NavLink to={Paths.ALL_COURSES}>All Courses</NavLink>
        <NavLink to={Paths.MY_COURSES}>My Courses</NavLink>
      </nav>
      <Outlet />
    </section>
  );
};
