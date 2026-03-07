import codeMindAvif from './assets/codemind.avif';
import codeMindWebp from './assets/codemind.webp';
import codeMindJpg from './assets/codemind.jpg';

import { ABOUT_TEXTS } from '../../constants/texts/about-texts';

import styles from './about-section.module.css';

export const AboutSection = () => (
  <section className={styles.about}>
    <div>
      <h2 className={styles.aboutTitle}>{ABOUT_TEXTS.title}</h2>
      <p className={styles.aboutMotivation}>{ABOUT_TEXTS.motivation}</p>
      <ul className={styles.featuresList}>
        {ABOUT_TEXTS.features.map((feature) => (
          <li key={feature} className={styles.featuresItem}>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.aboutVisual}>
      <picture>
        <source srcSet={codeMindAvif} type="image/avif" />
        <source srcSet={codeMindWebp} type="image/webp" />
        <img
          className={styles.aboutImage}
          src={codeMindJpg}
          alt="CodeMind learning platform interface"
          loading="lazy"
          width="500"
          height="333"
        />
      </picture>
    </div>
  </section>
);
