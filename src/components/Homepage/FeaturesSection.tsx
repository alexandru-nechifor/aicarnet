import { Box, Grid, SimpleGrid, Title, Text, Image } from '@mantine/core';
import { useFeaturesStyles } from '../../styles/Home/heroStyles';
import CustomContainer from '../customComponents/Container';
import BenefitsIMG from '../../assets/Home/benefitsImg.svg';
import { benefitsData } from '../../constants/Home/benefitsData';

const FeaturesSection = () => {
  const { classes } = useFeaturesStyles();

  return (
    <CustomContainer>
      <section className={classes.fSection}>
        <Grid align="center">
          <Grid.Col lg={6}>
            <Image src={BenefitsIMG} width="100%" />
          </Grid.Col>
          <Grid.Col lg={6}>
            <Title
              order={2}
              mb={40}
              sx={(theme) => ({ color: theme.colors.heading })}
            >
              De ce să alegi aiCarnet?
            </Title>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
              {benefitsData.map((item) => {
                const Icon = item.icon;
                return (
                  <Box className={classes.box} key={item.id}>
                    <Icon className={classes.icon} />
                    <Box sx={{ width: '80%' }}>
                      <Title order={4} mb={10}>
                        {item.title}
                      </Title>
                      <Text>{item.message}</Text>
                    </Box>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </section>
    </CustomContainer>
  );
};

export default FeaturesSection;
