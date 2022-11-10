import {
  AiFillCloseCircle,
  AiFillCheckCircle,
  AiOutlineRedo,
} from 'react-icons/ai';
import { useState, useEffect } from 'react';
import Settings from '../../constants/Quiz/QuizSettings';
import IQuizButtons from '../../types/IQuizButtons';
import { useTotalCountSelector } from '../../customHooks/useTotalCountSelector';
import { useNegativeScoreSelector } from '../../customHooks/useNegativeScoreSelector';
import { useCurrentQuestionSelector } from '../../customHooks/useCurrentQuestionSelector';
import { useParams } from 'react-router-dom';
import {
  setCurrentQuestion,
  setDeleteAnswers,
  setHasPassed,
  setIsFinished,
  setNegativeScore,
  setQuizData,
  setSavedAnswers,
  setScore,
} from '../../store/quizDataSlice';
import { useDispatch } from 'react-redux';
import { IQuizData } from '../../types/IQuizData';
import { Button, createStyles, Grid } from '@mantine/core';
import { useQuizDataSelector } from '../../customHooks/useQuizDataSelector';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { useAuth } from '../../context/AuthContext';
import { useScoreSelector } from '../../customHooks/useScoreSelector';

const QuizButtons = ({
  shuffle,
  questionScore,
  shuffleArray,
  setQuestionScore,
}: IQuizButtons) => {
  const { quizID } = useParams();
  const { currentUser } = useAuth();
  const [isEnabled, setIsEnabled] = useState(false);
  const quizQuestions = useQuizDataSelector();
  const totalCount = quizQuestions.length;
  const negativeScore = useNegativeScoreSelector();
  const score = useScoreSelector();
  const currentQuestion = useCurrentQuestionSelector();
  const dispatch = useDispatch();
  const userProgressDb = doc(db, 'users', `${currentUser?.uid}`);
  const quizCat = quizID?.replace('-mediu-de-invatare', '');

  const useStyles = createStyles((theme) => ({
    button: {
      display: 'block',
      [theme.fn.smallerThan('md')]: {
        width: '100%',
      },
      minWidth: '250px',
    },
  }));

  const { classes } = useStyles();

  const updateProgress = async (
    currentQuestion: number,
    score: number,
    negativeScore: number
  ) => {
    console.log(currentQuestion, score, negativeScore);
    await updateDoc(userProgressDb, {
      [`${quizCat}`]: {
        currentQuestion,
        score,
        negativeScore,
      },
    });
  };

  // Check if the buttons can be Enabled
  useEffect(() => {
    if (questionScore === 0) {
      setIsEnabled(false);
    } else {
      setIsEnabled(true);
    }
  }, [questionScore]);

  // Check if the user fails the exam
  useEffect(() => {
    if (negativeScore > Settings[quizID as keyof typeof Settings].maxWrong) {
      dispatch(setIsFinished(true));
    }

    if (currentQuestion !== 0 && quizID?.includes('mediu-de-invatare')) {
      updateProgress(currentQuestion, score, negativeScore);
    }

    //eslint-disable-next-line
  }, [currentQuestion]);

  // Delete answers function
  const deleteAnswers = () => {
    setQuestionScore(0);
    dispatch(setDeleteAnswers());
  };

  // Answer later function
  const answerLater = () => {
    let tempArray: Array<IQuizData> = [...quizQuestions];
    tempArray.splice(totalCount, 0, tempArray.splice(currentQuestion, 1)[0]);
    shuffleArray(shuffle);
    deleteAnswers();
    dispatch(setQuizData([...tempArray]));
  };

  // Submit answer function
  const submitAnswer = () => {
    shuffleArray(shuffle);
    let questionCorrect = quizQuestions[currentQuestion].correct;
    if (questionCorrect === questionScore) {
      dispatch(setScore());
    } else {
      dispatch(setNegativeScore());
    }

    if (currentQuestion < quizQuestions.length - 1) {
      dispatch(setCurrentQuestion());
    } else if (
      negativeScore < Settings[quizID as keyof typeof Settings].maxWrong
    ) {
      dispatch(setHasPassed(true));
      dispatch(setIsFinished(true));
      if (quizID?.includes('mediu-de-invatare')) {
        updateProgress(0, 0, 0);
      }
    }

    deleteAnswers();

    if (!quizID?.includes('mediu-de-invatare')) {
      dispatch(setSavedAnswers(questionScore));
    } else {
    }
  };

  return (
    <Grid mt={40} align="center" justify="space-between">
      {!quizID?.includes('mediu-de-invatare') ? (
        <Grid.Col sm={12} md={4}>
          <Button
            size="lg"
            onClick={answerLater}
            leftIcon={<AiOutlineRedo size={18} />}
            variant="outline"
            color="blue.7 "
            disabled={currentQuestion < totalCount - 1 ? false : true}
            className={classes.button}
          >
            <span>Răspunde mai târziu</span>
          </Button>
        </Grid.Col>
      ) : (
        <></>
      )}
      <Grid.Col sm={12} md={4}>
        <Button
          size="lg"
          onClick={deleteAnswers}
          leftIcon={<AiFillCloseCircle size={18} />}
          variant="outline"
          color="red.7"
          disabled={!isEnabled}
          className={classes.button}
          mx="auto"
        >
          <span>Șterge răspunsul</span>
        </Button>
      </Grid.Col>

      <Grid.Col sm={12} md={4}>
        <Button
          size="lg"
          onClick={submitAnswer}
          leftIcon={<AiFillCheckCircle size={18} />}
          color="green.7"
          disabled={!isEnabled}
          className={classes.button}
          ml="auto"
        >
          Trimite răspunsul
        </Button>
      </Grid.Col>
    </Grid>
  );
};

export default QuizButtons;
