import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useCurrentQuestionSelector = () => {
  const currentQuestion = useSelector(
    (state: RootState) => state.quizData.currentQuestion
  );
  return currentQuestion;
};
