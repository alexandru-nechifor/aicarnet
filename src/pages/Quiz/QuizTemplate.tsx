import QuizHeader from '../../components/quiz/QuizHeader';
import QuizBody from '../../components/quiz/QuizBody';
import { useParams } from 'react-router-dom';
import Settings from '../../constants/QuizSettings';
import Review from '../../components/quiz/Review';
import { useQuizData } from '../../customHooks/useQuizData';
import { useIsFinished } from '../../customHooks/useQuizStatusSelectors';
import { Center, Container, Loader } from '@mantine/core';

const QuizTemplate = () => {
  let { quizID } = useParams<string>();

  let quizType = Settings[quizID as keyof typeof Settings].questionData;
  const { isFetching, isError } = useQuizData(quizType, quizID);
  const isFinished = useIsFinished();

  if (isFetching) {
    return (
      <Center sx={{ height: '90vh' }}>
        <Loader size="lg" />
      </Center>
    );
  }
  if (isError) {
    return <>error</>;
  }

  if (!isFinished) {
    return (
      <>
        <Container size={'xl'} sx={{ height: '90vh' }}>
          <QuizHeader />
          <QuizBody />
        </Container>
      </>
    );
  } else {
    return <Review />;
  }
};

export default QuizTemplate;
