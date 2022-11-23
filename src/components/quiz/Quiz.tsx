import { Box } from '@mantine/core';
import CustomContainer from '../customComponents/Container';
import QuizBody from './QuizBody';
import QuizHeader from './QuizHeader';

const Quiz = () => {
  return (
    <CustomContainer>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          flexDirection: 'column',
          minHeight: '85vh',
        }}
      >
        <QuizHeader />
        <QuizBody />
      </Box>
    </CustomContainer>
  );
};

export default Quiz;
