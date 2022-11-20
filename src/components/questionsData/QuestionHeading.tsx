import { Title } from '@mantine/core';

interface IQuestionHeading {
  children: string | number;
}
const QuestionHeading = ({ children }: IQuestionHeading) => {
  return (
    <Title
      order={2}
      size={'h3'}
      sx={(theme) => ({
        color: theme.colors.heading,
      })}
    >
      {children}
    </Title>
  );
};

export default QuestionHeading;
