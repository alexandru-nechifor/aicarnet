import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteQuestion } from '../service/quizService';
export const useDeleteQuestion = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteQuestion, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};
