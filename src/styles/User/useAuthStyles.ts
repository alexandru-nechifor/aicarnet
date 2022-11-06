import { createStyles } from '@mantine/core';

export const useAuthStyles = createStyles((theme) => ({
  rSection: {
    height: '90vh',
  },
  form: {
    [theme.fn.largerThan('md')]: {
      width: '60%',
    },
  },

  loginLink: {
    color: theme.colors.main,
    transition: 'all 0.3s',

    '&:hover': {
      color: theme.colors.blue[8],
    },
  },

  image: {
    [theme.fn.largerThan('md')]: {
      display: 'block',
      width: '70%',
      marginLeft: 'auto',
    },
  },
}));
