import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { IQuizData } from '../../types/IQuizData';

export const useQuizQuestionsSelector = () => {
  const quizQuestions = useSelector(
    (state: RootState) => state.quizQuestions.quizQuestions
  );
  return quizQuestions as IQuizData[];
};
