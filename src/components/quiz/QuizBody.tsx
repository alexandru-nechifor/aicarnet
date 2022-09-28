import { useState } from 'react';
import QuizButtons from './QuizButtons';
import QuizChoices from './QuizChoices';
import QuizQuestion from './QuizQuestion';
import QuizImage from './QuizImage';
import { Grid } from '@mantine/core';

const QuizBody = () => {
  const [questionScore, setQuestionScore] = useState(0);
  const [shuffle, setShuffle] = useState([0, 1, 2]);

  // Shuffle the display order of choices
  const shuffleArray = (array: Array<number>) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setShuffle(array);
  };

  return (
    <>
      <Grid align={'center'}>
        <Grid.Col sm={12} lg={4} orderLg={2}>
          <QuizImage />
        </Grid.Col>
        <Grid.Col sm={12} lg={8}>
          <QuizQuestion />

          <QuizChoices shuffle={shuffle} setQuestionScore={setQuestionScore} />
        </Grid.Col>
      </Grid>
      <QuizButtons
        shuffle={shuffle}
        shuffleArray={shuffleArray}
        questionScore={questionScore}
        setQuestionScore={setQuestionScore}
      />
    </>
  );
};

export default QuizBody;
