import type { Topic } from '../../model/types';

import styles from './topic-description.module.css';

type Props = Pick<Topic, 'title' | 'description'>;

export const TopicDescription = ({ title, description }: Props) => (
  <div className={styles.topic}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.description}>{description}</p>
  </div>
);
