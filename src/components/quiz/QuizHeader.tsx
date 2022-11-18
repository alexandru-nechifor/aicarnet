import { MdCheck, MdCancel, MdOutlineAvTimer } from 'react-icons/md';
import { useCurrentQuestionSelector } from '../../customHooks/quizHooks/useCurrentQuestionSelector';
import { useScoreSelector } from '../../customHooks/quizHooks/useScoreSelector';
import Timer from './Timer';
import { useNegativeScoreSelector } from '../../customHooks/quizHooks/useNegativeScoreSelector';
import { Grid, Group, Text } from '@mantine/core';
import { useQuizDataSelector } from '../../customHooks/quizHooks/useQuizDataSelector';
import { useParams } from 'react-router-dom';
import { useQHeaderStyles } from '../../styles/Quiz/useQHeaderStyles';

const QuizHeader = () => {
  const { quizID } = useParams();
  const quizQuestions = useQuizDataSelector();
  const currentQuestion = useCurrentQuestionSelector();
  const score = useScoreSelector();
  const negativeScore = useNegativeScoreSelector();

  const { classes } = useQHeaderStyles();

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
