import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useASelected = () => {
  const aSelected = useSelector(
    (state: RootState) => state.quizData.selected.isASelected
  );
  return aSelected;
};

export const useBSelected = () => {
  const bSelected = useSelector(
    (state: RootState) => state.quizData.selected.isBSelected
  );
  return bSelected;
};

export const useCSelected = () => {
  const cSelected = useSelector(
    (state: RootState) => state.quizData.selected.isCSelected
  );
  return cSelected;
};
