import { Notification } from '@mantine/core';
import { IconX } from '@tabler/icons';

const WrongPassword = () => {
  return (
    <Notification
      icon={<IconX size={18} />}
      color="red"
      title="Eroare"
      mt={20}
      disallowClose
    >
      Parola introdusă este greșită.
    </Notification>
  );
};

export default WrongPassword;
