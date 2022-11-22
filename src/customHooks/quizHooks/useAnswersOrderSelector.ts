import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const useAnswersOrderSelector = () => {
  const answersOrder = useSelector(
    (state: RootState) => state.quizData.answersOrder
  );
  return answersOrder as [];
};
