import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const useFbLoadingSelector = () => {
  const fbLoading = useSelector((state: RootState) => state.quizData.fbLoading);
  return fbLoading;
};
