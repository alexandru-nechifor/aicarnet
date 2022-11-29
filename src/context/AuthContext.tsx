import { createContext, useContext } from 'react';
import { User } from '../types/User/IUser';

interface Contextstate {
  user: User | undefined | null;
  isUserLoading: boolean;
  setUser: (user: User) => void;
  logout: () => void;
  updateUserData: (
    id: number | undefined,
    quizID: string,
    currentQuestion: number,
    score: number,
    negativeScore: number
  ) => void;
  updateUsername: (
    username: string | undefined,
    id: number | undefined
  ) => void;
  uploadAvatar: (file: File | Blob) => void;
}

export const AuthContext = createContext({} as Contextstate);

export const useAuthContext = () => useContext(AuthContext);
