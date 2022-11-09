import { useAuth } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  setProgressCurrentQuestion,
  setProgressNegativeScore,
  setProgressScore,
} from '../store/quizDataSlice';
import { User } from 'firebase/auth';

export const getQuizProgress = async (currentUser: User | undefined | null) => {
  const docRef = doc(db, 'users', `${currentUser?.uid}`);
  const data = await getDoc(docRef);

  return data.data();

  //   if (quizID?.includes('mediu-de-invatare')) {
  //     getUserProgress().then((result) => {
  //       if (result) {
  //         const quizCat = quizID.replace('-mediu-de-invatare', '');
  //         dispatch(setProgressCurrentQuestion(result[quizCat].currentQuestion));
  //         dispatch(setProgressScore(result[quizCat].score));
  //         dispatch(setProgressNegativeScore(result[quizCat].negativeScore));
  //         console.log('am intrat');
  //       }
  //     });
  //   }
};

// export const useQuizProgress = async (quizID: string | undefined) => {
//     const { currentUser } = useAuth();
//     const dispatch = useDispatch();

//     useEffect(() => {
//       const getUserProgress = async () => {
//         const docRef = doc(db, 'users', `${currentUser?.uid}`);
//         const data = await getDoc(docRef);
//         return data.data();
//       };
//       if (quizID?.includes('mediu-de-invatare')) {
//         getUserProgress().then((result) => {
//           if (result) {
//             const quizCat = quizID.replace('-mediu-de-invatare', '');
//             dispatch(setProgressCurrentQuestion(result[quizCat].currentQuestion));
//             dispatch(setProgressScore(result[quizCat].score));
//             dispatch(setProgressNegativeScore(result[quizCat].negativeScore));
//             console.log('am intrat');
//           }
//         });
//       }
//     }, []);
//   };
