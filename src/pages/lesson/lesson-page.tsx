import { useParams } from 'react-router-dom';

export const LessonPage = () => {
  const { topicId } = useParams();
  return <section className="topic">Topic Page (topicId: {topicId})</section>;
};
