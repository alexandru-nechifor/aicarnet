import {
  Modal,
  useMantineTheme,
  Group,
  Text,
  Notification,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../context/AuthContext';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons';

import { Dropzone } from '@mantine/dropzone';

//eslint-disable-next-line
import { FileError } from 'react-dropzone';

const EditProfileImage = ({
  editAvatar,
  setEditAvatar,
}: {
  editAvatar: boolean;
  setEditAvatar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const theme = useMantineTheme();
  const { user, uploadAvatar } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<FileError[] | undefined | null>();

  useEffect(() => {
    setEditAvatar(false);
    setIsLoading(false);
  }, [user?.profilePicture]);

  useEffect(() => {
    if (editAvatar) setError(null);
  }, [editAvatar]);

  const displayError = (error: string) => {
    const FILE_TOO_LARGE = 'file-too-large';
    const FILE_INVALID_TYPE = 'file-invalid-type';
    let messageToDisplay;
    if (error === FILE_TOO_LARGE) {
      messageToDisplay =
        'Dimensiunea fișierului selectat depășește 2MB. Te rugăm să încarci altă imagine.';
    } else if (FILE_INVALID_TYPE) {
      messageToDisplay =
        'Formatul fișierului selectat este invalid. Te rugăm să încarci o imagine de tip PNG, JPG sau JPEG.';
    }

    return (
      <Notification
        disallowClose
        mt={20}
        icon={<IconX size={18} />}
        title="Eroare"
        color="red"
      >
        {messageToDisplay}
      </Notification>
    );
  };

  return (
    <Modal
      opened={editAvatar}
      onClose={() => setEditAvatar(false)}
      title="Schimbă imaginea de profil"
    >
      <Dropzone
        loading={isLoading}
        onDrop={async (files) => {
          setIsLoading(true);
          uploadAvatar(files[0]);
        }}
        onReject={(files) => setError(files[0].errors)}
        maxSize={2 * 1024 ** 2}
        maxFiles={1}
        accept={['image/png', 'image/jpeg', 'image/jpg']}
      >
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: 220, pointerEvents: 'none' }}
        >
          <Dropzone.Accept>
            <IconUpload
              size={50}
              stroke={1.5}
              color={
                theme.colors[theme.primaryColor][
                  theme.colorScheme === 'dark' ? 4 : 6
                ]
              }
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size={50}
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size={50} stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Trage imaginea aici ori apasă pentru a selecta
            </Text>
            <Text size="sm" color="dimmed" inline mt={10}>
              Te rugăm ca imaginea să nu depășească limita de 2MB iar formatul
              să fie PNG, JPG sau JPEG.
            </Text>
          </div>
        </Group>
      </Dropzone>
      {error ? displayError(error[0].code) : null}
    </Modal>
  );
};

export default EditProfileImage;
