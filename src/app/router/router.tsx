import { createBrowserRouter, Navigate } from 'react-router-dom';
import { ErrorPage } from '../../pages/error/error-page';
import { AppLayout } from '../layouts/app-layout/app-layout';
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

import { WidgetLayout } from '../layouts/widget-layout/widget-layout';
import { ProfilePage } from '../../pages/profile/profile-page';
import { LoginPage } from '../../pages/auth/login/login-page';
import { RegisterPage } from '../../pages/auth/register/register-page';
import { NotFoundPage } from '../../pages/not-found/not-found-page';
import { LessonPage } from '../../pages/lesson';
import { Dashboard } from '../../pages/dashboard';
import { AlreadyLoggedInRoute } from './public-only-route';
import { AuthorizedOnlyRoute } from './protected-route';
import { Paths } from '../../constants/paths';

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
        path: Paths.DASHBOARD,
        element: (
          <AuthorizedOnlyRoute>
            <Dashboard />
          </AuthorizedOnlyRoute>
        ),
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
            element: (
              <AuthorizedOnlyRoute>
                <CoursesPage />
              </AuthorizedOnlyRoute>
            ),
            loader: myCoursesLoader,
          },
        ],
      },
      {
        path: Paths.COURSE_INFO,
        element: <LessonPage />,
        loader: courseInfoLoader,
      },
      {
        path: Paths.TOPICS,
        element: (
          <AuthorizedOnlyRoute>
            <LessonPage />
          </AuthorizedOnlyRoute>
        ),
        loader: topicsLoader,
      },
      {
        path: Paths.TOPIC,
        element: (
          <AuthorizedOnlyRoute>
            <LessonPage />
          </AuthorizedOnlyRoute>
        ),
        loader: topicLoader,
      },
      {
        path: Paths.WIDGET,

        element: (
          <AuthorizedOnlyRoute>
            <WidgetLayout />
          </AuthorizedOnlyRoute>
        ),
      },
      {
        path: Paths.PROFILE,
        element: (
          <AuthorizedOnlyRoute>
            <ProfilePage />
          </AuthorizedOnlyRoute>
        ),
      },
    ],
  },
  {
    path: Paths.LOGIN,
    element: (
      <AlreadyLoggedInRoute>
        <LoginPage />
      </AlreadyLoggedInRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: Paths.REGISTER,
    element: (
      <AlreadyLoggedInRoute>
        <RegisterPage />
      </AlreadyLoggedInRoute>
    ),
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
