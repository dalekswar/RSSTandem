import type { Topic } from '../../model/types';
import classNames from 'classnames';

import styles from './topics-list.module.css';

type Props = {
  topics: Topic[];
  activeTopicId: string;
  onSelectTopic: (topicId: string) => void;
};

export const TopicsList = ({ topics, activeTopicId, onSelectTopic }: Props) => (
  <aside>
    <h2 className={styles.title}>Навигация</h2>
    <ul className={styles.topicsList}>
      {topics.map(({ id, title }) => (
        <li key={id}>
          <button
            className={classNames(styles.topicsBtn, { [styles.active]: activeTopicId === id })}
            onClick={() => onSelectTopic(id)}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  </aside>
);
