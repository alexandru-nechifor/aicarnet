import { Notification } from '@mantine/core';
import { IconGitPullRequest } from '@tabler/icons';

const TooManyReq = () => {
  return (
    <Notification
      icon={<IconGitPullRequest size={18} />}
      color="blue"
      title="Prea multe încercări"
      mt={20}
      disallowClose
    >
      Ne pare rău, ați realizat prea multe încercări de autentificare.
    </Notification>
  );
};

export default TooManyReq;
