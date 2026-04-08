import type { Topic } from './types';

export const MOCK_TOPICS: Topic[] = [
  {
    id: '1',
    title: '1. Современные возможности ES6 (ES2015)',
    description:
      'Проверьте знание ключевых нововведений ES6: let/const, стрелочные функции, классы, промисы, деструктуризация, модули.',
    trainers: [
      { type: 'quiz', isCompleted: false },
      { type: 'true-false', isCompleted: true },
    ],
  },
  {
    id: '2',
    title: '2. ES2016-ES2018 (Нововведения средних лет)',
    description:
      'Тестируем знания новшеств ES2016-ES2018: оператор возведения в степень (**), Array.prototype.includes, async/await, Object.values/entries, разделяемая память (SharedArrayBuffer), rest/spread для объектов.',
    trainers: [
      { type: 'quiz', isCompleted: false },
      { type: 'true-false', isCompleted: false },
    ],
  },
  {
    id: '3',
    title: '3. ES2019-ES2021 (Современные улучшения)',
    description:
      'Проверьте, как хорошо вы знакомы с последними стандартами: Array.prototype.flat/flatMap, Object.fromEntries, опциональная цепочка (?.), оператор нулевого слияния (??), Promise.allSettled, String.prototype.replaceAll.',
    trainers: [
      { type: 'quiz', isCompleted: true },
      { type: 'true-false', isCompleted: true },
    ],
  },
  {
    id: '4',
    title: '4. ES2022-ES2024 (Новейшие возможности)',
    description:
      'Квиз по самым свежим нововведениям: приватные поля классов (#), top-level await, метод Array.prototype.at, метод Object.hasOwn, улучшения работы с ошибками (Error.cause), Temporal API.',
    trainers: [
      { type: 'quiz', isCompleted: false },
      { type: 'true-false', isCompleted: false },
    ],
  },
  {
    id: '5',
    title: '5. TC39 и процесс стандартизации',
    description:
      'Разбираемся в том, как новые возможности попадают в JavaScript: стадии процесса TC39 (Stage 0-4), работа комитета, роль сообщества, разница между полифиллами и транспиляцией.',
    trainers: [{ type: 'quiz', isCompleted: false }],
  },
];
