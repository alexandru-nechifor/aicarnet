import { Notification } from '@mantine/core';
import { IconQuestionMark } from '@tabler/icons';

const UserNotFound = () => {
  return (
    <Notification
      icon={<IconQuestionMark size={18} />}
      color="blue"
      title="Cont inexistent"
      mt={20}
      disallowClose
    >
      Acest cont nu există în baza noastră de date.
    </Notification>
  );
};

export default UserNotFound;
