import type { LoaderFunctionArgs } from 'react-router-dom';
import { allCoursesData, myCoursesData } from '../pages/courses/courses-data';

export const allCoursesLoader = async () => {
  return allCoursesData;
};

export const myCoursesLoader = async () => {
  return myCoursesData;
};

export const courseInfoLoader = async (props: LoaderFunctionArgs) => {
  console.log(`course info loader ${props.params.courseId}`);
};

export const topicsLoader = async () => {
  console.log('topics loader');
};

export const topicLoader = async (props: LoaderFunctionArgs) => {
  console.log(`topic loader ${props.params.topicId}`);
};
