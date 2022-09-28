import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizQuestions: [],
  search: '',
};

export const quizQuestionsSlice = createSlice({
  name: 'quizQuestions',
  initialState,
  reducers: {
    setQuizQuestions(state, action) {
      state.quizQuestions = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export default quizQuestionsSlice.reducer;
export const { setQuizQuestions, setSearch } = quizQuestionsSlice.actions;
