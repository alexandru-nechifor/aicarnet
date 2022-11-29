import axios from 'axios';

const axiosInstace = axios.create({
  baseURL: `http://localhost:1337/api/`,

  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerWithEmail = async (
  username: string,
  email: string,
  password: string
) => {
  const data = await axiosInstace.post('auth/local/register', {
    username,
    email,
    password,
  });

  return data.data;
};

export const loginWithEmail = async (email: string, password: string) => {
  const data = await axiosInstace.post(
    `auth/local`,
    {
      identifier: email,
      password: password,
    },
    { withCredentials: true }
  );

  return data;
};
