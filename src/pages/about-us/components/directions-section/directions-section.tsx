import { DirectionCard } from './components/direction-card';

import { directions } from '../../constants/directions';
import { DIRECTIONS_TEXTS } from '../../constants/texts/directions-texts';

import styles from './directions-section.module.css';
import titleStyles from '../../../../app/styles/ui/title.module.css';
import classNames from 'classnames';

export const DirectionsSection = () => (
  <section className={styles.directions}>
    <h2 className={classNames(titleStyles.sectionTitle, titleStyles['sectionTitle--withLine'])}>
      {DIRECTIONS_TEXTS.title}
    </h2>
    <ul className={styles.directionsList}>
      {directions.map((direction) => (
        <li key={direction.id}>
          <DirectionCard {...direction} />
        </li>
      ))}
    </ul>
  </section>
);
