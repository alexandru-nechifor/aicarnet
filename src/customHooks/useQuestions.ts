import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { getData } from '../service/quizService';
import { setQuizQuestions } from '../store/quizQuestionsSlice';

export const useQuestions = (quizID: string | undefined) => {
  const dispatch = useDispatch();
  return useQuery([quizID], getData, {
    onSuccess: (data) => {
      dispatch(setQuizQuestions(data));
    },
  });
};
