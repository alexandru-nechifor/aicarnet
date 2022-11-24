import { useParams } from 'react-router-dom';
import Settings from '../../constants/Quiz/QuizSettings';
import Review from '../../components/quiz/Review/Review';
import { useQuizData } from '../../customHooks/quizHooks/useQuizData';
import { useIsFinished } from '../../customHooks/quizHooks/useQuizStatusSelectors';
import { Center, Loader } from '@mantine/core';
import ReqAuth from '../../components/Navigation/ReqAuth';
import { useFbLoadingSelector } from '../../customHooks/quizHooks/useFbLoadingSelector';
import Quiz from '../../components/quiz/Quiz';
import { useIsTimeFinished } from '../../customHooks/quizHooks/useIsTimeFinishedSelector';

const QuizTemplate = () => {
  let { quizID } = useParams<string>();

  let quizType = Settings[quizID as keyof typeof Settings].questionData;

  const isFbLoading = useFbLoadingSelector();
  const { data, isFetching, isError } = useQuizData(quizType, quizID);
  const isFinished = useIsFinished();
  const isTimeFinished = useIsTimeFinished();

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
        {quizID?.includes('mediu-de-invatare') ? (
          <ReqAuth>
            <Quiz />
          </ReqAuth>
        ) : (
          <Quiz />
        )}
      </>
    );
  } else if (isFinished || isTimeFinished) {
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
