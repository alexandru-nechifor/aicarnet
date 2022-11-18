import { createStyles } from '@mantine/core';

export const useQImageStyles = createStyles((theme) => ({
  image: {
    margin: 'auto',
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },

    [theme.fn.smallerThan('lg')]: {
      width: '60%',
    },

    [theme.fn.smallerThan('md')]: {
      width: '60%',
    },

    [theme.fn.largerThan('md')]: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
    width: '100%',
    marginTop: '2.5rem',
  },
}));
