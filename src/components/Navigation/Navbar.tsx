import {
  Header,
  Container,
  Group,
  Button,
  Burger,
  Image,
  Drawer,
  Stack,
  ActionIcon,
  useMantineColorScheme,
} from '@mantine/core';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo_white.png';
import LogoWhite from '../../assets/logo.png';
import { MenuItems } from '../../constants/navigation';

import { IconSun, IconMoonStars } from '@tabler/icons';
import {
  HEADER_HEIGHT,
  useNavStyles,
} from '../../styles/Navigation/useNavStyles';
import { useAuthContext } from '../../context/AuthContext';

import UserNav from './UserNav';

const Navbar = () => {
  const { user } = useAuthContext();

  const { classes } = useNavStyles();
  const [navOpened, setNavOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
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
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
      <Container className={classes.inner} fluid>
        <NavLink to="/">
          <Image
            height={30}
            src={dark ? Logo : LogoWhite}
            alt="aiCarnet Logo"
          />
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
          {!user ? (
            <ActionIcon
              variant="outline"
              color={dark ? 'white' : 'blue'}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
            </ActionIcon>
          ) : (
            <></>
          )}

          {user ? (
            <UserNav />
          ) : (
            <NavLink to="/autentificare">
              {/* TODO: if user is not logged in show this / else show profile button */}
              <Button radius="sm" size="md">
                Autentificare
              </Button>
            </NavLink>
          )}

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
