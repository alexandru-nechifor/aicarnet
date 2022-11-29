import { createStyles } from '@mantine/core';

export const useProfileStyles = createStyles((theme) => ({
  profileBox: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'white',
    padding: '2rem',
    borderRadius: 8,
  },

  avatar: {
    display: 'block',
    margin: 'auto',
  },

  editAvatar: {
    color: 'white',
    background: theme.colors.main,
    padding: '0.5rem',
    borderRadius: '50%',
    position: 'absolute',
    bottom: 0,
    right: 0,

    '&:hover': {
      cursor: 'pointer',
      background: theme.colors.blue[7],
    },
  },

  profileName: {
    color: theme.colors.heading,
    textAlign: 'center',
    margin: '0.5rem 0',
    position: 'relative',
  },

  editUsername: {
    '&:hover': {
      cursor: 'pointer',
      color: theme.colors.main,
    },
  },
}));
