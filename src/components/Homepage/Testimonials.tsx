import { Grid, Title, Stack, Text, Box } from '@mantine/core';
import CustomContainer from '../CustomComponents/Container';
import { Carousel } from '@mantine/carousel';
import handDrawnLine from '../../assets/Home/Testimonials/signal.png';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useTestimonialsStyles } from '../../styles/Home/useTestimonialsStyles';
import { TestimonialsData } from '../../constants/Home/testimonialsData';

const Testimonials = () => {
  const { classes } = useTestimonialsStyles();
  return (
    <section className={classes.section}>
      <CustomContainer>
        <Title
          order={2}
          size={'h1'}
          sx={(theme) => ({ color: theme.colors.heading, textAlign: 'center' })}
        >
          Vezi ce părere au{' '}
          <span className={classes.gradientHeader}>utilizatorii noștri</span>
        </Title>
        <Carousel mx="auto" mt={'4rem'}>
          {TestimonialsData.map((item) => {
            return (
              <Carousel.Slide key={item.tag}>
                <Grid align={'center'} sx={{ height: '100%' }}>
                  <Grid.Col sm={12} lg={6}>
                    <img
                      src={item.image}
                      className={classes.testimonialImage}
                      alt={item.name}
                    />
                    <img
                      src={handDrawnLine}
                      className={classes.handDrawnLine}
                      alt="Hand Drawn Line"
                    />
                  </Grid.Col>

                  <Grid.Col lg={6}>
                    <Stack className={classes.textStack}>
                      <Text>{item.message}</Text>

                      <Box>
                        <Title order={3} mt={15}>
                          {item.name}
                        </Title>
                        <Text size="sm" color="gray.7" italic>
                          {item.tag}
                        </Text>
                      </Box>

                      <FaQuoteLeft size={40} className={classes.quoteLeft} />
                      <FaQuoteRight size={40} className={classes.quoteRight} />
                    </Stack>
                  </Grid.Col>
                </Grid>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </CustomContainer>
    </section>
  );
};

export default Testimonials;
