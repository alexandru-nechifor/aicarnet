import { Title } from '@mantine/core';

interface IQuestionHeading {
  children: string | number;
}
const QuestionHeading = ({ children }: IQuestionHeading) => {
  return (
    <Title order={2} size={'h3'}>
      {children}
    </Title>
  );
};

export default QuestionHeading;
