import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import Settings from '../../constants/Quiz/QuizSettings';
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
import { shuffleArray } from '../../utils/shuffleArray';

export const useQuizData = (
  quizType: string | undefined,
  quizID: string | undefined
) => {
  const dispatch = useDispatch();
  const { user } = useAuthContext();

  return useQuery([quizType], getData, {
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
        const totalCount = Settings[quizID as keyof typeof Settings].total;
        const shuffledData = shuffleArray(data);
        const filteredData = shuffledData?.slice(0, totalCount);
        dispatch(setQuizData(filteredData));
      }
      dispatch(setProgressLoading(false));
    },
  });
};
