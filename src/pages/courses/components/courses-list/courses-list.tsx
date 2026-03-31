import { Link } from 'react-router-dom';
import classNames from 'classnames';

import type { CourseCard } from '../../model/types';

import { CourseLevel, DIFF_BARS } from '../../model/course-level';
import { Paths } from '../../../../constants';

import styles from './courses-list.module.css';

type Props = {
  courses: CourseCard[];
};

export const CoursesList = ({ courses }: Props) => (
  <ul className={styles.coursesList}>
    {courses.map(({ id, slug, title, tag, description, level, tasksCount }) => (
      <li key={id}>
        <Link to={`${Paths.COURSES}/${slug}`}>
          <article className={styles.courseCard}>
            <span className={styles.tag}>{tag}</span>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.params}>
              <div className={styles.difficultyWrapper}>
                {DIFF_BARS.map((item) => (
                  <span
                    key={item}
                    className={classNames(styles.diffBar, {
                      [styles.filled]: item <= CourseLevel[level],
                    })}
                  />
                ))}
                <span className={styles.difficulty}>{level}</span>
              </div>
              <span className={styles.tasksCount}>{tasksCount} задач</span>
            </div>
          </article>
        </Link>
      </li>
    ))}
  </ul>
);
