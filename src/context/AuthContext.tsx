import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
  UserCredential,
} from 'firebase/auth';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { auth } from '../utils/firebase';

export function useAuth() {
  return useContext(AuthContext);
}

interface ContextState {
  currentUser: User | null | undefined;
  userSignOut: () => Promise<void>;
  login: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  updateUserProfile: (
    user: User,
    name: string,
    photo?: string
  ) => Promise<void>;
}

const AuthContext = createContext({} as ContextState);

interface IChildren {
  children: ReactNode | null;
}

export function AuthProvider({ children }: IChildren) {
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // const verifyEmail = async () => {
  //   return await currentUser?.sendEmailVerification();
  // };

  const updateUserProfile = (user: User, name: string, photo?: string) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };

  // function getUser() {
  //   return auth.currentUser;
  // }

  // function isAdmin() {
  //   return auth.currentUser.getIdTokenResult().then((idTokenResult) => {
  //     if (!!idTokenResult.claims.admin) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   });
  // }

  // function isEditor() {}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userSignOut,
    login,
    signUp,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
