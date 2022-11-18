import { createStyles } from '@mantine/core';

export const useQButtonsStyles = createStyles((theme) => ({
  button: {
    display: 'block',
    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
    minWidth: '250px',
  },
}));
