import {
  Center,
  Container,
  Loader,
  Stack,
  createStyles,
  Button,
} from '@mantine/core';

import { useNavigate, useParams } from 'react-router-dom';
import Choice from '../../components/QuestionsData/Choice';
import DataImage from '../../components/QuestionsData/DataImage';
import QuestionHeading from '../../components/QuestionsData/QuestionHeading';
import { useQuestion } from '../../customHooks/useQuestion';
import { isACorrect, isBCorrect, isCCorrect } from '../../utils/checkCorrect';

const Question = () => {
  const { uuid } = useParams<string>();
  const { questionsCatID } = useParams<string>();
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: questionData,
  } = useQuestion(questionsCatID, uuid);

  //Style mantine
  const useStyles = createStyles((theme) => ({
    dataBox: {
      width: '100%',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      color: theme.colors.gray[1],
      padding: '2rem',
      borderRadius: '10px',
    },
  }));
  const { classes } = useStyles();

  if (isLoading) {
    return (
      <Center sx={{ height: '90vh' }}>
        <Loader size="lg" />
      </Center>
    );
  }

  if (isError) {
    return <>Error</>;
  }

  return (
    <>
      <Container
        size="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '90vh',
        }}
      >
        <Stack className={classes.dataBox} mt={'1.5rem'} justify="center">
          <QuestionHeading>{questionData.question}</QuestionHeading>

          <DataImage src={questionData.imgSrc} alt={questionData.question} />
          <Choice correct={isACorrect(questionData.correct)}>
            {questionData.choiceA}
          </Choice>
          <Choice correct={isBCorrect(questionData.correct)}>
            {questionData.choiceB}
          </Choice>
          <Choice correct={isCCorrect(questionData.correct)}>
            {questionData.choiceC}
          </Choice>
        </Stack>

        <Button
          size={'md'}
          sx={{ color: 'white', margin: '1rem auto' }}
          variant="gradient"
          gradient={{ from: 'indigo', to: 'blue.5' }}
          onClick={() => navigate(-1)}
        >
          Înapoi
        </Button>
      </Container>
    </>
  );
};

export default Question;
