import { Grid, Title, Text, Stack } from '@mantine/core';
import { heroHeader, heroParagraph } from '../../constants/HomePage';
import HeroButtons from './HeroComponents/HeroButtons';
import HeroImage from './HeroComponents/HeroImage';
import SocialProof from './HeroComponents/SocialProof';

const Hero = () => {
  return (
    <>
      <Grid sx={{ minHeight: '90vh ' }} align="center" justify="center">
        <Grid.Col lg={6}>
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
        <Grid.Col lg={6}>
          <HeroImage />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Hero;
