export const DIFF_BARS = [1, 2, 3] as const;

export const CourseLevel = {
  Beginner: 1,
  Middle: 2,
  Advanced: 3,
} as const;

export type CourseLevel = keyof typeof CourseLevel;
