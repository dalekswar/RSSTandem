import type { TrainerType } from './trainers-config';

export type Topic = {
  id: string;
  title: string;
  description: string;
  trainers: TopicTrainer[];
};

export type TopicTrainer = {
  type: TrainerType;
  isCompleted: boolean;
};
