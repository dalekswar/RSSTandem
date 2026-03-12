import type { LinkConfig } from '../types/link-config';
import { Paths } from './paths';

export const BASE_LINKS: LinkConfig[] = [
  {
    link: Paths.ROOT,
    isLogo: true,
    key: 'codemind',
    text: 'CodeMind',
  },
  {
    link: Paths.ABOUT_US,
    key: 'about',
    text: 'About Us',
  },
];

export const AUTH_REQUIRED_LINKS: LinkConfig[] = [
  {
    link: Paths.DASHBOARD,
    key: 'dashboard',
    text: 'Dashboard',
  },
];
