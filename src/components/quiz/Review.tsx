import { IconCheck, IconCircleX } from '@tabler/icons';
import { Stack, Group, Text, Button } from '@mantine/core';
import CustomContainer from '../customComponents/Container';

import Choice from '../questionsData/Choice';
import QuestionHeading from '../questionsData/QuestionHeading';
import DataImage from '../questionsData/DataImage';
import CorrectAnswer from '../questionsData/CorrectAnswer';

// Redux imports
import { useQuizDataSelector } from '../../customHooks/quizHooks/useQuizDataSelector';
import { useScoreSelector } from '../../customHooks/quizHooks/useScoreSelector';
import { useNegativeScoreSelector } from '../../customHooks/quizHooks/useNegativeScoreSelector';
import { useReviewStyles } from '../../styles/Quiz/useReviewStyles';
import {
  resetQuiz,
  setFbLoading,
  setQuizData,
} from '../../store/quizDataSlice';
import { useSavedAnswersSelector } from '../../customHooks/quizHooks/useSavedAnswersSelector';
import { useHasPassed } from '../../customHooks/quizHooks/useQuizStatusSelectors';
import { useDispatch } from 'react-redux';

// Quiz settings
import { shuffleArray } from '../../utils/shuffleArray';
import Settings from '../../constants/Quiz/QuizSettings';
import { toLetter } from '../../utils/toLetter';
import { useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Review = ({ data, quizID }: any) => {
  //Redux
  const quizQuestions = useQuizDataSelector();
  const savedAnswers = useSavedAnswersSelector();
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
          <Text>
            Felicitări! Ai fost declarat admis cu: {score} răspunsuri corecte
          </Text>
        </Group>

        <Group
          className={classes.message}
          align="center"
          position="center"
          hidden={passed}
        >
          <IconCircleX className={classes.circleXIcon} size={48} />
          <Text>
            Ne pare rău! Ai fost declarat respins cu: {negativeScore} răspunsuri
            greșite.
          </Text>
        </Group>
        <Stack mx="auto" justify="center" align="center" spacing={'xl'}>
          {quizQuestions.map((item, index: number) => {
            if (index <= savedAnswers.length - 1) {
              return (
                <Stack className={classes.dataBox} key={item.id}>
                  <QuestionHeading>{`${index + 1}. ${
                    item.question
                  }`}</QuestionHeading>

                  <DataImage src={item.imgSrc} alt={item.question} />

                  <Choice>{item.choiceA}</Choice>
                  <Choice>{item.choiceB}</Choice>
                  <Choice>{item.choiceC}</Choice>

                  <Group>
                    <span
                      className={
                        savedAnswers[index] === item.correct
                          ? classes.correct
                          : classes.wrong
                      }
                    >
                      {toLetter(savedAnswers[index])}
                    </span>

                    <Text>Răspunsul tău</Text>
                  </Group>
                  <CorrectAnswer correct={toLetter(item.correct)} />
                </Stack>
              );
            } else {
              return null;
            }
          })}

          <Group>
            <Link to="/chestionare-auto">
              <Button
                size={'md'}
                sx={{ color: 'white', margin: '1rem auto' }}
                variant="gradient"
                gradient={{ from: 'indigo', to: 'blue.5' }}
              >
                Chestionare auto
              </Button>
            </Link>

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
        </Stack>
      </CustomContainer>
    </>
  );
};

export default Review;
