import { QuizTypes, QuizMessages } from '../../constants/Quiz/chestionare';

import { Link, useParams } from 'react-router-dom';
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
import Gradient from '../../components/CustomComponents/Gradient';

const QuizSelect = () => {
  const { quizID } = useParams<string>();
  return (
    <Gradient>
      <Container
        px="md"
        sx={{
          display: 'flex',
          alignItems: 'center',
          minHeight: '70vh',
        }}
      >
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
                  {
                    QuizMessages[quizID as keyof typeof QuizMessages]
                      .mainMessage
                  }
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
                            backgroundColor:
                              theme.colorScheme === 'dark'
                                ? theme.colors.dark[5]
                                : 'white',
                            border:
                              theme.colorScheme === 'dark'
                                ? ''
                                : ` 1px solid ${theme.colors.gray[2]}`,
                            padding: '2rem',
                            borderRadius: '0.5rem',
                            height: '220px',
                            width: '280px',
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
                            width={'70%'}
                            sx={(theme) => ({
                              borderRadius: 4,

                              padding: '1rem',
                              background:
                                theme.colorScheme === 'dark'
                                  ? theme.colors.dark[6]
                                  : theme.colors.gray[1],
                            })}
                          />
                          <Title
                            order={2}
                            size="h4"
                            sx={(theme) => ({
                              color: theme.colors.heading,
                              marginTop: 10,
                            })}
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
    </Gradient>
  );
};

export default QuizSelect;
