export default interface IQuizChoices {
  setQuestionScore: React.Dispatch<React.SetStateAction<number>>;
  shuffle: Array<number>;
}
