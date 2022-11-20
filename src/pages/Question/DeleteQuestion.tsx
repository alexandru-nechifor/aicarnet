// import {
//   Button,
//   Center,
//   Group,
//   Loader,
//   NumberInput,
//   Stack,
//   Text,
//   TextInput,
// } from '@mantine/core';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useDeleteQuestion } from '../../customHooks/useDeleteQuestion';

// import { IQuizData } from '../../types/IQuizData';

// interface IDeleteQuestion {
//   questionData: IQuizData;
//   setDeleteOpened: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const DeleteQuestion = ({ questionData, setDeleteOpened }: IDeleteQuestion) => {
//   const { isLoading, isError, mutate } = useDeleteQuestion();
//   const { questionsCatID } = useParams<string>();
//   const navigate = useNavigate();
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     mutate({
//       cat: questionData.cat,
//       question: questionData.question,
//       imgSrc: questionData.imgSrc,
//       choiceA: questionData.choiceA,
//       choiceB: questionData.choiceB,
//       choiceC: questionData.choiceC,
//       correct: questionData.correct,
//       id: questionData.id,
//     });
//     navigate(`/intrebari-examen/${questionsCatID}`);
//   };

//   if (isLoading) {
//     return (
//       <Center sx={{ height: '90vh' }}>
//         <Loader size="lg" />
//       </Center>
//     );
//   }

//   if (isError) {
//     return <>error</>;
//   }

//   return (
//     <Stack>
//       <Text>Sunteți sigur că vreți să stergeți această întrebare?</Text>

//       <form onSubmit={handleSubmit}>
//         <TextInput
//           label="Întrebare"
//           placeholder="Întrebare"
//           value={questionData.question}
//           disabled
//         />

//         <TextInput
//           label="Imagine"
//           placeholder="Imagine"
//           value={questionData.imgSrc}
//           disabled
//         />
//         <TextInput
//           label="Varianta A"
//           placeholder="Varianta A"
//           value={questionData.choiceA}
//           disabled
//         />
//         <TextInput
//           label="Varianta B"
//           placeholder="Varianta B"
//           value={questionData.choiceB}
//           disabled
//         />
//         <TextInput
//           label="Varianta C"
//           placeholder="Varianta C"
//           disabled
//           value={questionData.choiceC}
//         />

//         <NumberInput
//           placeholder="Răspuns corect"
//           label="Răspuns corect"
//           disabled
//           value={questionData.correct}
//         />
//         <Group mt={20}>
//           <Button type="submit">Da</Button>
//           <Button onClick={() => setDeleteOpened(false)}>Nu</Button>
//         </Group>
//       </form>
//     </Stack>
//   );
// };

// export default DeleteQuestion;
export {};
