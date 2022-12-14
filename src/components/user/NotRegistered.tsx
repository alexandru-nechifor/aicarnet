import { Title, Text, Stack, Button, Box, Group, Image } from '@mantine/core';
import { Link } from 'react-router-dom';
import UserProfile from '../../assets/Account/userProfile.svg';
import CustomContainer from '../CustomComponents/Container';
import Gradient from '../CustomComponents/Gradient';
const NotRegistered = () => {
  return (
    <Gradient>
      <CustomContainer>
        <Box
          sx={(theme) => ({
            [theme.fn.largerThan('md')]: {
              minHeight: '80vh',
            },

            [theme.fn.smallerThan('md')]: {
              marginTop: '2rem',
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          <Stack align={'center'}>
            <Box mb={10}>
              <Title
                sx={(theme) => ({
                  color: theme.colors.heading,
                })}
                align="center"
              >
                Ne pare rău! Accesul este restricționat. ⛔
              </Title>
              <Text align="center" size="lg" mt={15}>
                Te rugăm să îți realizezi un cont sau să te autentifici pentru a
                putea benefecia de toate caracteristicile aiCarnet.
              </Text>
            </Box>

            <Image src={UserProfile} width={'80%'} />
            <Group mt={30}>
              <Link to="../../inregistrare">
                <Button size="lg" variant="filled">
                  Înregistrare
                </Button>
              </Link>
              <Link to="../../autentificare">
                <Button size="lg" variant="outline">
                  Autentificare
                </Button>
              </Link>
            </Group>
          </Stack>
        </Box>
      </CustomContainer>
    </Gradient>
  );
};

export default NotRegistered;
