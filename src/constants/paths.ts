export const Paths = {
  ROOT: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ABOUT_US: '/about-us',
  PROFILE: '/profile',
  DASHBOARD: '/dashboard',

  COURSES: '/courses',
  ALL_COURSES: 'all',
  MY_COURSES: 'my',

  COURSE_INFO: '/courses/:courseId',
  TOPICS: '/courses/:courseId/topics',
  TOPIC: '/courses/:courseId/:topicId',
  WIDGET: '/courses/:courseId/:topicId/:widgetType/:widgetId',
  NOT_FOUND: '/not-found',
  OTHER_PATHS: '*',
} as const;

export const TOPICS_INDEX = 2;
export const MAX_CRUMBS_DEPTH = 4;
