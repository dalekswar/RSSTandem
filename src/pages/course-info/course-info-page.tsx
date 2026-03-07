import { useParams } from 'react-router-dom';

const CourseInfoPage = () => {
  const { courseId } = useParams();
  return <section className="course-info">Course Info Page (courseId: {courseId})</section>;
};

export default CourseInfoPage;
