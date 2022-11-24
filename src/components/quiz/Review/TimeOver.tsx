import { Title, Text, Group, Button } from '@mantine/core';
import { useReviewStyles } from '../../../styles/Quiz/useReviewStyles';
import { IconClock } from '@tabler/icons';

const TimeOver = ({ handleReset }: { handleReset: () => void }) => {
  const { classes } = useReviewStyles();
  return (
    <Group className={classes.message} align="center" position="center">
      <IconClock className={classes.circleXIcon} size={48} />
      <Title order={2}>Respins</Title>

      <Text align="center">
        Ne pare rău! Timpul a expirat. Mai jos poți revedea chestionarul
        parcurs.
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

export default TimeOver;
