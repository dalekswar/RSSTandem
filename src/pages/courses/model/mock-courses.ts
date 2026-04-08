import type { Course } from './types';

export const MOCK_COURSES: Course[] = [
  {
    id: 'javascript',
    slug: 'javascript',
    title: 'JavaScript',
    description:
      'Основы JavaScript. Курс охватывает синтаксис, переменные, типы данных, функции и работу с DOM.',
    tag: 'LANGUAGE',
    level: 'Beginner',
    tasksCount: 70,
  },
  {
    id: 'javascript-advanced',
    slug: 'javascript-advanced',
    title: 'JavaScript Advanced',
    description:
      'Глубокое погружение в механизмы языка: замыкания, прототипное наследование, Event Loop, асинхронность.',
    tag: 'LANGUAGE',
    level: 'Middle',
    tasksCount: 120,
  },
  {
    id: 'typescript',
    slug: 'typescript',
    title: 'TypeScript',
    description:
      'Статическая типизация для JavaScript: от базовых типов до сложных generic-решений.',
    tag: 'LANGUAGE',
    level: 'Middle',
    tasksCount: 95,
  },
  {
    id: 'react',
    slug: 'react',
    title: 'React',
    description:
      'Создание современных интерфейсов: компоненты, хуки, архитектура и best practices.',
    tag: 'FRAMEWORK',
    level: 'Advanced',
    tasksCount: 110,
  },
  {
    id: 'node-js',
    slug: 'node-js',
    title: 'Node.js',
    description:
      'Серверная разработка на JavaScript: API, работа с файлами, стримы и асинхронность.',
    tag: 'RUNTIME',
    level: 'Advanced',
    tasksCount: 100,
  },
];
