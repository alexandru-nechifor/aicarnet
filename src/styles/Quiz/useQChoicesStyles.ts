import { createStyles } from '@mantine/core';

export const useQChoicesStyles = createStyles((theme) => ({
  answer: {
    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },

    width: '70%',
    padding: '1rem 2rem',
    margin: '1rem 0',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[6]
        : theme.colors.gray[2],
    userSelect: 'none',

    '&:hover': {
      cursor: 'pointer',
    },
  },

  answerSelected: {
    backgroundColor: theme.colors.blue[6],
    color: theme.colors.gray[1],
  },
}));
