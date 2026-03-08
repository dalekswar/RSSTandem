import { MAX_CRUMBS_DEPTH, Paths, TOPICS_INDEX } from '../constants/paths';

type Crumb = {
  name: string;
  path: string;
};

export const createCrumbsPath = (pathname: string): Crumb[] => {
  const pathnameParams = pathname.split('/').filter(Boolean);

  const crumbs: Crumb[] = [{ name: 'courses', path: Paths.COURSES }];
  if (pathnameParams[0] === 'courses') {
    pathnameParams
      .slice(1, MAX_CRUMBS_DEPTH)
      .filter((value) => value !== Paths.MY_COURSES && value !== Paths.ALL_COURSES)
      .forEach((param, index) => {
        const path = '/' + pathnameParams.slice(0, index + 2).join('/');
        if (index === TOPICS_INDEX - 1 && param !== 'topics') {
          crumbs.push({
            name: 'topics',
            path: '/' + [...pathnameParams.slice(0, TOPICS_INDEX), 'topics'].join('/'),
          });
        }
        if (index + 1 === MAX_CRUMBS_DEPTH - 1) {
          crumbs.push({
            name: param,
            path: '/' + pathnameParams.slice(0, index + 3).join('/'),
          });
          return;
        }

        crumbs.push({
          name: param,
          path,
        });
      });
  }
  return crumbs;
};
