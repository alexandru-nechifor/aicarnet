import {
  Avatar,
  Group,
  Menu,
  UnstyledButton,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import {
  IconLogout,
  IconHeart,
  IconChevronDown,
  IconSunHigh,
  IconMoon,
  IconUser,
} from '@tabler/icons';
import { useAuth } from '../../context/AuthContext';
import { doc, DocumentData, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useUserNavStyles } from '../../styles/Navigation/useUserNavStyles';
import { NavLink } from 'react-router-dom';

const UserNav = () => {
  const { userSignOut, currentUser } = useAuth();
  const [userData, setUserData] = useState<DocumentData | undefined>();

  useEffect(() => {
    const getUserData = async () => {
      const docRef = doc(db, 'users', `${currentUser?.uid}`);
      const data = await getDoc(docRef);

      setUserData(data.data());
    };

    getUserData();
  }, [currentUser?.uid]);

  const { classes, theme, cx } = useUserNavStyles();
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
              src={userData?.avatarURL}
              alt={userData?.name}
              radius="xl"
              size={26}
            />
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
              {userData?.name}
            </Text>
            <IconChevronDown size={12} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          icon={
            <IconHeart size={14} color={theme.colors.red[6]} stroke={1.5} />
          }
        >
          Statistici
        </Menu.Item>
        {/* <Menu.Item
          icon={
            <IconStar size={14} color={theme.colors.yellow[6]} stroke={1.5} />
          }
        >
          Statistici
        </Menu.Item>
        <Menu.Item
          icon={
            <IconMessage size={14} color={theme.colors.blue[6]} stroke={1.5} />
          }
        >
          Your comments
        </Menu.Item> */}

        <Menu.Label>Setări</Menu.Label>
        <NavLink to="/cont">
          <Menu.Item icon={<IconUser size={14} stroke={1.5} />}>
            Profil
          </Menu.Item>
        </NavLink>
        {/* <Menu.Item icon={<IconSwitchHorizontal size={14} stroke={1.5} />}>
          Change account
        </Menu.Item> */}
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
          onClick={() => userSignOut()}
        >
          Logout
        </Menu.Item>

        {/* <Menu.Divider />

        <Menu.Label>Danger zone</Menu.Label>
        <Menu.Item icon={<IconPlayerPause size={14} stroke={1.5} />}>
          Pause subscription
        </Menu.Item>
        <Menu.Item color="red" icon={<IconTrash size={14} stroke={1.5} />}>
          Delete account
        </Menu.Item> */}
      </Menu.Dropdown>
    </Menu>
  );
};

export default UserNav;
