import type { CourseLevel } from './course-level';

export type Course = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tag: string;
  level: CourseLevel;
  tasksCount: number;
};
