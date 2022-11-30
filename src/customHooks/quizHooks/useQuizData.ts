import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

import { useAuthContext } from '../../context/AuthContext';
import { getData } from '../../service/quizService';
import {
  resetQuiz,
  setProgressCurrentQuestion,
  setProgressLoading,
  setProgressNegativeScore,
  setProgressScore,
  setQuizData,
  setQuizID,
} from '../../store/quizDataSlice';

export const useQuizData = (quizID: string | undefined) => {
  const dispatch = useDispatch();
  const { user } = useAuthContext();

  return useQuery([quizID], getData, {
    // refetchOnMount: true,
    refetchOnWindowFocus: false,

    onSuccess: async (data) => {
      dispatch(setProgressLoading(true));
      dispatch(resetQuiz());
      dispatch(setQuizID(quizID));

      if (quizID?.includes('mediu-de-invatare')) {
        dispatch(setQuizData(data));
        if (user) {
          const quizCat = quizID
            .replace('-mediu-de-invatare', '')
            .replace('-', '');

          if (user[quizCat as keyof typeof user]) {
            const userProgress = user[quizCat as keyof typeof user].progress;

            dispatch(setProgressCurrentQuestion(userProgress.currentQuestion));
            dispatch(setProgressScore(userProgress.score));
            dispatch(setProgressNegativeScore(userProgress.negativeScore));
          }
        }
      } else {
        dispatch(setQuizData(data));
      }
      dispatch(setProgressLoading(false));
    },
  });
};
