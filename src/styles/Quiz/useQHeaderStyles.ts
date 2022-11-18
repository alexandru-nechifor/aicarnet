import { createStyles } from '@mantine/core';

export const useQHeaderStyles = createStyles((theme) => ({
  headerItem: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[2],
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',

    [theme.fn.smallerThan('md')]: {
      margin: 'auto',
    },
    minWidth: '100px',
    justifyContent: 'center',
  },

  scoreIcon: {
    color: theme.colors.green[7],
  },

  negativeScoreIcon: {
    color: theme.colors.red[7],
  },
  timeIcon: {
    color: theme.colors.blue[7],
  },

  questionHeader: {
    [theme.fn.smallerThan('md')]: {
      textAlign: 'center',
      width: '100%',
      border: 'none',
    },
    borderBottom: '1px solid',
    borderColor: theme.colors.blue[7],
    width: 'fit-content',
  },
}));
