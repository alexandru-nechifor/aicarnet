import {
  Box,
  Group,
  Image,
  Paper,
  Stack,
  Title,
  Text,
  Grid,
  Button,
  TextInput,
  ActionIcon,
} from '@mantine/core';
import {
  MdOutlineModeEditOutline,
  MdOutlineEmail,
  MdOutlineCalendarToday,
  MdOutlineSend,
} from 'react-icons/md';
import { useEffect, useState } from 'react';
import EditProfileImage from './EditProfileImage';
import { useAuthContext } from '../../../context/AuthContext';
import DefaultUserAvatar from '../../../assets/Account/user.png';
import { useProfileStyles } from '../../../styles/User/useProfileStyles';

const Profile = () => {
  const [editAvatar, setEditAvatar] = useState(false);
  const [editUsername, setEditUsername] = useState(false);
  const { user, updateUsername } = useAuthContext();
  const [editedUsername, setEditedUsername] = useState(`${user?.username}`);
  const { classes } = useProfileStyles();

  useEffect(() => {
    setEditedUsername(`${user?.username}`);
    setEditUsername(false);
  }, [user?.username]);

  return (
    <Stack className={classes.profileBox}>
      <Box sx={{ position: 'relative', width: 'fit-content', margin: 'auto' }}>
        <Image
          src={
            user?.profilePicture ? user?.profilePicture.url : DefaultUserAvatar
          }
          width={130}
          radius={100}
          className={classes.avatar}
        ></Image>

        <MdOutlineModeEditOutline
          className={classes.editAvatar}
          size={40}
          title="Editează imaginea de profil"
          onClick={() => setEditAvatar(true)}
        />

        <EditProfileImage
          editAvatar={editAvatar}
          setEditAvatar={setEditAvatar}
        />
      </Box>

      {!editUsername ? (
        <Group mx={'auto'} sx={{ alignItems: 'center' }}>
          <Title order={3} className={classes.profileName}>
            {user?.username}
          </Title>
          <MdOutlineModeEditOutline
            className={classes.editUsername}
            size={20}
            title="Editează numele"
            onClick={() => setEditUsername(true)}
          />
        </Group>
      ) : (
        <Group mx="auto">
          <TextInput
            placeholder="Your name"
            defaultValue={user?.username}
            onChange={(e) => setEditedUsername(e.target.value)}
          />
          <ActionIcon
            color="blue.5"
            onClick={() => {
              if (user?.username !== editedUsername) {
                updateUsername(editedUsername);
              } else {
                setEditUsername(false);
              }
            }}
          >
            <MdOutlineSend size={18} />
          </ActionIcon>
        </Group>
      )}

      <Grid>
        <Grid.Col>
          <Group mb={5}>
            <MdOutlineEmail size={20} />
            <Text>E-mail</Text>
          </Group>
          <Paper withBorder p="xs">
            {user?.email}
          </Paper>

          <Text
            mt={7}
            underline
            sx={(theme) => ({
              color: theme.colors.main,
              '&:hover': { cursor: 'pointer' },
            })}
          >
            Schimbă adresa de e-mail
          </Text>
        </Grid.Col>

        <Grid.Col>
          <Group mb={5}>
            <MdOutlineCalendarToday size={20} />
            <Text>Abonamentul expiră la data de:</Text>
          </Group>
          <Paper withBorder p="xs">
            aici pui data
          </Paper>
        </Grid.Col>
      </Grid>

      <Group mx={'auto'}>
        <Button>Schimbă parola</Button>
        <Button>Prelungește abonamentul</Button>
      </Group>
    </Stack>
  );
};

export default Profile;
