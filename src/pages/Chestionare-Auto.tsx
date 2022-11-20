import { Link } from 'react-router-dom';
import { ChestionareTopics } from '../constants/Quiz/chestionare';

import { Center, Container, Grid, Stack, Title, Text } from '@mantine/core';

const ChestionareAuto = () => {
  return (
    <>
      <Container px="md">
        <Stack mt={'1rem'} mb={'3rem'} align="center">
          <Title order={1} sx={(theme) => ({ color: theme.colors.heading })}>
            Chestionare Auto DRPCIV
          </Title>
          <Text size={'lg'}>Vă rugăm selectați categoria dorită</Text>
        </Stack>
        <Center>
          <Grid justify="center" align="center" gutter={50}>
            {ChestionareTopics.map((item) => {
              const Icon = item.icon;
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
                            : theme.colors.gray[0],
                        color: theme.colors.main,
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
                      <Icon size="70px" />

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
    </>
  );
};
export default ChestionareAuto;
