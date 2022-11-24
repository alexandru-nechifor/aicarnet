import { Title, Text, Group, Button } from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import React from 'react';
import { useReviewStyles } from '../../../styles/Quiz/useReviewStyles';

const Passed = ({
  score,
  handleReset,
}: {
  score: number;
  handleReset: () => void;
}) => {
  const { classes } = useReviewStyles();
  return (
    <Group className={classes.message} align="center" position="center">
      <IconCheck className={classes.checkedIcon} size={48} />
      <Title order={2}>Admis</Title>
      <Text align="center">
        Felicitări! Ai fost declarat admis cu:{' '}
        <span className={classes.checkedIcon}>{score}</span> răspunsuri corecte.
        Mai jos poți revedea chestionarul parcurs.
      </Text>
      <Button
        size={'md'}
        sx={{ color: 'white', margin: '1rem auto' }}
        onClick={handleReset}
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan' }}
      >
        Generează alt chestionar
      </Button>
    </Group>
  );
};

export default Passed;
