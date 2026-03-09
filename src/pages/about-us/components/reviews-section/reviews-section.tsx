import { ReviewCard } from './components/review-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { reviews } from '../../constants/reviews';
import { REVIEWS_TEXTS } from '../../constants/texts/reviews-texts';

import styles from './reviews-section.module.css';
import titleStyles from '../../../../app/styles/ui/title.module.css';
import 'swiper/css';
import classNames from 'classnames';

export const ReviewsSection = () => (
  <section className={styles.reviews}>
    <h2 className={classNames(titleStyles.sectionTitle, titleStyles['sectionTitle--withLine'])}>
      {REVIEWS_TEXTS.title}
    </h2>
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id}>
          <ReviewCard {...review} />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
