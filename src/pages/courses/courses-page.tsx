import { useLoaderData } from 'react-router-dom';
import type { Course, CoursesResponse } from './courses-data';
import styles from './courses-page.module.css';

function CourseCard({ course }: { course: Course }) {
  const hasProgress = course.progress !== undefined;
  const progress = course.progress ?? 0;
  const actionText = hasProgress && progress > 0 ? 'Resume →' : 'Start →';

  return (
    <article className={styles.card}>
      <span className={styles.badge}>{course.label}</span>
      <h2>{course.title}</h2>
      <p className={styles.description}>{course.description}</p>

      {hasProgress ? (
        <div>
          <p className={styles.progressLabel}>Progress {progress}%</p>
          <div className={styles.progressTrack}>
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
      ) : null}

      <div className={styles.footer}>
        <span>{course.level}</span>
        <span className={styles.action}>{actionText}</span>
      </div>
    </article>
  );
}

function CoursesPage() {
  const { heading, description, courses } = useLoaderData() as CoursesResponse;

  return (
    <section className={styles.courses}>
      <header className={styles.top}>
        <div className={styles.hero}>
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
      </header>

      <div className={styles.grid}>
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

export default CoursesPage;
