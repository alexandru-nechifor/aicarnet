import { useForm } from '@mantine/form';
import {
  TextInput,
  Button,
  Grid,
  Title,
  PasswordInput,
  Text,
  Anchor,
  Box,
  useMantineColorScheme,
  Image,
  Loader,
  Checkbox,
} from '@mantine/core';
import CustomContainer from '../CustomComponents/Container';
import { NavLink } from 'react-router-dom';
import { useAuthStyles } from '../../styles/User/useAuthStyles';
import React, { useState } from 'react';
import Logo from '../../assets/logo_white.png';
import LogoWhite from '../../assets/logo.png';
import LoginImage from '../../assets/Account/loginImage.svg';
import GoogleBtn from './GoogleBtn';
import { useAuthContext } from '../../context/AuthContext';
import { setToken } from '../../utils/helpers';
import { registerWithEmail } from '../../service/authService';

const Signup = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [checkError, setCheckError] = useState(false);
  const { setUser } = useAuthContext();
  const [loading, setIsLoading] = useState(false);
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const user = useForm({
    initialValues: { name: '', email: '', password: '', confirmPassword: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 5 ? 'Numele trebuie să aibă minim 5 caractere' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'E-mail invalid'),
      password: (value) => (value.length < 4 ? 'Parolă invalidă' : null),
      confirmPassword: (value, values) =>
        value !== values.password || value.length === 0
          ? 'Parolele nu se potrivesc'
          : null,
    },
  });

  const name: string = user.getInputProps('name').value;
  const email: string = user.getInputProps('email').value;
  const password: string = user.getInputProps('password').value;

  const { classes } = useAuthStyles();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isChecked) {
      setCheckError(false);
      if (user.isValid()) {
        setIsLoading(true);
        registerWithEmail(name, email, password)
          .then((response) => {
            setToken(response.jwt);
            setUser(response.user);
          })
          .catch((error) => {
            console.log(error);
            console.log(error.response.data.error.message);
          })
          .finally(() => setIsLoading(false));
      } else {
        user.validate();
      }
    } else {
      setCheckError(true);
      user.validate();
    }
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <CustomContainer>
      <section className={classes.rSection}>
        <Grid align="center" sx={{ height: '100%' }}>
          <Box className={classes.logo} sx={{ left: 'auto', right: '10%' }}>
            <NavLink to="/">
              <Image
                height={30}
                src={dark ? Logo : LogoWhite}
                alt="aiCarnet Logo"
              />
            </NavLink>
          </Box>

          <Grid.Col
            lg={5}
            sm={12}
            order={1}
            className={classes.gradientBox}
            sx={{ left: 0, right: 'auto' }}
          >
            <Image src={LoginImage} className={classes.image} />
          </Grid.Col>
          <Grid.Col
            lg={6}
            sm={12}
            order={2}
            sx={{ marginLeft: 'auto !important' }}
          >
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
                Bine ai venit. 👋
              </Title>
              <Text
                sx={{
                  marginBottom: '1rem',
                }}
                align="center"
              >
                Te rugăm să introduci informațiile pentru a realiza un cont.
              </Text>

              <form onSubmit={handleSubmit} className={classes.form}>
                <TextInput
                  label="Nume"
                  placeholder="Introdu numele tău"
                  {...user.getInputProps('name')}
                  withAsterisk
                />
                <TextInput
                  mt="sm"
                  label="Email"
                  placeholder="Introdu adresa de email"
                  {...user.getInputProps('email')}
                  withAsterisk
                  onChange={(event) =>
                    user.setFieldValue('email', event.currentTarget.value)
                  }
                />
                <PasswordInput
                  placeholder="*********"
                  label="Parolă"
                  description="Parola trebuie să conțină cel puțin o literă cu majusculă, un număr și un caracter special"
                  {...user.getInputProps('password')}
                  withAsterisk
                  mt={10}
                  onChange={(event) =>
                    user.setFieldValue('password', event.currentTarget.value)
                  }
                />
                <PasswordInput
                  placeholder="Introdu din nou parola ta"
                  label="Confirmare parolă"
                  {...user.getInputProps('confirmPassword')}
                  withAsterisk
                  mt={10}
                  onChange={(event) =>
                    user.setFieldValue(
                      'confirmPassword',
                      event.currentTarget.value
                    )
                  }
                />
                <Checkbox
                  mt={'1.5rem'}
                  label={
                    <>
                      Sunt de acord cu {''}
                      <Anchor
                        size="sm"
                        href="https://mantine.dev"
                        target="_blank"
                      >
                        termenii și condițiile
                      </Anchor>
                      {''} aiCarnet.
                    </>
                  }
                  onChange={handleCheck}
                  className={checkError ? classes.checkBox : ''}
                />
                <Button
                  type="submit"
                  mt={'1.5rem'}
                  size={'md'}
                  color="blue.6"
                  sx={{ width: '100%' }}
                >
                  <Text mr={10}>Înregistrare</Text>

                  {loading ? <Loader size="sm" color={'white'} /> : null}
                </Button>
              </form>
              <hr className={classes.divider} />
              <GoogleBtn />

              <Text
                align="center"
                className={classes.register}
                sx={{ bottom: '-10%' }}
              >
                Ai deja un cont? {''}
                <NavLink to="/autentificare  " className={classes.loginLink}>
                  Autentifică-te aici.
                </NavLink>
              </Text>
            </Box>
          </Grid.Col>
        </Grid>
      </section>
    </CustomContainer>
  );
};

export default Signup;
