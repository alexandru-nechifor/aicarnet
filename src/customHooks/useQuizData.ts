import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import Settings from '../constants/Quiz/QuizSettings';
import { useAuth } from '../context/AuthContext';
import { getData } from '../service/quizService';
import {
  resetQuiz,
  setProgressCurrentQuestion,
  setProgressNegativeScore,
  setProgressScore,
  setQuizData,
  setTotalCount,
} from '../store/quizDataSlice';
import { shuffleArray } from '../utils/shuffleArray';
import { getQuizProgress } from './useQuizProgress';

export const useQuizData = (
  quizType: string | undefined,
  quizID: string | undefined
) => {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();

  return useQuery([quizType], getData, {
    refetchOnMount: true,
    refetchOnWindowFocus: false,

    onSuccess: (data) => {
      dispatch(resetQuiz());
      let totalCount = 0;

      if (quizID?.includes('mediu-de-invatare')) {
        totalCount = data.length;
        getQuizProgress(currentUser).then((result) => {
          if (result) {
            const quizCat = quizID.replace('-mediu-de-invatare', '');
            dispatch(
              setProgressCurrentQuestion(result[quizCat].currentQuestion)
            );
            dispatch(setProgressScore(result[quizCat].score));
            dispatch(setProgressNegativeScore(result[quizCat].negativeScore));

            console.log('am intrat');
          }
        });
        dispatch(setQuizData(data));
      } else {
        totalCount = Settings[quizID as keyof typeof Settings].total;
        const shuffledData = shuffleArray(data);
        const filteredData = shuffledData.slice(0, totalCount);

        dispatch(setQuizData(filteredData));
      }
      dispatch(setTotalCount(totalCount));
    },
  });
};
