import { Link } from 'react-router-dom';
import { QuizTopics } from '../constants/Quiz/chestionare';

import {
  Center,
  Container,
  Grid,
  Stack,
  Title,
  Text,
  Image,
} from '@mantine/core';
import Gradient from '../components/customComponents/Gradient';

const ChestionareAuto = () => {
  return (
    <Gradient>
      <Container px="md">
        <Stack align="center">
          <Title
            mt={'3rem'}
            order={1}
            sx={(theme) => ({ color: theme.colors.heading })}
          >
            Chestionare Auto DRPCIV
          </Title>
          <Text size={'lg'}>Vă rugăm selectați categoria dorită</Text>
        </Stack>
        <Center mt={'3rem'}>
          <Grid justify="center" align="center" gutter={50}>
            {QuizTopics.map((item) => {
              return (
                <Grid.Col md={6} lg={4} key={item.key}>
                  <Link
                    to={`../../chestionare-auto/${item.quizID}`}
                    key={item.key}
                  >
                    <Stack
                      align="center"
                      justify="center"
                      sx={(theme) => ({
                        backgroundColor:
                          theme.colorScheme === 'dark'
                            ? theme.colors.dark[5]
                            : 'white',
                        color: theme.colors.main,
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
                      <Image src={item.icon} width={item.width} />

                      <Title
                        order={2}
                        size="h4"
                        sx={(theme) => ({
                          color: theme.colors.heading,
                        })}
                      >
                        {item.title}
                      </Title>
                    </Stack>
                  </Link>
                </Grid.Col>
              );
            })}
          </Grid>
        </Center>
      </Container>
    </Gradient>
  );
};
export default ChestionareAuto;
