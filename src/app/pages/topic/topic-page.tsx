import { useParams } from 'react-router-dom';

function TopicPage() {
  const { topicId } = useParams();
  return <section className="topic">Topic Page (topicId: {topicId})</section>;
}

export default TopicPage;
