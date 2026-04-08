import { COURSES_PAGE_TEXT } from '../../constants/courses-page-text';

import styles from './courses-header.module.css';

export const CoursesHeader = () => (
  <>
    <h1 className={styles.coursesPageTitle}>{COURSES_PAGE_TEXT.title}</h1>
    <p className={styles.coursesPageIntroduction}>{COURSES_PAGE_TEXT.description}</p>
  </>
);
