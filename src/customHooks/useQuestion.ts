import { useQuery } from '@tanstack/react-query';
import { getQuestion } from '../service/quizService';
export const useQuestion = (
  quizID: string | undefined,
  uuid: string | undefined
) => {
  return useQuery([quizID, uuid], getQuestion);
};
