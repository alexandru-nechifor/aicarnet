import { Box, Title } from '@mantine/core';

const Statistics = () => {
  return (
    <Box
      sx={(theme) => ({
        width: '100%',
        height: '100%',
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'white',
        padding: '2rem',
        borderRadius: 8,
      })}
    >
      <Title align="center">Statisticile tale</Title>
    </Box>
  );
};

export default Statistics;
