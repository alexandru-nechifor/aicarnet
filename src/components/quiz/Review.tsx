import { IconCheck, IconCircleX } from '@tabler/icons';
import { Group, Text, Button, Title } from '@mantine/core';
import CustomContainer from '../customComponents/Container';
// Redux imports
import { useScoreSelector } from '../../customHooks/quizHooks/useScoreSelector';
import { useNegativeScoreSelector } from '../../customHooks/quizHooks/useNegativeScoreSelector';
import { useReviewStyles } from '../../styles/Quiz/useReviewStyles';
import {
  resetQuiz,
  setFbLoading,
  setQuizData,
} from '../../store/quizDataSlice';
import { useHasPassed } from '../../customHooks/quizHooks/useQuizStatusSelectors';
import { useDispatch } from 'react-redux';

// Quiz settings
import { shuffleArray } from '../../utils/shuffleArray';
import Settings from '../../constants/Quiz/QuizSettings';
import { useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useAuth } from '../../context/AuthContext';

import ReviewBody from './ReviewBody';

const Review = ({ data, quizID }: any) => {
  //Redux
  const passed = useHasPassed();
  const score = useScoreSelector();
  const negativeScore = useNegativeScoreSelector();
  const dispatch = useDispatch();

  //Firebase
  const { currentUser } = useAuth();
  const { classes } = useReviewStyles();

  const handleReset = () => {
    dispatch(resetQuiz());
    dispatch(setFbLoading(false));

    if (!quizID.includes('mediu-de-invatare')) {
      const totalCount = Settings[quizID as keyof typeof Settings].total;
      const shuffledData = shuffleArray(data);
      const filteredData = shuffledData.slice(0, totalCount);

      dispatch(setQuizData(filteredData));
    }
  };

  useEffect(() => {
    if (quizID.includes('mediu-de-invatare')) {
      const userProgressDb = doc(db, 'users', `${currentUser?.uid}`);
      const resetProgress = async () => {
        await updateDoc(userProgressDb, {
          [`${Settings[quizID as keyof typeof Settings].questionData}`]: {
            currentQuestion: 0,
            score: 0,
            negativeScore: 0,
          },
        });
      };

      resetProgress();
    }
  }, [quizID, currentUser?.uid]);

  return (
    <>
      <CustomContainer>
        <Group
          className={classes.message}
          align="center"
          position="center"
          hidden={!passed}
        >
          <IconCheck className={classes.checkedIcon} size={48} />
          <Title order={2}>Admis</Title>
          <Text align="center">
            Felicitări! Ai fost declarat admis cu:{' '}
            <span className={classes.checkedIcon}>{score}</span> răspunsuri
            corecte. Mai jos poți revedea chestionarul parcurs.
          </Text>
          <Button
            size={'md'}
            sx={{ color: 'white', margin: '1rem auto' }}
            onClick={handleReset}
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan' }}
          >
            Generează alt chestionar
          </Button>
        </Group>

        <Group
          className={classes.message}
          align="center"
          position="center"
          hidden={passed}
        >
          <IconCircleX className={classes.circleXIcon} size={48} />
          <Title order={2}>Respins</Title>

          <Text align="center">
            Ne pare rău! Ai fost declarat respins cu:{' '}
            <span className={classes.circleXIcon}>{negativeScore}</span>{' '}
            răspunsuri greșite. Mai jos poți revedea chestionarul parcurs.
          </Text>
          <Button
            size={'md'}
            sx={{ color: 'white', margin: '1rem auto' }}
            onClick={handleReset}
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan' }}
          >
            Generează alt chestionar
          </Button>
        </Group>
        <ReviewBody handleReset={handleReset} />
      </CustomContainer>
    </>
  );
};

export default Review;
