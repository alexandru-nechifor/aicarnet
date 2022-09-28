import {
  Center,
  Container,
  Loader,
  Stack,
  createStyles,
  Button,
  Group,
  Modal,
  TextInput,
  NumberInput,
} from '@mantine/core';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Choice from '../../components/questionsData/Choice';
import CorrectAnswer from '../../components/questionsData/CorrectAnswer';
import DataImage from '../../components/questionsData/DataImage';
import QuestionHeading from '../../components/questionsData/QuestionHeading';
import { useQuestion } from '../../customHooks/useQuestion';
import { toLetter } from '../../functions/toLetter';
import DeleteQuestion from './DeleteQuestion';
import EditQuestion from './EditQuestion';

const Question = () => {
  const { uuid } = useParams<string>();
  const { questionsCatID } = useParams<string>();
  const [opened, setOpened] = useState(false);
  const [deleteOpened, setDeleteOpened] = useState(false);

  const {
    isLoading,
    isError,
    data: questionData,
  } = useQuestion(questionsCatID, uuid);

  //Style mantine
  const useStyles = createStyles((theme) => ({
    dataBox: {
      width: '100%',
      margin: 'auto',
      backgroundColor: theme.colors.dark[5],
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
      <Container size="lg">
        <Stack className={classes.dataBox}>
          <QuestionHeading>{questionData.question}</QuestionHeading>
          <DataImage src={questionData.imgSrc} alt={questionData.question} />
          <Choice>{questionData.choiceA}</Choice>
          <Choice>{questionData.choiceB}</Choice>
          <Choice>{questionData.choiceC}</Choice>

          <CorrectAnswer correct={toLetter(questionData.correct)} />

          <Group position="right">
            <Button onClick={() => setDeleteOpened(true)}>Delete</Button>
            <Button onClick={() => setOpened(true)}>Edit</Button>
          </Group>

          <Modal
            opened={opened}
            size="xl"
            onClose={() => setOpened(false)}
            title="Modifică întrebarea"
          >
            <EditQuestion questionData={questionData} />
          </Modal>

          <Modal
            opened={deleteOpened}
            size="xl"
            onClose={() => setDeleteOpened(false)}
            title="Șterge întrebarea"
          >
            <DeleteQuestion
              questionData={questionData}
              setDeleteOpened={setDeleteOpened}
            />
          </Modal>
        </Stack>
      </Container>
    </>
  );
};

export default Question;
