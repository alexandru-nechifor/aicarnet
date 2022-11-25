import { createStyles } from '@mantine/core';
export const useReviewStyles = createStyles((theme) => ({
  dataBox: {
    [theme.fn.smallerThan('md')]: { width: '100%' },
    [theme.fn.smallerThan(1600)]: { width: '90%' },
    width: '75%',
    margin: 'auto',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
    color: theme.colors.gray[1],
    padding: '2rem',
    borderRadius: '10px',
  },

  correct: {
    backgroundColor: theme.colors.green[9],
    color: 'white',
    borderRadius: 8,
    padding: '0.5rem 1rem',
    textAlign: 'center',
  },

  wrong: {
    backgroundColor: theme.colors.red[9],
    color: 'white',
    borderRadius: 8,
    padding: '0.5rem 1rem',
    textAlign: 'center',
  },

  message: {
    [theme.fn.smallerThan('md')]: { width: '100%' },
    width: 500,
    margin: '2rem auto',
    borderRadius: 8,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
    color: theme.colors.heading,
    padding: '3rem',
  },

  checkedIcon: {
    color: theme.colors.green[7],
  },

  circleXIcon: {
    color: theme.colors.red[7],
  },
}));
