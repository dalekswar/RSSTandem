import type { Topic } from '../../model/types';

import styles from './course-content.module.css';

type Props = {
  description: string;
  topics: Topic[];
  activeTopicId: string;
  onSelectTopic: (id: string) => void;
};

export const CourseContent = ({ description, topics, activeTopicId, onSelectTopic }: Props) => {
  return (
    <section className={styles.course}>
      <h2 className={styles.courseAboutTitle}>О курсе</h2>
      <p className={styles.courseDescription}>{description}</p>
      <ul className={styles.courseTopicsList}>
        {topics.map(({ id, title }) => {
          const isActive = id === activeTopicId;

          return (
            <li key={id}>
              <button
                className={`${styles.courseTopic} ${isActive ? styles.activeTopic : ''}`.trim()}
                onClick={() => onSelectTopic(id)}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
