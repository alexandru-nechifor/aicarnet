import CustomContainer from '../../CustomComponents/Container';
// Redux imports
import { useScoreSelector } from '../../../customHooks/quizHooks/useScoreSelector';
import { useNegativeScoreSelector } from '../../../customHooks/quizHooks/useNegativeScoreSelector';
import {
  resetQuiz,
  setProgressLoading,
  setQuizData,
  setQuizID,
} from '../../../store/quizDataSlice';
import { useHasPassed } from '../../../customHooks/quizHooks/useQuizStatusSelectors';
import { useDispatch } from 'react-redux';

// Quiz settings
import { shuffleArray } from '../../../utils/shuffleArray';
import Settings from '../../../constants/Quiz/QuizSettings';

import ReviewBody from './ReviewBody';

import Passed from './Passed';
import Failed from './Failed';
import TimeOver from './TimeOver';
import { useIsTimeFinished } from '../../../customHooks/quizHooks/useIsTimeFinishedSelector';
import IReview from '../../../types/Quiz/IReview';

const Review = ({ data, quizID }: IReview) => {
  //Redux
  const passed = useHasPassed();
  const score = useScoreSelector();
  const isTimeFinished = useIsTimeFinished();
  const negativeScore = useNegativeScoreSelector();
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(resetQuiz());
    dispatch(setQuizID(quizID));
    dispatch(setProgressLoading(false));

    if (!quizID?.includes('mediu-de-invatare')) {
      const totalCount = Settings[quizID as keyof typeof Settings].total;
      const shuffledData = shuffleArray(data);
      const filteredData = shuffledData?.slice(0, totalCount);

      dispatch(setQuizData(filteredData));
    }
  };

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
