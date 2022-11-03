import { Box } from '@mantine/core';
import CustomContainer from '../components/customComponents/Container';
import Hero from '../components/Homepage/Hero';
import SecondSection from '../components/Homepage/SecondSection';

const Home = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          background: theme.colorScheme === 'dark' ? '#111214' : '#f8f9fa',
        })}
      >
        <CustomContainer>
          <Hero />
          {/* <SecondSection /> */}
        </CustomContainer>
      </Box>
    </>
  );
};

export default Home;
