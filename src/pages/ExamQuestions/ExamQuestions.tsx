import { ChestionareTopics } from '../../constants/Quiz/chestionare';
import { Link } from 'react-router-dom';
import { Button, Center, Container, Grid, Stack, Title } from '@mantine/core';

const ExamQuestions = () => {
  return (
    <Container size="xl" sx={{ height: '58vh' }}>
      <Center>
        <Stack>
          <Title order={1} sx={{ textAlign: 'center', marginTop: '1rem' }}>
            Vă rugăm selectați categoria dorită
          </Title>

          <Grid mt={40} gutter="xl">
            {ChestionareTopics.map((item) => {
              return (
                <Grid.Col sm={12} lg={4} key={item.key}>
                  <Link key={item.key} to={`/intrebari-examen/${item.quizID}`}>
                    <Button sx={{ width: '100%' }} variant="outline">
                      {item.title}
                    </Button>
                  </Link>
                </Grid.Col>
              );
            })}
          </Grid>
        </Stack>
      </Center>
    </Container>
  );
};

export default ExamQuestions;
