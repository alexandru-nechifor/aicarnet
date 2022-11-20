export interface IQuizData {
  question: string;
  imgSrc?: string;
  choiceA: string;
  choiceB: string;
  choiceC: string;
  correct: number | undefined;
  id: number;
}
