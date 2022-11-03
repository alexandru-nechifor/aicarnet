import { Box } from '@mantine/core';
import { ReactComponent as HeroSVG } from '../../../assets/Home/heroCar.svg';

const HeroImage = () => {
  return (
    <Box py={'2rem'}>
      <HeroSVG height="100%" width="100%" />
    </Box>
  );
};

export default HeroImage;
