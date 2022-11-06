import { Box } from '@mantine/core';

import Hero from '../components/Homepage/Hero';
import BenefitsSection from '../components/Homepage/BenefitsSection';
import FeaturesSection from '../components/Homepage/FeaturesSection';

const Home = () => {
  return (
    <>
      <Box
        sx={(theme) => ({
          // background: theme.colorScheme === 'dark' ? '#111214' : '#f8f9fa',
          background:
            theme.colorScheme === 'dark'
              ? '#111214'
              : theme.fn.radialGradient('#fff', '#F3F8FF', '#fff'),
        })}
      >
        <Hero />
        <BenefitsSection />
        <FeaturesSection />
        {/* <SecondSection /> */}
      </Box>
    </>
  );
};

export default Home;
