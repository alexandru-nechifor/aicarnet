import { Link } from 'react-router-dom';
import { ChestionareTopics } from '../constants/chestionare';

import { Center, Container, Grid, Stack, Title } from '@mantine/core';

const ChestionareAuto = () => {
  return (
    <>
      <Container px="md">
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
                        backgroundColor: theme.colors.dark[5],
                        color: theme.colors.blue[7],
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

                      <Title order={2} size="h4" color="gray.1">
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
