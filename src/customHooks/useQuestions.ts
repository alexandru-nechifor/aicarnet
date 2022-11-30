import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { getData } from '../service/quizService';
import { setQuizQuestions } from '../store/quizQuestionsSlice';

export const useQuestions = (questionsID: string | undefined) => {
  const dispatch = useDispatch();

  return useQuery([`${questionsID}-mediu-de-invatare`], getData, {
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      dispatch(setQuizQuestions(data));
    },
  });
};
