import classNames from 'classnames';

import type { Course } from '../../model/types';

import { CourseLevel, DIFF_BARS } from '../../model/course-level';

import styles from './course-card.module.css';

type Props = Omit<Course, 'id' | 'slug'>;

export const CourseCard = ({ tag, title, description, level, tasksCount }: Props) => (
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
);
