import CustomContainer from '../../customComponents/Container';
// Redux imports
import { useScoreSelector } from '../../../customHooks/quizHooks/useScoreSelector';
import { useNegativeScoreSelector } from '../../../customHooks/quizHooks/useNegativeScoreSelector';
import {
  resetQuiz,
  setFbLoading,
  setQuizData,
  setQuizID,
} from '../../../store/quizDataSlice';
import { useHasPassed } from '../../../customHooks/quizHooks/useQuizStatusSelectors';
import { useDispatch } from 'react-redux';

// Quiz settings
import { shuffleArray } from '../../../utils/shuffleArray';
import Settings from '../../../constants/Quiz/QuizSettings';
import { useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../utils/firebase';
import { useAuth } from '../../../context/AuthContext';

import ReviewBody from './ReviewBody';
import { useIsTimeFinished } from '../../../customHooks/quizHooks/useIsTimeFinishedSelector';
import Passed from './Passed';
import Failed from './Failed';
import TimeOver from './TimeOver';

const Review = ({ data, quizID }: any) => {
  //Redux
  const passed = useHasPassed();
  const score = useScoreSelector();
  const isTimeFinished = useIsTimeFinished();
  console.log(!passed && isTimeFinished);
  const negativeScore = useNegativeScoreSelector();
  const dispatch = useDispatch();

  //Firebase
  const { currentUser } = useAuth();

  const handleReset = () => {
    dispatch(resetQuiz());
    dispatch(setQuizID(quizID));
    dispatch(setFbLoading(false));

    if (!quizID.includes('mediu-de-invatare')) {
      const totalCount = Settings[quizID as keyof typeof Settings].total;
      const shuffledData = shuffleArray(data);
      const filteredData = shuffledData.slice(0, totalCount);

      dispatch(setQuizData(filteredData));
    }
  };

  useEffect(() => {
    if (quizID.includes('mediu-de-invatare')) {
      const userProgressDb = doc(db, 'users', `${currentUser?.uid}`);
      const resetProgress = async () => {
        await updateDoc(userProgressDb, {
          [`${Settings[quizID as keyof typeof Settings].questionData}`]: {
            currentQuestion: 0,
            score: 0,
            negativeScore: 0,
          },
        });
      };

      resetProgress();
    }
  }, [quizID, currentUser?.uid]);

  return (
    <>
      <CustomContainer>
        {isTimeFinished ? (
          <TimeOver handleReset={handleReset} />
        ) : passed ? (
          <Passed score={score} handleReset={handleReset} />
        ) : (
          <Failed negativeScore={negativeScore} handleReset={handleReset} />
        )}

        <ReviewBody handleReset={handleReset} />
      </CustomContainer>
    </>
  );
};

export default Review;
