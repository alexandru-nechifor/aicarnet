import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useSavedAnswersSelector = () => {
  const savedAnswers = useSelector(
    (state: RootState) => state.quizData.savedAnswers
  );
  return savedAnswers as [];
};
