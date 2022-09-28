import { Button, Center, Loader, NumberInput, TextInput } from '@mantine/core';
import { useState } from 'react';
import { useEditQuestion } from '../../customHooks/useEditQuestion';
import { IQuizData } from '../../types/IQuizData';

interface IEditQuestion {
  questionData: IQuizData;
}
const EditQuestion = ({ questionData }: IEditQuestion) => {
  const { isLoading, isError, mutate } = useEditQuestion();
  const [question, setQuestion] = useState(questionData.question);
  const [imgSrc, setImgSrc] = useState(questionData.imgSrc);
  const [choiceA, setChoiceA] = useState(questionData.choiceA);
  const [choiceB, setChoiceB] = useState(questionData.choiceB);
  const [choiceC, setChoiceC] = useState(questionData.choiceC);
  const [correct, setCorrect] = useState(questionData.correct);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      cat: questionData.cat,
      question,
      imgSrc,
      choiceA,
      choiceB,
      choiceC,
      correct,
      id: questionData.id,
    });
  };

  if (isLoading) {
    return (
      <Center sx={{ height: '90vh' }}>
        <Loader size="lg" />
      </Center>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Întrebare"
        placeholder="Întrebare"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        withAsterisk
      />
      <TextInput
        label="Imagine"
        placeholder="Imagine"
        value={imgSrc}
        onChange={(e) => setImgSrc(e.target.value)}
      />
      <TextInput
        label="Varianta A"
        placeholder="Varianta A"
        value={choiceA}
        onChange={(e) => setChoiceA(e.target.value)}
        withAsterisk
      />
      <TextInput
        label="Varianta B"
        placeholder="Varianta B"
        value={choiceB}
        onChange={(e) => setChoiceB(e.target.value)}
        withAsterisk
      />
      <TextInput
        label="Varianta C"
        placeholder="Varianta C"
        onChange={(e) => setChoiceC(e.target.value)}
        value={choiceC}
        withAsterisk
      />

      <NumberInput
        placeholder="Răspuns corect"
        label="Răspuns corect"
        max={7}
        min={1}
        onChange={(val) => setCorrect(val)}
        value={correct}
        withAsterisk
      />
      <Button mt={25} type="submit">
        Actualizează
      </Button>
    </form>
  );
};

export default EditQuestion;
