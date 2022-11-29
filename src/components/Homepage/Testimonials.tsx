import { createStyles, Title } from '@mantine/core';
import CustomContainer from '../CustomComponents/Container';

const useTestimonialsStyles = createStyles((theme) => ({
  section: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'white',
    padding: '4rem 0',
  },
  gradientHeader: {
    background: theme.fn.linearGradient(
      45,
      `${theme.colors.main}`,
      `${theme.colors.blue[9]}`
    ),
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
}));

const Testimonials = () => {
  const { classes } = useTestimonialsStyles();
  return (
    <section className={classes.section}>
      <CustomContainer>
        <Title
          order={2}
          sx={(theme) => ({ color: theme.colors.heading, textAlign: 'center' })}
        >
          Vezi ce părere au{' '}
          <span className={classes.gradientHeader}>utilizatorii noștri</span>
        </Title>
      </CustomContainer>
    </section>
  );
};

export default Testimonials;
