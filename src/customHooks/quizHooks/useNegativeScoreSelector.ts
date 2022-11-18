import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const useNegativeScoreSelector = () => {
  const negativeScore = useSelector(
    (state: RootState) => state.quizData.negativeScore
  );
  return negativeScore;
};
