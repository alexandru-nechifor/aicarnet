import { createStyles } from '@mantine/core';
export const useReviewStyles = createStyles((theme) => ({
  dataBox: {
    [theme.fn.smallerThan('md')]: { width: '100%' },
    width: '80%',
    margin: 'auto',
    backgroundColor: theme.colors.dark[5],
    color: theme.colors.gray[1],
    padding: '2rem',
    borderRadius: '10px',
  },

  correct: {
    backgroundColor: theme.colors.green[7],
    color: 'white',
    borderRadius: 8,
    padding: '0.5rem 1rem',
    textAlign: 'center',
  },

  wrong: {
    backgroundColor: theme.colors.red[7],
    color: 'white',
    borderRadius: 8,
    padding: '0.5rem 1rem',
    textAlign: 'center',
  },

  message: {
    [theme.fn.smallerThan('md')]: { width: '100%' },
    width: '40%',
    margin: 'auto',
    marginBottom: '2rem',
    borderRadius: 8,
    backgroundColor: theme.colors.dark[5],
    color: theme.colors.gray[1],
    padding: '2rem',
  },

  checkedIcon: {
    color: theme.colors.green[7],
  },

  circleXIcon: {
    color: theme.colors.red[7],
  },
}));
