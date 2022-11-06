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
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../utils/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useAuthStyles } from '../../styles/User/useAuthStyles';

const Signup = () => {
  const { signUp, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const user = useForm({
    initialValues: { name: '', email: '', password: '', confirmPassword: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 5 ? 'Numele trebuie să aibă minim 5 caractere' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'E-mail invalid'),
      password: (value) => (value.length < 10 ? 'Parolă invalidă' : null),
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

    if (user.isValid()) {
      try {
        await signUp(email, password).then((result) => {
          setDoc(doc(db, 'users', result.user.uid), {
            name: name,
            email: email,
            avatarURL: '',
            isAdmin: false,
          });
          // console.log(result);
          // updateUserProfile(result.user, name);
        });
        navigate('/cont');
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
              Realizează un cont gratuit chiar acum.
            </Title>
            <Text>
              Ai deja un cont?{' '}
              <NavLink to="/autentificare" className={classes.loginLink}>
                Autentifică-te aici.
              </NavLink>
            </Text>
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextInput
                label="Nume"
                placeholder="Nume"
                {...user.getInputProps('name')}
                withAsterisk
              />
              <TextInput
                mt="sm"
                label="E-mail"
                placeholder="E-mail"
                {...user.getInputProps('email')}
                withAsterisk
                onChange={(event) =>
                  user.setFieldValue('email', event.currentTarget.value)
                }
              />
              <PasswordInput
                placeholder="Parolă"
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
                placeholder="Confirmare parolă"
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

export default Signup;
