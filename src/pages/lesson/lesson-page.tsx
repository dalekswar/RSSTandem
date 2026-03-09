import { useParams } from 'react-router-dom';
import type { RouteParams } from '../../types/route-params';

export const LessonPage = () => {
  const { topicId } = useParams<RouteParams>();
  return <section className="topic">Topic Page (topicId: {topicId})</section>;
};
