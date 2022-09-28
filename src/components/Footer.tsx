import { createStyles, Group, ActionIcon, Image, Text } from '@mantine/core';
import { IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';

import Logo from '../assets/logo_white.png';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 100,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  groupLinks: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
  links: {
    color: theme.colors.gray[1],
    '&:hover': {
      color: theme.colors.blue[6],
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Image src={Logo} width={100} />
        <Text>All rights reserved</Text>
        <Group spacing="xs" position="right" noWrap>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
};

export default Footer;
