import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useTotalCountSelector = () => {
  const totalCount = useSelector(
    (state: RootState) => state.quizData.totalCount
  );
  return totalCount;
};
