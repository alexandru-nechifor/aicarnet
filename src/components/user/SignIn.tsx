import { useForm } from '@mantine/form';
import {
  TextInput,
  Button,
  Grid,
  Title,
  PasswordInput,
  Text,
} from '@mantine/core';
import CustomContainer from '../customComponents/Container';
import registerImg from '../../assets/Account/registerImg.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useAuthStyles } from '../../styles/User/useAuthStyles';

const Signin = () => {
  const { classes } = useAuthStyles();
  const { login } = useAuth();
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
      } catch (e) {
        // setError(e.message);
        // console.log(e.message);
      }
    } else {
      user.validate();
    }
  };

  return (
    <CustomContainer>
      <section className={classes.rSection}>
        <Grid align="center" sx={{ height: '100%' }}>
          <Grid.Col lg={6}>
            <Title
              order={1}
              sx={(theme) => ({
                color: theme.colors.heading,
                marginBottom: '2rem',
              })}
            >
              Lorem ipsum dolores sit amet
            </Title>
            <Text>
              Nu ai cont? {''}
              <NavLink to="/inregistrare  " className={classes.loginLink}>
                Înregistrează-te aici.
              </NavLink>
            </Text>
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextInput
                mt="sm"
                label="Email"
                placeholder="Email"
                {...user.getInputProps('email')}
                withAsterisk
              />
              <PasswordInput
                placeholder="Parolă"
                label="Parolă"
                description="Parola trebuie să conțină cel puțin o literă cu majusculă, un număr și un caracter special"
                {...user.getInputProps('password')}
                withAsterisk
                mt={10}
              />
              <Button type="submit" mt="sm" size={'md'}>
                Trimite
              </Button>
            </form>
          </Grid.Col>
          <Grid.Col lg={6}>
            <img
              src={registerImg}
              alt="Realizare cont aiCarnet"
              className={classes.image}
            />
          </Grid.Col>
        </Grid>
      </section>
    </CustomContainer>
  );
};

export default Signin;
