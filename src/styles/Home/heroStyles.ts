import { createStyles } from '@mantine/core';
import pointerArrow from '../../assets/Home/pointer.png';
import questionMark from '../../assets/Home/questionMark.png';

export const useHeroStyles = createStyles((theme) => ({}));

export const useBenefitsStyles = createStyles((theme) => ({
  helpSection: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : '#FFF',
    minHeight: '50vh',
    margin: '0 calc(-50vw + 50%)',
    padding: '4rem 0',
  },

  header: {
    color: theme.colors.heading,
    position: 'relative',
    width: 'fit-content',

    '&:after': {
      content: `url(${pointerArrow})`,
      position: 'absolute',
      right: -100,
      top: -20,
    },
  },

  boxIcon: {
    color: theme.colors.main,
    fontSize: 34,
  },

  link: {
    color: theme.colors.main,
    display: 'flex',
    alignItems: 'center',
    transition: 'all 0.3s',
    width: 'fit-content',
    gap: 5,
    position: 'relative',
    overflow: 'hidden',

    '&:before': {
      position: 'absolute',
      content: '""',
      height: 1,
      left: 0,
      right: 0,
      bottom: 0,
      background: theme.colors.main,
      transform: 'translateX(-100%)',
      transition: 'all 0.3s',
    },

    '&:hover': {
      color: theme.colors.blue[7],

      '&:before': {
        transform: 'translateX(0%)',
        background: theme.colors.blue[7],
      },
    },
  },
}));

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
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'white',
  },

  icon: {
    fontSize: 28,
    color: theme.colors.main,
    marginTop: 3,
  },
}));
