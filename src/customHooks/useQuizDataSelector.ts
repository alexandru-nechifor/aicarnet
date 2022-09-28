import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { IQuizData } from '../types/IQuizData';

export const useQuizDataSelector = () => {
  const quizData = useSelector((state: RootState) => state.quizData.quizData);
  return quizData as IQuizData[];
};
