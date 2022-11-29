import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { IQuizData } from '../types/Quiz/IQuizData';
import latinize from 'latinize';

const useFilteredQuestionsSelector = () => {
  const questions = useSelector((state: RootState) =>
    state.quizQuestions.quizQuestions.filter((question: IQuizData) =>
      latinize(question.question.toLowerCase()).includes(
        state.quizQuestions.search.toLowerCase().trim()
      )
    )
  );
  return questions as IQuizData[];
};

export default useFilteredQuestionsSelector;
