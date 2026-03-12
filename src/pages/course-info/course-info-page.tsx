import { useParams } from 'react-router-dom';
import type { RouteParams } from '../../types/route-params';

const CourseInfoPage = () => {
  const { courseId } = useParams<RouteParams>();
  return <section className="course-info">Course Info Page (courseId: {courseId})</section>;
};

export default CourseInfoPage;
