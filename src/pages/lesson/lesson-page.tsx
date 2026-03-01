import type { FC } from 'react';
import { useParams } from 'react-router-dom';

export const LessonPage: FC = () => {
  const { topicId } = useParams();
  return <section className="topic">Topic Page (topicId: {topicId})</section>;
};
