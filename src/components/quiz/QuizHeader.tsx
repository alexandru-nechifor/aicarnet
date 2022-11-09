import { MdCheck, MdCancel, MdOutlineAvTimer } from 'react-icons/md';
import { useCurrentQuestionSelector } from '../../customHooks/useCurrentQuestionSelector';
import { useScoreSelector } from '../../customHooks/useScoreSelector';
import Timer from './Timer';
import { useNegativeScoreSelector } from '../../customHooks/useNegativeScoreSelector';
import { createStyles, Grid, Group, Text } from '@mantine/core';
import { useQuizDataSelector } from '../../customHooks/useQuizDataSelector';
import { useParams } from 'react-router-dom';

const QuizHeader = () => {
  const { quizID } = useParams();
  const quizQuestions = useQuizDataSelector();
  const currentQuestion = useCurrentQuestionSelector();
  const score = useScoreSelector();
  const negativeScore = useNegativeScoreSelector();

  const useStyles = createStyles((theme) => ({
    headerItem: {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[2],
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',

      [theme.fn.smallerThan('md')]: {
        margin: 'auto',
      },
      minWidth: '100px',
      justifyContent: 'center',
    },

    scoreIcon: {
      color: theme.colors.green[7],
    },

    negativeScoreIcon: {
      color: theme.colors.red[7],
    },
    timeIcon: {
      color: theme.colors.blue[7],
    },

    questionHeader: {
      [theme.fn.smallerThan('md')]: {
        textAlign: 'center',
        width: '100%',
        border: 'none',
      },
      borderBottom: '1px solid',
      borderColor: theme.colors.blue[7],
      width: '70%',
    },
  }));

  const { classes } = useStyles();

  return (
    <>
      <Grid justify="space-between" align="center">
        <Grid.Col md={8} lg={10} orderMd={2}>
          <Group position="right">
            <Group className={classes.headerItem}>
              <MdCheck size={25} className={classes.scoreIcon} />
              <span>{score}</span>
            </Group>

            <Group className={classes.headerItem}>
              <MdCancel size={25} className={classes.negativeScoreIcon} />
              <span>{negativeScore}</span>
            </Group>

            {!quizID?.includes('mediu-de-invatare') ? (
              <Group className={classes.headerItem}>
                <MdOutlineAvTimer size={25} className={classes.timeIcon} />
                <Timer />
              </Group>
            ) : (
              ''
            )}
          </Group>
        </Grid.Col>

        <Grid.Col md={4} lg={2} orderMd={1}>
          <Text size={'lg'} className={classes.questionHeader}>
            Întrebarea {currentQuestion + 1}/{quizQuestions.length}
          </Text>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default QuizHeader;
