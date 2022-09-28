import { Paper } from '@mantine/core';

interface IChoice {
  children: string;
}
const Choice = ({ children }: IChoice) => {
  return (
    <Paper withBorder p={'0.8rem'}>
      {children}
    </Paper>
  );
};

export default Choice;
