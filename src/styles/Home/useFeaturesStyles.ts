import { createStyles } from '@mantine/core';
import questionMark from '../../assets/Home/questionMark.png';

export const useFeaturesStyles = createStyles((theme) => ({
  fSection: {
    minHeight: '50vh',
    padding: '4rem 0',
    position: 'relative',

    '&:after': {
      content: `url(${questionMark})`,
      zIndex: 0,
      position: 'absolute',

      right: '-10%',
      top: '50%',
      transform: 'translateY(-50%)',

      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  },

  box: {
    zIndex: 1,
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: 100,
    minWidth: 250,
    padding: '1rem',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
    border:
      theme.colorScheme === 'dark' ? '' : `1px solid ${theme.colors.gray[2]}`,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'white',
  },

  icon: {
    fontSize: 28,
    color: theme.colors.main,
    marginTop: 3,
  },
}));
