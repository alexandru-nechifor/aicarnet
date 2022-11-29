import Choice from '../QuestionsData/Choice';

interface IDisplayCorrect {
  correct: number | undefined;
  choiceA: string;
  choiceB: string;
  choiceC: string;
}

const DisplayCorrect = ({
  correct,
  choiceA,
  choiceB,
  choiceC,
}: IDisplayCorrect) => {
  switch (correct) {
    case 1:
      return <Choice correct={true}>{choiceA}</Choice>;

    case 2:
      return <Choice correct={true}>{choiceB}</Choice>;
    case 3:
      return (
        <>
          <Choice correct={true}>{choiceA}</Choice>{' '}
          <Choice correct={true}>{choiceB}</Choice>
        </>
      );
    case 4:
      return <Choice correct={true}>{choiceC}</Choice>;
    case 5:
      return (
        <>
          <Choice correct={true}>{choiceA}</Choice>
          <Choice correct={true}>{choiceC}</Choice>
        </>
      );

    case 6:
      return (
        <>
          <Choice correct={true}>{choiceB}</Choice>
          <Choice correct={true}>{choiceC}</Choice>
        </>
      );

    case 7:
      return (
        <>
          <Choice correct={true}>{choiceA}</Choice>
          <Choice correct={true}>{choiceB}</Choice>
          <Choice correct={true}>{choiceC}</Choice>
        </>
      );

    default:
      return null;
  }
};

export default DisplayCorrect;
