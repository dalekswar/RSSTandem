import { AUTH_REQUIRED_LINKS, BASE_LINKS } from '../constants/header-links';

export const getLinks = (isAuth: boolean) =>
  isAuth ? [...BASE_LINKS, ...AUTH_REQUIRED_LINKS] : BASE_LINKS;
