import { useState } from 'react';
import { useCurrentQuestionSelector } from '../../customHooks/quizHooks/useCurrentQuestionSelector';
import { createStyles, Image, Modal } from '@mantine/core';
import { useQuizDataSelector } from '../../customHooks/quizHooks/useQuizDataSelector';

const QuizImages = () => {
  const quizQuestions = useQuizDataSelector();
  const currentQuestion = useCurrentQuestionSelector();
  const [opened, setOpened] = useState(false);

  const useQImageStyles = createStyles((theme) => ({
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

      [theme.fn.largerThan('md')]: {
        '&:hover': {
          cursor: !opened ? 'pointer' : '',
          filter: !opened ? 'brightness(90%)' : '',
        },
      },
      width: '100%',
      marginTop: '2.5rem',
    },
  }));

  const { classes } = useQImageStyles();

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
    return null;
  }
};

export default QuizImages;
