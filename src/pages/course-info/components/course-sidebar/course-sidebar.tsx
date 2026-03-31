import type { Topic } from '../../model/types';
import { LinkButton } from '../../../../components/link-button';

import { Paths } from '../../../../constants';

import styles from './course-sidebar.module.css';

type Props = Omit<Topic, 'id'>;

export const CourseSidebar = ({ title, complexity, exercisesCount }: Props) => (
  <aside className={styles.sidebarCard}>
    <h3 className={styles.sidebarTitle}>{title}</h3>
    <div className={styles.paramRow}>
      <span className={styles.paramLabel}>сложность</span>
      <span className={styles.paramValue}>{complexity}</span>
    </div>
    <div className={styles.paramRow}>
      <span className={styles.paramLabel}>программа</span>
      <span className={styles.paramValue}>{exercisesCount} упражнений</span>
    </div>
    <LinkButton to={Paths.TOPICS} className={styles.sidebarBtn}>
      Начать обучение
    </LinkButton>
  </aside>
);
