import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizData: [],
  savedAnswers: <Array<number>>[],
  score: 0,
  negativeScore: 0,
  currentQuestion: 0,
  totalCount: 0,
  time: 0,
  selected: { isASelected: false, isBSelected: false, isCSelected: false },
  quizStatus: { isFinished: false, hasPassed: false },
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
    setTotalCount(state, action) {
      state.totalCount = action.payload;
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

    resetQuiz() {
      return initialState;
    },
  },
});

export default quizDataSlice.reducer;
export const {
  setQuizData,
  setSavedAnswers,
  setScore,
  setProgressScore,
  setNegativeScore,
  setProgressNegativeScore,
  setCurrentQuestion,
  setProgressCurrentQuestion,
  setTotalCount,
  setASelected,
  setBSelected,
  setCSelected,
  setDeleteAnswers,
  setHasPassed,
  setIsFinished,

  resetQuiz,
} = quizDataSlice.actions;
