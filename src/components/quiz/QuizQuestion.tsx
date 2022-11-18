import { Title } from '@mantine/core';
import { useCurrentQuestionSelector } from '../../customHooks/quizHooks/useCurrentQuestionSelector';
import { useQuizDataSelector } from '../../customHooks/quizHooks/useQuizDataSelector';

const QuizQuestion = () => {
  const quizQuestions = useQuizDataSelector();
  const currentQuestion = useCurrentQuestionSelector();
  return (
    <Title order={1} size="h3" mt={40}>
      {quizQuestions[currentQuestion].question}
    </Title>
  );
};

export default QuizQuestion;
