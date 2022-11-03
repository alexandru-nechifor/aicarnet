import { createStyles } from '@mantine/core';
import pointerArrow from '../../assets/Home/pointer.png';

export const useHeroStyles = createStyles((theme) => ({}));
export const useHelpStyles = createStyles((theme) => ({
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

    '&:hover': {
      color: theme.colors.blue[8],
    },
  },
}));
