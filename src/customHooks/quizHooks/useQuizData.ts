import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import Settings from '../../constants/Quiz/QuizSettings';
import { useAuth } from '../../context/AuthContext';
import { getData } from '../../service/quizService';
import {
  resetQuiz,
  setFbLoading,
  setProgressCurrentQuestion,
  setProgressNegativeScore,
  setProgressScore,
  setQuizData,
} from '../../store/quizDataSlice';
import { shuffleArray } from '../../utils/shuffleArray';
import { getQuizProgress } from './getQuizProgress';

export const useQuizData = (
  quizType: string | undefined,
  quizID: string | undefined
) => {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();

  return useQuery([quizType], getData, {
    refetchOnMount: true,
    refetchOnWindowFocus: false,

    onSuccess: async (data) => {
      dispatch(resetQuiz());

      if (quizID?.includes('mediu-de-invatare')) {
        const quizCat = quizID.replace('-mediu-de-invatare', '');
        getQuizProgress(currentUser).then((result) => {
          if (result) {
            if (result[quizCat]) {
              dispatch(
                setProgressCurrentQuestion(result[quizCat].currentQuestion)
              );
              dispatch(setProgressScore(result[quizCat].score));
              dispatch(setProgressNegativeScore(result[quizCat].negativeScore));
            }
            dispatch(setFbLoading(false));
          }
        });

        dispatch(setQuizData(data));
      } else {
        const totalCount = Settings[quizID as keyof typeof Settings].total;
        const shuffledData = shuffleArray(data);
        const filteredData = shuffledData.slice(0, totalCount);
        dispatch(setFbLoading(false));
        dispatch(setQuizData(filteredData));
      }
    },
  });
};
