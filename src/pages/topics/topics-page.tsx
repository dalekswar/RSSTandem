import { useState } from 'react';
import { TopicsList } from './components/topics-list';
import { TopicDescription } from './components/topic-description';
import { TrainersList } from './components/trainers-list';

import { MOCK_TOPICS } from './model/mock-topics';

import styles from './topics-page.module.css';

const topics = MOCK_TOPICS;

export const TopicsPage = () => {
  const [activeTopicId, setActiveTopicId] = useState(topics[0]?.id);

  const activeTopic = topics.find((topic) => topic.id === activeTopicId) ?? topics[0];

  return (
    <div className="container">
      <section className={styles.topicsPage}>
        <TopicsList
          topics={topics}
          activeTopicId={activeTopicId}
          onSelectTopic={setActiveTopicId}
        />
        <div className={styles.contentWrapper}>
          <TopicDescription title={activeTopic.title} description={activeTopic.description} />
          <TrainersList trainers={activeTopic.trainers} />
        </div>
      </section>
    </div>
  );
};
