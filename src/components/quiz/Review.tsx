import { toLetter } from '../../functions/toLetter';
import { useSavedAnswersSelector } from '../../customHooks/useSavedAnswersSelector';
import { useHasPassed } from '../../customHooks/useQuizStatusSelectors';
import { IconCheck, IconCircleX } from '@tabler/icons';
import {
  Container,
  Stack,
  createStyles,
  Group,
  Text,
  Button,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { useQuizDataSelector } from '../../customHooks/useQuizDataSelector';
import Choice from '../questionsData/Choice';
import QuestionHeading from '../questionsData/QuestionHeading';
import DataImage from '../questionsData/DataImage';
import CorrectAnswer from '../questionsData/CorrectAnswer';
import { useScoreSelector } from '../../customHooks/useScoreSelector';
import { useNegativeScoreSelector } from '../../customHooks/useNegativeScoreSelector';

const Review = () => {
  const quizQuestions = useQuizDataSelector();
  const savedAnswers = useSavedAnswersSelector();
  const passed = useHasPassed();
  const score = useScoreSelector();
  const negativeScore = useNegativeScoreSelector();
  const useStyles = createStyles((theme) => ({
    dataBox: {
      [theme.fn.smallerThan('md')]: { width: '100%' },
      width: '80%',
      margin: 'auto',
      backgroundColor: theme.colors.dark[5],
      color: theme.colors.gray[1],
      padding: '2rem',
      borderRadius: '10px',
    },

    correct: {
      backgroundColor: theme.colors.green[7],
      color: 'white',
      borderRadius: 8,
      padding: '1rem',
      textAlign: 'center',
      width: '100px',
    },

    wrong: {
      backgroundColor: theme.colors.red[7],
      color: 'white',
      borderRadius: 8,
      padding: '1rem',
      textAlign: 'center',
      width: '100px',
    },

    message: {
      [theme.fn.smallerThan('md')]: { width: '100%' },
      width: '40%',
      margin: 'auto',
      marginBottom: '2rem',
      borderRadius: 8,
      backgroundColor: theme.colors.dark[5],
      color: theme.colors.gray[1],
      padding: '2rem',
    },

    checkedIcon: {
      color: theme.colors.green[7],
    },

    circleXIcon: {
      color: theme.colors.red[7],
    },
  }));

  const { classes } = useStyles();
  return (
    <>
      <Container size="xl">
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

                  <CorrectAnswer correct={toLetter(item.correct)} />

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
                </Stack>
              );
            } else {
              return <></>;
            }
          })}
        </Stack>

        <Link to="/chestionare-auto">
          <Button size={'md'} sx={{ color: 'white', margin: '1rem auto' }}>
            Chestionare auto
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default Review;
