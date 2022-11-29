import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const useProgressLoadingSelector = () => {
  const progressLoading = useSelector(
    (state: RootState) => state.quizData.progressLoading
  );
  return progressLoading;
};
