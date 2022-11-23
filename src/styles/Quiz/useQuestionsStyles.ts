import { createStyles } from '@mantine/core';

export const useQuestionsStyles = createStyles((theme) => ({
  dataBox: {
    [theme.fn.smallerThan('md')]: { width: '100%' },
    width: '80%',
    margin: 'auto',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
    color: theme.colors.gray[1],
    padding: '2rem',
    borderRadius: '10px',
  },

  paginateContainer: {
    [theme.fn.smallerThan('md')]: { width: '100%' },
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '50%',
    margin: '2rem auto',
  },

  button: {
    backgroundColor: theme.colors.blue[7],
    [theme.fn.smallerThan('sm')]: { padding: '0.4rem 0.8rem' },
    padding: '0.8rem 1.5rem',
    borderRadius: 8,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.colors.blue[9],
      cursor: 'pointer',
    },
  },

  buttonDisabled: {
    '&:hover': {
      cursor: 'not-allowed',
      backgroundColor: theme.colors.blue[7],
    },
    opacity: '60%',
  },

  activeText: {
    color: theme.colors.blue[7],
  },

  page: {
    cursor: 'pointer',
  },
}));
