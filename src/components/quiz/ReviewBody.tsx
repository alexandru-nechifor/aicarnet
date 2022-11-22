import { Link } from 'react-router-dom';
import { IconCircleX } from '@tabler/icons';
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
import DisplayCorrect from './DisplayCorrect';

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
                    correct={
                      savedAnswers[index] === item.correct
                        ? isACorrect(item.correct)
                        : false
                    }
                    wrong={isAWrong(savedAnswers[index], item.correct)}
                  >
                    {item.choiceA}
                  </Choice>
                </Grid.Col>
                <Grid.Col order={answersOrder[index][1]}>
                  <Choice
                    correct={
                      savedAnswers[index] === item.correct
                        ? isBCorrect(item.correct)
                        : false
                    }
                    wrong={isBWrong(savedAnswers[index], item.correct)}
                  >
                    {item.choiceB}
                  </Choice>
                </Grid.Col>
                <Grid.Col order={answersOrder[index][2]}>
                  <Choice
                    correct={
                      savedAnswers[index] === item.correct
                        ? isCCorrect(item.correct)
                        : false
                    }
                    wrong={isCWrong(savedAnswers[index], item.correct)}
                  >
                    {item.choiceC}
                  </Choice>
                </Grid.Col>
              </Grid>

              {savedAnswers[index] !== item.correct ? (
                <>
                  <Group>
                    <IconCircleX color="red" size={30} />
                    <Text my={10} size="lg">
                      Ați răspuns greșit. Răspunsul corect este:
                    </Text>
                  </Group>
                  <DisplayCorrect
                    correct={item.correct}
                    choiceA={item.choiceA}
                    choiceB={item.choiceB}
                    choiceC={item.choiceC}
                  />
                </>
              ) : null}
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
