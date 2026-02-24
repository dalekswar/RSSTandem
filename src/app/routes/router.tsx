import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '../components/app-layout/app-layout';
import { Paths } from './paths';
import { AboutUsPage } from '../pages/about-us/about-us-page';
import { AuthPage } from '../pages/auth/auth-page';
import { ProfilePage } from '../pages/profile/profile-page';
import { NotFoundPage } from '../pages/not-found/not-found-page';
import { CoursesPage } from '../pages/courses/courses-page';
import { CourseInfoPage } from '../pages/course-info/course-info-page';
import { TopicsPage } from '../pages/topics/topics-page';
import { TopicPage } from '../pages/topic/topic-page';
import { WidgetLayout } from '../components/widget-layout/widget-layout';

export const router = createBrowserRouter([
  {
    path: Paths.ROOT,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={Paths.ABOUT_US} replace />,
      },
      {
        path: Paths.ABOUT_US,
        element: <AboutUsPage />,
      },
      {
        path: Paths.COURSES,
        element: <CoursesPage />,
      },
      {
        path: Paths.COURSE_INFO,
        element: <CourseInfoPage />,
      },
      {
        path: Paths.TOPICS,
        element: <TopicsPage />,
      },
      {
        path: Paths.TOPIC,
        element: <TopicPage />,
      },
      {
        path: Paths.WIDGET,
        element: <WidgetLayout />,
      },
      {
        path: Paths.PROFILE,
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: Paths.AUTH,
    element: <AuthPage />,
  },
  {
    path: Paths.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: Paths.OTHER_PATHS,
    element: <Navigate to={Paths.NOT_FOUND} />,
  },
]);
