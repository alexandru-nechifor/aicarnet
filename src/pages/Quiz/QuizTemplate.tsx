import QuizHeader from '../../components/quiz/QuizHeader';
import QuizBody from '../../components/quiz/QuizBody';
import { useParams } from 'react-router-dom';
import Settings from '../../constants/Quiz/QuizSettings';
import Review from '../../components/quiz/Review';
import { useQuizData } from '../../customHooks/useQuizData';
import { useIsFinished } from '../../customHooks/useQuizStatusSelectors';
import { Box, Center, Loader } from '@mantine/core';
import CustomContainer from '../../components/customComponents/Container';
import { db } from '../../utils/firebase';
import { doc, updateDoc } from 'firebase/firestore';

import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCurrentQuestionSelector } from '../../customHooks/useCurrentQuestionSelector';
import { useScoreSelector } from '../../customHooks/useScoreSelector';
import { useNegativeScoreSelector } from '../../customHooks/useNegativeScoreSelector';

const QuizTemplate = () => {
  let { quizID } = useParams<string>();
  let quizType = Settings[quizID as keyof typeof Settings].questionData;
  const { currentUser } = useAuth();
  const { isFetching, isError } = useQuizData(quizType, quizID);

  const isFinished = useIsFinished();

  // const currentQuestion = useCurrentQuestionSelector();
  // const score = useScoreSelector();
  // const negativeScore = useNegativeScoreSelector();

  // useEffect(() => {
  //   return () => {
  //     console.log('intram aici la unmount');
  //     console.log(currentQuestion, score, negativeScore);
  //     const userProgressDb = doc(db, 'users', `${currentUser?.uid}`);

  //     updateDoc(userProgressDb, {
  //       [`${quizType}`]: {
  //         currentQuestion,
  //         score,
  //         negativeScore,
  //       },
  //     });
  //   };
  // }, []);

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
        <CustomContainer>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              flexDirection: 'column',
              height: '85vh',
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
