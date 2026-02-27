import type { LoaderFunctionArgs } from 'react-router-dom';

export const allCoursesLoader = async () => {
  console.log('all courses loader');
};

export const myCoursesLoader = async () => {
  console.log('my courses loader');
};

export const courseInfoLoader = async (props: LoaderFunctionArgs) => {
  console.log(`course info loader ${props.params.courseId}`);
};

export const topicsLoader = async () => {
  console.log(`topics loader`);
};

export const topicLoader = async (props: LoaderFunctionArgs) => {
  console.log(`topic loader ${props.params.topicId}`);
};
