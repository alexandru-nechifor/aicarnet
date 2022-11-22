import { useForm } from '@mantine/form';
import {
  TextInput,
  Button,
  Grid,
  Title,
  PasswordInput,
  Text,
  Box,
  useMantineColorScheme,
  Image,
} from '@mantine/core';

import CustomContainer from '../customComponents/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useAuthStyles } from '../../styles/User/useAuthStyles';
import { useState } from 'react';
import WrongPassword from './Errors/WrongPassword';
import UserNotFound from './Errors/UserNotFound';
import TooManyReq from './Errors/TooManyReq';
import Logo from '../../assets/logo_white.png';
import LogoWhite from '../../assets/logo.png';
import { ReactComponent as LoginImage } from '../../assets/Account/loginImage.svg';
import GoogleBtn from './GoogleBtn';

const Signin = () => {
  const { classes } = useAuthStyles();
  const { login } = useAuth();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const user = useForm({
    initialValues: { email: '', password: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'E-mail invalid'),
      password: (value) =>
        value.length < 10 ? 'You must be at least 18 to register' : null,
    },
  });

  const email = user.getInputProps('email').value;
  const password = user.getInputProps('password').value;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.isValid()) {
      try {
        await login(email, password);
        navigate('/');
      } catch (error: any) {
        setError(error.code);
        console.log(error.code);
      }
    } else {
      user.validate();
    }
  };

  let ErrorComponent;

  switch (error) {
    case 'auth/wrong-password':
      ErrorComponent = <WrongPassword />;
      break;

    case 'auth/user-not-found':
      ErrorComponent = <UserNotFound />;
      break;

    case 'auth/too-many-requests':
      ErrorComponent = <TooManyReq />;
      break;
  }

  return (
    <CustomContainer>
      <section className={classes.rSection}>
        <Grid align="center" sx={{ height: '100%' }}>
          <NavLink to="/" className={classes.logo}>
            <Image
              height={30}
              src={dark ? Logo : LogoWhite}
              alt="aiCarnet Logo"
            />
          </NavLink>

          <Grid.Col lg={6} sm={12}>
            <Box
              sx={(theme) => ({
                position: 'relative',
                [theme.fn.largerThan('md')]: { width: '80%', margin: '0 auto' },
              })}
            >
              <Title
                order={1}
                sx={(theme) => ({
                  color: theme.colors.heading,
                  marginBottom: '1rem',
                  [theme.fn.smallerThan('md')]: {
                    fontSize: 30,
                    marginTop: '2rem',
                  },
                })}
                align="center"
              >
                Bine ai revenit. 👋
              </Title>
              <Text
                sx={{
                  marginBottom: '1rem',
                }}
                align="center"
              >
                Te rugăm să introduci informațiile pe care le-ai folosit atunci
                când te-ai înregistrat
              </Text>

              <form onSubmit={handleSubmit} className={classes.form}>
                <TextInput
                  mt="sm"
                  label="Email"
                  placeholder="Introdu email-ul tău"
                  {...user.getInputProps('email')}
                  withAsterisk
                  sx={{ borderRadius: 8 }}
                />
                <PasswordInput
                  placeholder="************"
                  label="Parolă"
                  {...user.getInputProps('password')}
                  withAsterisk
                  mt={10}
                  sx={{ borderRadius: 8 }}
                />
                <Button
                  type="submit"
                  mt={'2rem'}
                  size={'md'}
                  color="blue.6"
                  sx={{ width: '100%' }}
                >
                  Autentificare
                </Button>

                {ErrorComponent}
              </form>
              <hr className={classes.divider} />
              <GoogleBtn />

              <Text align="center" className={classes.register}>
                Nu ai cont? {''}
                <NavLink to="/inregistrare  " className={classes.loginLink}>
                  Înregistrează-te aici.
                </NavLink>
              </Text>
            </Box>
          </Grid.Col>

          <Grid.Col lg={5} sm={12} className={classes.gradientBox}>
            <LoginImage className={classes.image} />
          </Grid.Col>
        </Grid>
      </section>
    </CustomContainer>
  );
};

export default Signin;
