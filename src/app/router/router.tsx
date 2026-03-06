import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ErrorPage } from '../../pages/error/error-page';
import { AppLayout } from '../layouts/app-layout/app-layout';
import { Paths } from './paths';
import { AboutUsPage } from '../../pages/about-us';
import { CoursesLayout } from '../layouts/courses-layout/courses-layout';
import CoursesPage from '../../pages/courses/courses-page';
import {
  allCoursesLoader,
  courseInfoLoader,
  myCoursesLoader,
  topicLoader,
  topicsLoader,
} from '../../api/loaders';
import CourseInfoPage from '../../pages/course-info/course-info-page';
import TopicsPage from '../../pages/topics/topics-page';
import TopicPage from '../../pages/topic/topic-page';
import { WidgetLayout } from '../layouts/widget-layout/widget-layout';
import { ProfilePage } from '../../pages/profile/profile-page';
import { LoginPage } from '../../pages/auth/login/login-page';
import { RegisterPage } from '../../pages/auth/register/register-page';
import { NotFoundPage } from '../../pages/not-found';

export const router = createBrowserRouter([
  {
    path: Paths.ROOT,
    element: <AppLayout />,
    errorElement: <ErrorPage />,
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
        element: <CoursesLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={Paths.ALL_COURSES} replace />,
          },
          {
            path: Paths.ALL_COURSES,
            element: <CoursesPage />,
            loader: allCoursesLoader,
          },
          {
            path: Paths.MY_COURSES,
            element: <CoursesPage />,
            loader: myCoursesLoader,
          },
        ],
      },
      {
        path: Paths.COURSE_INFO,
        element: <CourseInfoPage />,
        loader: courseInfoLoader,
      },
      {
        path: Paths.TOPICS,
        element: <TopicsPage />,
        loader: topicsLoader,
      },
      {
        path: Paths.TOPIC,
        element: <TopicPage />,
        loader: topicLoader,
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
    path: Paths.LOGIN,
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: Paths.REGISTER,
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: Paths.NOT_FOUND,
    element: <NotFoundPage />,
  },
  {
    path: Paths.OTHER_PATHS,
    element: <Navigate to={Paths.NOT_FOUND} replace />,
  },
]);
