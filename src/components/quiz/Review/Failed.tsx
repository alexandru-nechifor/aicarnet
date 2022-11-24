import { Title, Text, Group, Button } from '@mantine/core';
import { IconCircleX } from '@tabler/icons';
import { useReviewStyles } from '../../../styles/Quiz/useReviewStyles';

const Failed = ({
  negativeScore,
  handleReset,
}: {
  negativeScore: number;
  handleReset: () => void;
}) => {
  const { classes } = useReviewStyles();
  return (
    <Group className={classes.message} align="center" position="center">
      <IconCircleX className={classes.circleXIcon} size={48} />
      <Title order={2}>Respins</Title>

      <Text align="center">
        Ne pare rău! Ai fost declarat respins cu:{' '}
        <span className={classes.circleXIcon}>{negativeScore}</span> răspunsuri
        greșite. Mai jos poți revedea chestionarul parcurs.
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

export default Failed;
