import { QuizTypes } from '../../constants/chestionare';
import { QuizMessages } from '../../constants/chestionare';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import {
  Center,
  Container,
  Grid,
  Stack,
  Title,
  Image,
  Paper,
} from '@mantine/core';

const QuizSelect = () => {
  let { quizID } = useParams<string>();
  return (
    <Container px="md">
      <Center>
        <Stack>
          <Paper radius="md" p="md" withBorder sx={{ marginBottom: 40 }}>
            <Grid align="center" justify="center">
              <Grid.Col
                lg={2}
                sm={12}
                sx={(theme) => ({
                  color: theme.colors.blue[7],
                  textAlign: 'center',
                })}
              >
                <FaInfoCircle size={70} />
              </Grid.Col>
              <Grid.Col lg={10}>
                {QuizMessages[quizID as keyof typeof QuizMessages].mainMessage}
              </Grid.Col>
            </Grid>
          </Paper>

          <Grid justify="center" align="center" gutter={50}>
            {QuizTypes.map((item) => {
              return item[quizID as keyof typeof item].map((quizType) => {
                return (
                  <Grid.Col md={6} lg={4} key={quizType.key}>
                    <Link
                      to={`../../chestionar-auto/${quizType.link}`}
                      key={quizType.key}
                    >
                      <Stack
                        align="center"
                        justify="center"
                        sx={(theme) => ({
                          backgroundColor: theme.colors.dark[5],
                          color: theme.colors.blue[7],
                          padding: '2rem',
                          borderRadius: '0.5rem',
                          height: '250px',
                          width: '300px',
                          margin: 'auto',
                          '&:hover': {
                            border: '2px solid',
                            borderColor: theme.colors.blue[7],
                          },
                        })}
                      >
                        <Image
                          src={quizType.image}
                          alt={quizType.title}
                          height={100}
                          width={100}
                        />
                        <Title
                          order={2}
                          size="h4"
                          color="gray.1"
                          sx={{ marginTop: 10 }}
                        >
                          {quizType.title}
                        </Title>
                      </Stack>
                    </Link>
                  </Grid.Col>
                );
              });
            })}
          </Grid>
        </Stack>
      </Center>
    </Container>
  );
};

export default QuizSelect;
