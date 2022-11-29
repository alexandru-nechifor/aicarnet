import { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { APIURL, BEARER } from '../constants/user';
import { getToken } from '../utils/helpers';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/User/IUser';
import axios from 'axios';
import Compressor from 'compressorjs';
import { IReactChildren } from '../types/IReactChildren';

const USER_API_TOKEN = import.meta.env.VITE_USER_API_KEY;

const AuthProvider = ({ children }: IReactChildren) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [isUserLoading, setIsUserLoading] = useState(true);
  const navigate = useNavigate();
  const authToken = getToken();

  const APIAxiosInstace = axios.create({
    baseURL: APIURL,

    headers: {
      'Content-Type': 'application/json',
      Authorization: `${BEARER} ${USER_API_TOKEN}`,
    },
  });

  const fetchLoggedInUser = async (token: string | null) => {
    setIsUserLoading(true);

    APIAxiosInstace.get('/users/me?populate=*', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${BEARER} ${token}`,
      },
    })
      .then((result) => setUserData(result.data))
      .catch((error) => console.error(error))
      .finally(() => setIsUserLoading(false));
  };

  const refetchLoggedInUser = async (token: string | null) => {
    APIAxiosInstace.get('/users/me?populate=*', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${BEARER} ${token}`,
      },
    })
      .then((result) => setUserData(result.data))
      .catch((error) => console.error(error));
  };

  const handleUser = (user: User) => {
    setUserData(user);
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    } else {
      setIsUserLoading(false);
    }
  }, [authToken]);

  const logout = () => {
    localStorage.removeItem('authToken');
    setUserData(null);
    navigate('/');
  };

  const updateUserData = async (
    id: number | undefined,
    quizID: string,
    currentQuestion: number,
    score: number,
    negativeScore: number
  ) => {
    // Update user progress in quiz
    await APIAxiosInstace.put(`/users/${id}`, {
      [`${quizID}`]: {
        progress: {
          currentQuestion,
          score,
          negativeScore,
        },
      },
    });
    refetchLoggedInUser(authToken);
  };

  const uploadAvatar = async (file: File | Blob) => {
    // IF user has already a profile picture delete it then upload the new one
    if (userData?.profilePicture) {
      APIAxiosInstace.delete(`/upload/files/${userData?.profilePicture.id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${BEARER} ${USER_API_TOKEN}`,
        },
      });
    }
    // Compress image
    new Compressor(file, {
      quality: 0.6,
      maxWidth: 400,
      maxHeight: 400,
      resize: 'cover',
      success(compressedResult) {
        const data = new FormData();
        data.append('files', compressedResult);

        // Error, does not work with .post() method
        APIAxiosInstace('/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${BEARER} ${USER_API_TOKEN}`,
          },
          data,
        }).then((result) => {
          const [data] = result.data;
          APIAxiosInstace.put(`users/${userData?.id}?populate=*`, {
            profilePicture: data,
          });
          // Refresh the user state
          refetchLoggedInUser(authToken);
        });
      },
    });
  };

  const updateUsername = async (
    username: string | undefined,
    id: number | undefined
  ) => {
    await APIAxiosInstace.put(`/users/${id}`, {
      username,
    });
    refetchLoggedInUser(authToken);
  };

  const value = {
    user: userData,
    setUser: handleUser,
    updateUserData,
    uploadAvatar,
    updateUsername,
    isUserLoading,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isUserLoading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
