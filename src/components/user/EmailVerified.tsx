import { IconX } from '@tabler/icons';
import { Notification } from '@mantine/core';
import { useAuthContext } from '../../context/AuthContext';
const EmailVerified = () => {
  const { user } = useAuthContext();
  if (user && !user?.confirmed) {
    return (
      <Notification
        icon={<IconX size={18} />}
        color="red"
        title="Te anunțăm că"
        disallowClose
        sx={(theme) => ({
          [theme.fn.largerThan('md')]: {
            position: 'fixed',
            width: '400px',
            right: 0,
            bottom: '1%',
            zIndex: 100,
          },
        })}
      >
        E-mailul tău nu este verificat. Te rugăm să faci această cât mai curând
        posibil. operațiune.
      </Notification>
    );
  } else {
    return null;
  }
};

export default EmailVerified;
