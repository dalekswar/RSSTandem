import { LinkButton } from '../../components/link-button';

import notFoundAvif from './assets/not-found.avif';
import notFoundWebp from './assets/not-found.webp';
import notFoundJpg from './assets/not-found.jpg';

import styles from './not-found-page.module.css';
import { Paths } from '../../constants';

export const NotFoundPage = () => (
  <section className={styles.notFound}>
    <picture>
      <source srcSet={notFoundAvif} type="image/avif" />
      <source srcSet={notFoundWebp} type="image/webp" />
      <img src={notFoundJpg} alt="Page was not found" width="900" height="600" />
    </picture>
    <LinkButton to={Paths.ROOT}>Back to Home</LinkButton>
  </section>
);
