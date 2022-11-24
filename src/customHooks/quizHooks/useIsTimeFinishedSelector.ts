import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const useIsTimeFinished = () => {
  const isTimeFinished = useSelector(
    (state: RootState) => state.quizData.isTimeFinished
  );
  return isTimeFinished;
};
