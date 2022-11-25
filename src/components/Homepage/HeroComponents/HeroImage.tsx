import { Box, Image } from '@mantine/core';
import HeroSVG from '../../../assets/Home/heroCar.svg';

const HeroImage = () => {
  return (
    <Box py={'2rem'}>
      <Image src={HeroSVG} height="100%" width="100%" />
    </Box>
  );
};

export default HeroImage;
