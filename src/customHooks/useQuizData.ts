import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import Settings from '../constants/Quiz/QuizSettings';
import { getData } from '../service/quizService';
import { resetQuiz, setQuizData, setTotalCount } from '../store/quizDataSlice';
import { shuffleArray } from '../utils/shuffleArray';

export const useQuizData = (
  quizType: string | undefined,
  quizID: string | undefined
) => {
  const dispatch = useDispatch();
  return useQuery([quizType], getData, {
    refetchOnMount: true,
    refetchOnWindowFocus: false,

    onSuccess: (data) => {
      dispatch(resetQuiz());

      let totalCount = 0;

      quizID?.includes('mediu-de-invatare')
        ? (totalCount = data.length)
        : (totalCount = Settings[quizID as keyof typeof Settings].total);

      const shuffledData = shuffleArray(data);

      const filteredData = shuffledData.slice(0, totalCount);
      dispatch(setTotalCount(totalCount));
      dispatch(setQuizData(filteredData));
    },
  });
};
