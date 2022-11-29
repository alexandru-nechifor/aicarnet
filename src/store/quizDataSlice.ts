import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizData: [],
  //eslint-disable-next-line
  savedAnswers: <Array<number>>[],
  //eslint-disable-next-line
  answersOrder: <Array<number>>[],
  quizID: '',
  score: 0,
  negativeScore: 0,
  currentQuestion: 0,
  time: 0,
  selected: { isASelected: false, isBSelected: false, isCSelected: false },
  quizStatus: { isFinished: false, hasPassed: false },
  isTimeFinished: false,
  progressLoading: true,
};

export const quizDataSlice = createSlice({
  name: 'quizData',
  initialState,
  reducers: {
    setQuizData(state, action) {
      state.quizData = action.payload;
    },
    setSavedAnswers(state, action) {
      state.savedAnswers.push(action.payload);
    },
    setAnswersOrder(state, action) {
      state.answersOrder.push(action.payload);
    },
    setScore(state) {
      state.score++;
    },
    setProgressScore(state, action) {
      state.score = action.payload;
    },
    setNegativeScore(state) {
      state.negativeScore++;
    },
    setProgressNegativeScore(state, action) {
      state.negativeScore = action.payload;
    },
    setCurrentQuestion(state) {
      state.currentQuestion++;
    },
    setProgressCurrentQuestion(state, action) {
      state.currentQuestion = action.payload;
    },
    setASelected(state) {
      state.selected.isASelected = !state.selected.isASelected;
    },
    setBSelected(state) {
      state.selected.isBSelected = !state.selected.isBSelected;
    },
    setCSelected(state) {
      state.selected.isCSelected = !state.selected.isCSelected;
    },
    setDeleteAnswers(state) {
      state.selected.isASelected = false;
      state.selected.isBSelected = false;
      state.selected.isCSelected = false;
    },

    setHasPassed(state, action) {
      state.quizStatus.hasPassed = action.payload;
    },
    setIsFinished(state, action) {
      state.quizStatus.isFinished = action.payload;
    },

    setIsTimeFinished(state, action) {
      state.isTimeFinished = action.payload;
    },

    setProgressLoading(state, action) {
      state.progressLoading = action.payload;
    },

    setQuizID(state, action) {
      state.quizID = action.payload;
    },

    resetQuiz() {
      return initialState;
    },
  },
});

export default quizDataSlice.reducer;
export const {
  setQuizData,
  setSavedAnswers,
  setAnswersOrder,
  setScore,
  setProgressScore,
  setNegativeScore,
  setProgressNegativeScore,
  setCurrentQuestion,
  setProgressCurrentQuestion,
  setASelected,
  setBSelected,
  setCSelected,
  setDeleteAnswers,
  setHasPassed,
  setIsFinished,
  setIsTimeFinished,
  setProgressLoading,
  setQuizID,
  resetQuiz,
} = quizDataSlice.actions;
