export interface IQuizData {
  cat: string;
  question: string;
  imgSrc?: string;
  choiceA: string;
  choiceB: string;
  choiceC: string;
  correct: number | undefined;
  id: string;
}
