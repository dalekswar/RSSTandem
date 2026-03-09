import { useLocation, useParams } from 'react-router-dom';
import { Paths } from '../../../constants';
import type { RouteParams } from '../../../types/route-params';

type Crumb = {
  name: string;
  path: string;
};

export const useBreadcrumbs = () => {
  const { pathname } = useLocation();
  const { courseId, topicId, widgetType, widgetId } = useParams<RouteParams>();

  const crumbs: Crumb[] = [{ name: 'courses', path: Paths.COURSES }];

  if (!pathname.startsWith(Paths.COURSES)) {
    return crumbs;
  }

  if (courseId) {
    crumbs.push({
      name: `${courseId}`,
      path: `/courses/${courseId}`,
    });
  }

  const shouldShowTopics = topicId || (pathname.includes('/topics') && courseId);

  if (shouldShowTopics) {
    crumbs.push({
      name: 'topics',
      path: `/courses/${courseId}/topics`,
    });
  }

  if (topicId) {
    crumbs.push({
      name: `${topicId}`,
      path: `/courses/${courseId}/${topicId}`,
    });
  }

  if (widgetType && widgetId) {
    crumbs.push({
      name: `${widgetType}`,
      path: `/courses/${courseId}/${topicId}/${widgetType}/${widgetId}`,
    });
  }

  return crumbs;
};
