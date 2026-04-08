export const TRAINERS = {
  quiz: {
    id: 'quiz',
    title: 'Quiz',
    icon: '?',
    slug: 'quiz',
  },
  'true-false': {
    id: 'true-false',
    title: 'True/False',
    icon: '✓',
    slug: 'true-false',
  },
} as const;

export type TrainerType = keyof typeof TRAINERS;
