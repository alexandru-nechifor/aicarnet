import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import Settings from '../constants/QuizSettings';
import { getData } from '../service/quizService';
import { resetQuiz, setQuizData, setTotalCount } from '../store/quizDataSlice';
import { shuffleArray } from '../functions/shuffleArray';

export const useQuizData = (quizType: string, quizID: string | undefined) => {
  const dispatch = useDispatch();
  return useQuery([quizType], getData, {
    refetchOnMount: true,
    refetchOnWindowFocus: false,

    onSuccess: (data) => {
      dispatch(resetQuiz());

      let totalCount = 0;

      if (quizID?.includes('mediu-de-invatare')) {
        totalCount = data.length;
      } else {
        totalCount = Settings[quizID as keyof typeof Settings].total;
      }

      shuffleArray(data);

      const filteredData = data.slice(0, totalCount);
      dispatch(setTotalCount(totalCount));
      dispatch(setQuizData(filteredData));
    },
  });
};
