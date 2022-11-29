import {
  Avatar,
  Text,
  Group,
  Menu,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { useState } from 'react';
import {
  IconLogout,
  IconChevronDown,
  IconSunHigh,
  IconMoon,
  IconUser,
} from '@tabler/icons';
import { useUserNavStyles } from '../../styles/Navigation/useUserNavStyles';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

const UserNav = () => {
  const { user, logout } = useAuthContext();

  const { classes, cx } = useUserNavStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Menu
      width={260}
      position="bottom-end"
      transition="pop-top-right"
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.user, {
            [classes.userActive]: userMenuOpened,
          })}
        >
          <Group spacing={7}>
            <Avatar
              src={user?.profilePicture ? user?.profilePicture.url : ''}
              alt={user?.username}
              radius="xl"
              size={26}
            />
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
              {user?.username}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>Setări</Menu.Label>
        <NavLink to="/cont">
          <Menu.Item icon={<IconUser size={14} stroke={1.5} />}>
            Profil
          </Menu.Item>
        </NavLink>

        <Menu.Item
          icon={
            dark ? (
              <IconSunHigh size={14} stroke={1.5} />
            ) : (
              <IconMoon size={14} stroke={1.5} />
            )
          }
          onClick={() => toggleColorScheme()}
        >
          {dark ? 'Schimbă la temă luminoasă' : 'Schimbă la temă întunecată'}
        </Menu.Item>
        <Menu.Item
          icon={<IconLogout size={14} stroke={1.5} />}
          onClick={logout}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserNav;
