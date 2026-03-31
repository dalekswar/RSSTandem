import { useState } from 'react';

import { CourseContent } from './components/course-content';
import { CourseHeader } from './components/course-header';
import { CourseSidebar } from './components/course-sidebar';

import { MOCK_COURSE } from './model/mock-course';

import styles from './course-info-page.module.css';

const course = MOCK_COURSE;

export const CourseInfoPage = () => {
  const [activeTopicId, setActiveTopicId] = useState(course.topics[0]?.id);

  const activeTopic = course.topics.find((topic) => topic.id === activeTopicId) ?? course.topics[0];

  return (
    <div className="container">
      <section className={styles.coursePage}>
        <CourseHeader title={course.title} introduction={course.introduction} />
        <div className={styles.wrapper}>
          <CourseContent
            description={course.description}
            topics={course.topics}
            activeTopicId={activeTopicId}
            onSelectTopic={setActiveTopicId}
          />
          <CourseSidebar {...activeTopic} />
        </div>
      </section>
    </div>
  );
};
