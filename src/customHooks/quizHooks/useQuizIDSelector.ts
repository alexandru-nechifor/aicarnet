import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const useQuizIDSelector = () => {
  const quizID = useSelector((state: RootState) => state.quizData.quizID);
  return quizID;
};
