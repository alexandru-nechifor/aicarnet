import { useState } from 'react';
import { useCurrentQuestionSelector } from '../../customHooks/useCurrentQuestionSelector';

import { createStyles, Image, Modal } from '@mantine/core';
import { useQuizDataSelector } from '../../customHooks/useQuizDataSelector';

const QuizImages = () => {
  const quizQuestions = useQuizDataSelector();
  const currentQuestion = useCurrentQuestionSelector();
  const [opened, setOpened] = useState(false);

  const useStyles = createStyles((theme) => ({
    image: {
      margin: 'auto',
      [theme.fn.smallerThan('sm')]: {
        width: '100%',
      },

      [theme.fn.smallerThan('lg')]: {
        width: '60%',
      },

      [theme.fn.smallerThan('md')]: {
        width: '60%',
      },
      width: '100%',
      marginTop: '2.5rem',
    },
  }));

  const { classes } = useStyles();

  if (quizQuestions[currentQuestion].imgSrc) {
    return (
      <>
        <div className={classes.image}>
          <Image
            src={`${quizQuestions[currentQuestion].imgSrc}`}
            alt={`${quizQuestions[currentQuestion].question}`}
            radius={'lg'}
            onClick={() => setOpened(true)}
          ></Image>
        </div>

        <Modal
          centered
          opened={opened}
          onClose={() => setOpened(false)}
          size={'xl'}
          radius={'lg'}
        >
          <Image
            src={`${quizQuestions[currentQuestion].imgSrc}`}
            alt={`${quizQuestions[currentQuestion].question}`}
            width={'100%'}
            radius={'lg'}
            className={classes.image}
          ></Image>
        </Modal>
      </>
    );
  } else {
    return <></>;
  }
};

export default QuizImages;
