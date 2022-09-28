import { configureStore } from '@reduxjs/toolkit';
import quizDataReducer from './quizDataSlice';
import quizQuestionsReducer from './quizQuestionsSlice';

export const store = configureStore({
  reducer: { quizData: quizDataReducer, quizQuestions: quizQuestionsReducer },
});
export type RootState = ReturnType<typeof store.getState>;
