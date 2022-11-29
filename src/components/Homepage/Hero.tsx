import { Grid, Title, Text, Stack } from '@mantine/core';

import { heroHeader, heroParagraph } from '../../constants/Home/HomePage';
import CustomContainer from '../CustomComponents/Container';
import HeroButtons from './HeroComponents/HeroButtons';
import HeroImage from './HeroComponents/HeroImage';
import SocialProof from './HeroComponents/SocialProof';

const Hero = () => {
  return (
    <CustomContainer>
      <Grid
        sx={(theme) => ({
          minHeight: '91vh',
          padding: '2rem 0',
          overflow: 'hidden',
          [theme.fn.largerThan('md')]: { padding: 0 },
        })}
        align="center"
        justify="center"
      >
        <Grid.Col md={12} lg={6}>
          <Stack spacing={35}>
            <Title order={1} sx={(theme) => ({ color: theme.colors.heading })}>
              {heroHeader}
            </Title>
            <Text
              sx={(theme) => ({
                maxWidth: '80%',
                [theme.fn.smallerThan('md')]: { maxWidth: '100%' },
              })}
            >
              {heroParagraph}
            </Text>
            <SocialProof />
            <HeroButtons />
          </Stack>
        </Grid.Col>
        <Grid.Col md={12} lg={6}>
          <HeroImage />
        </Grid.Col>
      </Grid>
    </CustomContainer>
  );
};

export default Hero;
