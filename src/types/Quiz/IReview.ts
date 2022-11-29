import { IQuizData } from './IQuizData';

export default interface IReview {
  quizID: string | undefined;
  data: IQuizData[] | undefined;
}
