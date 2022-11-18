import QuizHeader from '../../components/quiz/QuizHeader';
import QuizBody from '../../components/quiz/QuizBody';
import { useParams } from 'react-router-dom';
import Settings from '../../constants/Quiz/QuizSettings';
import Review from '../../components/quiz/Review';
import { useQuizData } from '../../customHooks/quizHooks/useQuizData';
import { useIsFinished } from '../../customHooks/quizHooks/useQuizStatusSelectors';
import { Box, Center, Loader } from '@mantine/core';
import CustomContainer from '../../components/customComponents/Container';
import ReqAuth from '../../components/Navigation/ReqAuth';
import { useFbLoadingSelector } from '../../customHooks/quizHooks/useFbLoadingSelector';

const QuizTemplate = () => {
  let { quizID } = useParams<string>();

  let quizType = Settings[quizID as keyof typeof Settings].questionData;

  const isFbLoading = useFbLoadingSelector();
  const { data, isFetching, isError } = useQuizData(quizType, quizID);
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

  if (!isFinished && !isFbLoading) {
    return (
      <>
        <ReqAuth>
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
        </ReqAuth>
      </>
    );
  } else if (isFinished) {
    return <Review data={data} quizID={quizID} />;
  } else {
    return (
      <Center sx={{ height: '90vh' }}>
        <Loader size="lg" />
      </Center>
    );
  }
};

export default QuizTemplate;
