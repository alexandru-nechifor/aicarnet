import { createStyles, Grid, Paper, Stack } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { useCurrentQuestionSelector } from '../../customHooks/useCurrentQuestionSelector';
import { useQuizDataSelector } from '../../customHooks/useQuizDataSelector';

import {
  useASelected,
  useBSelected,
  useCSelected,
} from '../../customHooks/useSelectedAnswerSelector';
import {
  setASelected,
  setBSelected,
  setCSelected,
} from '../../store/quizDataSlice';
import IQuizChoices from '../../types/IQuizChoices';

const QuizChoices = ({ setQuestionScore, shuffle }: IQuizChoices) => {
  const quizQuestions = useQuizDataSelector();
  const currentQuestion = useCurrentQuestionSelector();
  const isASelected = useASelected();
  const isBSelected = useBSelected();
  const isCSelected = useCSelected();
  const dispatch = useDispatch();

  const useStyles = createStyles((theme) => ({
    answer: {
      [theme.fn.smallerThan('md')]: {
        width: '100%',
      },

      width: '70%',
      padding: '1rem 2rem',
      margin: '1rem 0',
      backgroundColor: theme.colors.dark[6],
      userSelect: 'none',

      '&:hover': {
        cursor: 'pointer',
      },
    },

    answerSelected: {
      backgroundColor: theme.colors.blue[6],
      color: theme.colors.gray[1],
    },
  }));

  const { classes } = useStyles();

  return (
    <Grid key={currentQuestion} mt={25}>
      <Grid.Col order={shuffle[0]}>
        <Paper
          withBorder
          className={`${classes.answer} ${
            isASelected ? classes.answerSelected : ''
          }`}
          onClick={() => {
            setQuestionScore((prevScore: number) =>
              !isASelected ? prevScore + 1 : prevScore - 1
            );
            dispatch(setASelected());
          }}
        >
          {quizQuestions[currentQuestion].choiceA}
        </Paper>
      </Grid.Col>
      <Grid.Col order={shuffle[1]}>
        <Paper
          className={`${classes.answer} ${
            isBSelected ? classes.answerSelected : ''
          }`}
          withBorder
          onClick={() => {
            setQuestionScore((prevScore: number) =>
              !isBSelected ? prevScore + 2 : prevScore - 2
            );
            dispatch(setBSelected());
          }}
        >
          {quizQuestions[currentQuestion].choiceB}
        </Paper>
      </Grid.Col>
      <Grid.Col order={shuffle[2]}>
        <Paper
          className={`${classes.answer} ${
            isCSelected ? classes.answerSelected : ''
          }`}
          withBorder
          onClick={() => {
            setQuestionScore((prevScore: number) =>
              !isCSelected ? prevScore + 4 : prevScore - 4
            );
            dispatch(setCSelected());
          }}
        >
          {quizQuestions[currentQuestion].choiceC}
        </Paper>
      </Grid.Col>
    </Grid>
  );
};

export default QuizChoices;
