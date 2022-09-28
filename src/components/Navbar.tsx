import {
  createStyles,
  Header,
  Container,
  Group,
  Button,
  Burger,
  Image,
  Drawer,
  Stack,
} from '@mantine/core';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo_white.png';
import { MenuItems } from '../constants';

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 4rem',
    [theme.fn.smallerThan('sm')]: {
      padding: '0 0.8rem',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

const Navbar = () => {
  const { classes } = useStyles();
  const [navOpened, setNavOpened] = useState(false);
  const items = MenuItems.map((link) => {
    return (
      <NavLink
        key={link.id}
        to={link.url}
        className={classes.link}
        onClick={() => setNavOpened(false)}
      >
        {link.title}
      </NavLink>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={60}>
      <Container className={classes.inner} fluid>
        <NavLink to="/">
          <Image height={30} src={Logo} alt="aiCarnet Logo" />
        </NavLink>

        <Drawer
          opened={navOpened}
          onClose={() => setNavOpened(false)}
          padding="xl"
          size="xl"
          position="left"
        >
          <Stack spacing="lg">{items}</Stack>
        </Drawer>
        <Group spacing={10} className={classes.links}>
          {items}
        </Group>
        <Group>
          <NavLink to="/chestionare-auto">
            <Button radius="sm" size="md">
              Chestionare auto
            </Button>
          </NavLink>
          <Burger
            opened={navOpened}
            onClick={() => setNavOpened(true)}
            className={classes.burger}
            size="md"
          />
        </Group>
      </Container>
    </Header>
  );
};

export default Navbar;
