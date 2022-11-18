import { useState } from 'react';
import { useCurrentQuestionSelector } from '../../customHooks/quizHooks/useCurrentQuestionSelector';

import { Image, Modal } from '@mantine/core';
import { useQuizDataSelector } from '../../customHooks/quizHooks/useQuizDataSelector';
import { useQImageStyles } from '../../styles/Quiz/useQImageStyles';

const QuizImages = () => {
  const quizQuestions = useQuizDataSelector();
  const currentQuestion = useCurrentQuestionSelector();
  const [opened, setOpened] = useState(false);

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
