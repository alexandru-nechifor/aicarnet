import { createStyles, Group, Text } from '@mantine/core';

interface ICorrectAnswer {
  correct: string | undefined;
}
const CorrectAnswer = ({ correct }: ICorrectAnswer) => {
  const useStyles = createStyles((theme) => ({
    correct: {
      backgroundColor: theme.colors.green[7],
      color: 'white',
      borderRadius: 8,
      padding: '0.5rem 1rem',
      textAlign: 'center',
      width: 'fit-content',
    },
  }));
  const { classes } = useStyles();
  return (
    <Group>
      <span className={classes.correct}>{correct}</span>
      <Text>Răspuns corect</Text>
    </Group>
  );
};

export default CorrectAnswer;
