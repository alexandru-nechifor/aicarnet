import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';

import { User } from 'firebase/auth';

export const getQuizProgress = async (currentUser: User | undefined | null) => {
  const docRef = doc(db, 'users', `${currentUser?.uid}`);
  const data = await getDoc(docRef);

  return data.data();
};
