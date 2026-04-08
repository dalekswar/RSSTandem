import { CoursesHeader } from './components/courses-header';
import { CoursesList } from './components/courses-list';

import { MOCK_COURSES } from './model/mock-courses';

import styles from './courses-page.module.css';

const courses = MOCK_COURSES;

export const CoursesPage = () => (
  <div className="container">
    <section className={styles.coursesPage}>
      <CoursesHeader />
      <CoursesList courses={courses} />
    </section>
  </div>
);
