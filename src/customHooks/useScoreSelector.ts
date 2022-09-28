import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useScoreSelector = () => {
  const score = useSelector((state: RootState) => state.quizData.score);
  return score;
};
