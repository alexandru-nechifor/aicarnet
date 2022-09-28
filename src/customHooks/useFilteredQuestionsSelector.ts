import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { IQuizData } from '../types/IQuizData';

const useFilteredQuestionsSelector = () => {
  const questions = useSelector((state: RootState) =>
    state.quizQuestions.quizQuestions.filter((question: IQuizData) =>
      question.question.includes(state.quizQuestions.search)
    )
  );
  return questions as IQuizData[];
};

export default useFilteredQuestionsSelector;
