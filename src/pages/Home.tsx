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
          // background:
          //   theme.colorScheme === 'dark'
          //     ? '#111214'
          //     : theme.fn.radialGradient('#fff', '#F3F8FF', '#fff'),
          backgroundImage:
            theme.colorScheme === 'dark'
              ? '#111214'
              : 'radial-gradient(50% 50% at 50% 50%,rgba(160,51,255,.024) 0,rgba(160,51,255,0) 50%),radial-gradient(50% 50% at 50% 50%,rgba(160,51,255,.04) 0,rgba(160,51,255,0) 75%),radial-gradient(50% 50% at 50% 50%,rgba(160,51,255,.064) 0,rgba(160,51,255,0) 100%),radial-gradient(50% 50% at 50% 50%,rgba(24,119,242,.024) 0,rgba(24,119,242,0) 50%),radial-gradient(50% 50% at 50% 50%,rgba(24,119,242,.04) 0,rgba(24,119,242,0) 75%),radial-gradient(50% 50% at 50% 50%,rgba(24,119,242,.064) 0,rgba(24,119,242,0) 100%),radial-gradient(50% 50% at 50% 50%,rgba(255,108,92,.024) 0,rgba(255,108,92,0) 50%),radial-gradient(50% 50% at 50% 50%,rgba(255,108,92,.04) 0,rgba(255,108,92,0) 75%),radial-gradient(50% 50% at 50% 50%,rgba(255,108,92,.064) 0,rgba(255,108,92,0) 100%),radial-gradient(50% 50% at 50% 50%,rgba(245,206,51,.024) 0,rgba(245,206,51,0) 50%),radial-gradient(50% 50% at 50% 50%,rgba(245,206,51,.04) 0,rgba(245,206,51,0) 75%),radial-gradient(50% 50% at 50% 50%,rgba(245,206,51,.064) 0,rgba(245,206,51,0) 100%),radial-gradient(50% 50% at 50% 50%,rgba(37,211,102,.024) 0,rgba(37,211,102,0) 50%),radial-gradient(50% 50% at 50% 50%,rgba(37,211,102,.04) 0,rgba(37,211,102,0) 75%),radial-gradient(50% 50% at 50% 50%,rgba(37,211,102,.064) 0,rgba(37,211,102,0) 100%),radial-gradient(50% 50% at 50% 50%,rgba(24,119,242,.024) 0,rgba(24,119,242,0) 50%),radial-gradient(50% 50% at 50% 50%,rgba(24,119,242,.04) 0,rgba(24,119,242,0) 75%),radial-gradient(50% 50% at 50% 50%,rgba(24,119,242,.064) 0,rgba(24,119,242,0) 100%)',
          backgroundSize:
            '156.45vw 99.03vw,156.45vw 99.03vw,156.45vw 99.03vw,226.86vw 145.44vw,226.86vw 145.44vw,226.86vw 145.44vw,171.96vw 110.31vw,171.96vw 110.31vw,171.96vw 110.31vw,130.29vw 83.58vw,130.29vw 83.58vw,130.29vw 83.58vw,198vw 126.9vw,198vw 126.9vw,198vw 126.9vw,300vw 192vw,300vw 192vw,300vw 192vw',
          backgroundPosition:
            '37.97vw calc(((300vw - 100vh)/2 - 85.77vw) * -1),37.97vw calc(((300vw - 100vh)/2 - 85.77vw) * -1),37.97vw calc(((300vw - 100vh)/2 - 85.77vw) * -1),-100vw calc(((300vw - 100vh)/2 - 154.56vw) * -1),-100vw calc(((300vw - 100vh)/2 - 154.56vw) * -1),-100vw calc(((300vw - 100vh)/2 - 154.56vw) * -1),13.34vw calc(((300vw - 100vh)/2 - 53.88vw) * -1),13.34vw calc(((300vw - 100vh)/2 - 53.88vw) * -1),13.34vw calc(((300vw - 100vh)/2 - 53.88vw) * -1),10.64vw calc(((300vw - 100vh)/2 - 17.19vw) * -1),10.64vw calc(((300vw - 100vh)/2 - 17.19vw) * -1),10.64vw calc(((300vw - 100vh)/2 - 17.19vw) * -1),-49vw calc(((300vw - 100vh)/2 - 41.1vw) * -1),-49vw calc(((300vw - 100vh)/2 - 41.1vw) * -1),-49vw calc(((300vw - 100vh)/2 - 41.1vw) * -1),-100vw calc(((300vw - 100vh)/2 - 78vw) * -1),-100vw calc(((300vw - 100vh)/2 - 78vw) * -1),-100vw calc(((300vw - 100vh)/2 - 78vw) * -1)',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
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
