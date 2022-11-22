import { Link } from 'react-router-dom';
import { Stack, Grid, Group, Button, Text } from '@mantine/core';
import QuestionHeading from '../questionsData/QuestionHeading';
import Choice from '../questionsData/Choice';
import DataImage from '../questionsData/DataImage';
import { useReviewStyles } from '../../styles/Quiz/useReviewStyles';
import { useQuizDataSelector } from '../../customHooks/quizHooks/useQuizDataSelector';
import { useSavedAnswersSelector } from '../../customHooks/quizHooks/useSavedAnswersSelector';
import { useAnswersOrderSelector } from '../../customHooks/quizHooks/useAnswersOrderSelector';
import {
  isACorrect,
  isAWrong,
  isBCorrect,
  isBWrong,
  isCCorrect,
  isCWrong,
} from '../../utils/checkCorrect';

interface IReviewBody {
  handleReset: () => void;
}

const ReviewBody = ({ handleReset }: IReviewBody) => {
  const quizQuestions = useQuizDataSelector();
  const savedAnswers = useSavedAnswersSelector();
  const answersOrder = useAnswersOrderSelector();
  const { classes } = useReviewStyles();

  return (
    <Stack mx="auto" justify="center" align="center" spacing={'xl'}>
      {quizQuestions.map((item, index: number) => {
        if (index <= savedAnswers.length - 1) {
          return (
            <Stack className={classes.dataBox} key={item.id}>
              <QuestionHeading>{`${index + 1}. ${
                item.question
              }`}</QuestionHeading>

              <DataImage src={item.imgSrc} alt={item.question} />

              <Grid>
                <Grid.Col order={answersOrder[index][0]}>
                  <Choice
                    correct={isACorrect(item.correct)}
                    wrong={isAWrong(savedAnswers[index], item.correct)}
                  >
                    {item.choiceA}
                  </Choice>
                </Grid.Col>
                <Grid.Col order={answersOrder[index][1]}>
                  <Choice
                    correct={isBCorrect(item.correct)}
                    wrong={isBWrong(savedAnswers[index], item.correct)}
                  >
                    {item.choiceB}
                  </Choice>
                </Grid.Col>
                <Grid.Col order={answersOrder[index][2]}>
                  <Choice
                    correct={isCCorrect(item.correct)}
                    wrong={isCWrong(savedAnswers[index], item.correct)}
                  >
                    {item.choiceC}
                  </Choice>
                </Grid.Col>
              </Grid>

              <Group mt={10}>
                <span
                  className={
                    savedAnswers[index] === item.correct
                      ? classes.correct
                      : classes.wrong
                  }
                >
                  {savedAnswers[index] === item.correct ? 'Corect' : 'Greșit'}
                </span>
              </Group>
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
  );
};

export default ReviewBody;
