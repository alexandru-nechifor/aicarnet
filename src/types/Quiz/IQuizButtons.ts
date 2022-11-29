export default interface IQuizButtons {
  shuffle: Array<number>;
  shuffleArray: (array: Array<number>) => void;
  questionScore: number;
  setQuestionScore: React.Dispatch<React.SetStateAction<number>>;
}
