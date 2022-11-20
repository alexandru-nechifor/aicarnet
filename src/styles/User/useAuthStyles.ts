import { createStyles } from '@mantine/core';

export const useAuthStyles = createStyles((theme) => ({
  rSection: {
    [theme.fn.largerThan('md')]: { height: '100vh' },
  },
  form: {
    margin: '0 auto',
  },

  loginLink: {
    color: theme.colors.main,
    transition: 'all 0.3s',

    '&:hover': {
      color: theme.colors.blue[8],
    },
  },

  image: {
    display: 'block',
    width: '100%',
    height: '50%',
    margin: 'auto',
  },

  checkBox: {
    borderBottom: '1px solid red',
    paddingBottom: 5,
  },

  register: {
    [theme.fn.smallerThan('md')]: {
      position: 'inherit',
      marginTop: '2rem',
    },
    position: 'absolute',
    bottom: '-30%',
    left: '50%',
    width: '100%',
    transform: 'TranslateX(-50%)',
  },

  gradientBox: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
    position: 'fixed',
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.fn.linearGradient(
      45,
      theme.colors.indigo[3],
      theme.colors.blue[8]
    ),
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  logo: {
    [theme.fn.smallerThan('md')]: {
      position: 'inherit',
      marginTop: '1rem',
      paddingLeft: 8,
    },
    position: 'absolute',
    top: '3%',
    left: '10%',
  },
  divider: {
    marginTop: '2rem',

    border: 'none',
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
    }`,
    position: 'relative',

    '&:after': {
      content: "'SAU'",
      color: theme.colors.gray[6],

      position: 'absolute',

      top: '-10px',
      left: '50%',
      transform: 'TranslateX(-50%)',
      padding: '0 16px',
      background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'white',
    },
  },
}));
