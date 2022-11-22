import { Button } from '@mantine/core';
import { FaGoogle } from 'react-icons/fa';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useAuth } from '../../context/AuthContext';

const GoogleBtn = () => {
  const { googleSignIn } = useAuth();

  const handleGoogleSubmit = async (e: any) => {
    e.preventDefault();
    await googleSignIn().then(async (result) => {
      const docRef = doc(db, 'users', result.user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        setDoc(doc(db, 'users', result.user.uid), {
          name: result.user.displayName,
          email: result.user.email,
          avatarURL: '',
        });
      }
    });
  };
  return (
    <Button
      variant="outline"
      sx={{ width: '100%', marginTop: '2rem' }}
      leftIcon={<FaGoogle />}
      size={'md'}
      color="blue.5"
      onClick={handleGoogleSubmit}
    >
      Autentificare cu Google
    </Button>
  );
};

export default GoogleBtn;
