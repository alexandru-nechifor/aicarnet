import QuizHeader from '../../components/quiz/QuizHeader';
import QuizBody from '../../components/quiz/QuizBody';
import { useParams } from 'react-router-dom';
import Settings from '../../constants/Quiz/QuizSettings';
import Review from '../../components/quiz/Review';
import { useQuizData } from '../../customHooks/useQuizData';
import { useIsFinished } from '../../customHooks/useQuizStatusSelectors';
import { Box, Center, Loader } from '@mantine/core';
import CustomContainer from '../../components/customComponents/Container';
import { useAuth } from '../../context/AuthContext';

const QuizTemplate = () => {
  let { quizID } = useParams<string>();
  const { currentUser } = useAuth();
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

  if (!currentUser) {
    return <>N-ai cont component!!</>;
  }

  if (!isFinished && currentUser) {
    return (
      <>
        <CustomContainer>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'column',
              minHeight: '85vh',
            }}
          >
            <QuizHeader />
            <QuizBody />
          </Box>
        </CustomContainer>
      </>
    );
  } else {
    return <Review />;
  }
};

export default QuizTemplate;
