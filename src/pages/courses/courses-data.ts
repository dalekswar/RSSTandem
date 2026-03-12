export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Pro';

export type Course = {
  id: string;
  label: 'Language' | 'Framework' | 'System';
  title: string;
  description: string;
  level: CourseLevel;
  tasks: number;
  progress?: number;
};

export type CoursesResponse = {
  heading: string;
  description: string;
  courses: Course[];
};

const allCourses: Course[] = [
  {
    id: 'deep-javascript',
    label: 'Language',
    title: 'Deep JavaScript',
    description: 'Глубокое погружение в экосистему самого популярного языка программирования в мире.',
    level: 'Intermediate',
    tasks: 120,
  },
  {
    id: 'python-core',
    label: 'Language',
    title: 'Python Core',
    description: 'Основы синтаксиса, алгоритмов и автоматизация скриптов на Python.',
    level: 'Beginner',
    tasks: 95,
  },
  {
    id: 'react-systems',
    label: 'Framework',
    title: 'React Systems',
    description: 'Современная Frontend-разработка с использованием компонентов, хуков и архитектурных паттернов.',
    level: 'Advanced',
    tasks: 80,
  },
];

const myCourses: Course[] = [
  {
    id: 'advanced-javascript',
    label: 'Language',
    title: 'Advanced JavaScript',
    description: 'Глубокое понимание языка: от прототипов до сложных паттернов асинхронности.',
    level: 'Intermediate',
    tasks: 120,
    progress: 65,
  },
  {
    id: 'react-infrastructure',
    label: 'Framework',
    title: 'React Infrastructure',
    description: 'Архитектура больших приложений, оптимизация и продвинутый стейт-менеджмент.',
    level: 'Pro',
    tasks: 80,
    progress: 12,
  },
  {
    id: 'fullstack-patterns',
    label: 'System',
    title: 'Fullstack Patterns',
    description: 'Проектирование API, работа с Node.js и развертывание современных систем.',
    level: 'Beginner',
    tasks: 70,
    progress: 0,
  },
];

export const allCoursesData: CoursesResponse = {
  heading: 'Библиотека курсов',
  description: 'Исследуйте полный каталог технологий. Начните обучение, и ваш прогресс отобразится в Dashboard.',
  courses: allCourses,
};

export const myCoursesData: CoursesResponse = {
  heading: 'Library',
  description: 'Ваш путь к мастерству во Frontend-разработке.',
  courses: myCourses,
};
