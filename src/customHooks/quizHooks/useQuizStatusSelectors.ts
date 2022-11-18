import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const useHasPassed = () => {
  const hasPassed = useSelector(
    (state: RootState) => state.quizData.quizStatus.hasPassed
  );
  return hasPassed;
};

export const useIsFinished = () => {
  const isFinished = useSelector(
    (state: RootState) => state.quizData.quizStatus.isFinished
  );
  return isFinished;
};
