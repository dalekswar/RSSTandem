import { useParams } from 'react-router-dom';

export function TopicPage() {
  const { topicId } = useParams();
  return <section className="topic">Topic Page (topicId: {topicId})</section>;
}
