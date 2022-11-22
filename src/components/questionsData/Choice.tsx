import { Box, Paper } from '@mantine/core';

interface IChoice {
  children: string;

  correct?: boolean;
  wrong?: boolean;
}
const Choice = ({ children, correct, wrong }: IChoice) => {
  return (
    <Paper
      withBorder
      p={'0.8rem'}
      sx={(theme) => ({
        width: '100%',

        backgroundColor: correct
          ? theme.colors.green[9]
          : wrong
          ? theme.colors.red[9]
          : '',
        border: correct ? 'none' : wrong ? 'none' : '',
        color: correct ? 'white' : wrong ? 'white' : '',
      })}
    >
      {children}
    </Paper>
  );
};

export default Choice;
