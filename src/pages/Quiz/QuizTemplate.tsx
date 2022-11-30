import { useParams } from 'react-router-dom';
import { useQuizData } from '../../customHooks/quizHooks/useQuizData';
import { useIsFinished } from '../../customHooks/quizHooks/useQuizStatusSelectors';
import { Center, Loader } from '@mantine/core';
import ReqAuth from '../../components/Navigation/ReqAuth';
import Quiz from '../../components/quiz/Quiz';
import Review from '../../components/quiz/Review/Review';
import { useAuthContext } from '../../context/AuthContext';
import { useProgressLoadingSelector } from '../../customHooks/quizHooks/useProgressLoadingSelector';

const QuizTemplate = () => {
  const { quizID } = useParams<string>();

  const { isUserLoading } = useAuthContext();
  const isFinished = useIsFinished();
  const { data, isFetching, isError } = useQuizData(quizID);
  const isProgressLoading = useProgressLoadingSelector();

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

  if (!isFinished && !isProgressLoading) {
    return (
      <>
        {quizID?.includes('mediu-de-invatare') && isUserLoading ? (
          <ReqAuth>
            <Quiz />
          </ReqAuth>
        ) : (
          <Quiz />
        )}
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
