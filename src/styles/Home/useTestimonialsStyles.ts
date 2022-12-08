import { createStyles } from '@mantine/core';

export const useTestimonialsStyles = createStyles((theme) => ({
  section: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'white',
    padding: '4rem 0 0 0',
    position: 'relative',
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

  testimonialImage: {
    background: theme.colors.blue[0],
    padding: '0.5rem 3rem 0 3rem',
    width: 300,
    display: 'block',
    margin: 'auto',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  textStack: {
    position: 'relative',
    width: '80%',
    [theme.fn.smallerThan('md')]: {
      width: '90%',
      margin: '2rem auto 0 auto',
    },
  },

  handDrawnLine: {
    width: 50,
    position: 'absolute',
    top: '20%',
    left: '0%',

    [theme.fn.largerThan(500)]: { top: '18%', left: '25%' },
    [theme.fn.largerThan('md')]: { top: '25%', left: '17%' },
    [theme.fn.largerThan(1200)]: { top: '25%', left: '18%' },
    [theme.fn.largerThan(1900)]: { top: '25%', left: '20%' },
  },

  quoteLeft: {
    opacity: '50%',
    color: theme.colors.main,
    position: 'absolute',
    top: -70,
    left: -20,

    [theme.fn.smallerThan('md')]: {
      top: -40,
      left: 0,
      opacity: '10%',
    },
  },

  quoteRight: {
    opacity: '50%',
    color: theme.colors.main,
    position: 'absolute',
    bottom: 5,
    right: -10,

    [theme.fn.smallerThan('md')]: {
      right: 0,
      bottom: 40,
      opacity: '10%',
    },
  },
}));
