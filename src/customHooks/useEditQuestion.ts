import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putQuestion } from '../service/quizService';

export const useEditQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation(putQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
