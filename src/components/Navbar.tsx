import {
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
import LogoWhite from '../assets/logo.png';
import { MenuItems } from '../constants/navigation';
import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { HEADER_HEIGHT, useNavStyles } from '../styles/navStyles';

const Navbar = () => {
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
          <ActionIcon
            variant="outline"
            color={dark ? 'white' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
          <NavLink to="/">
            {/* TODO: if user is not logged in show this / else show profile button */}
            <Button radius="sm" size="md">
              Înregistrare
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
