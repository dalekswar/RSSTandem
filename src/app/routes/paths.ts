export const Paths = {
  ROOT: '/',
  AUTH: '/auth',
  ABOUT_US: '/about-us',
  PROFILE: '/profile',

  COURSES: '/courses',
  ALL_COURSES: 'all',
  MY_COURSES: 'my',

  COURSE_INFO: '/courses/:courseId',
  TOPICS: '/courses/:courseId/topics',
  TOPIC: '/courses/:courseId/:topicId',
  WIDGET: '/courses/:courseId/:topicId/:widgetType',
  NOT_FOUND: '/not-found',
  OTHER_PATHS: '*',
} as const;
