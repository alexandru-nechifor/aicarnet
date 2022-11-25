import axios from 'axios';
import { IQuizData } from '../types/IQuizData';
import { QueryFunctionContext } from '@tanstack/react-query';

const APIToken = import.meta.env.VITE_QUIZ_API_KEY;

const axiosInstace = axios.create({
  baseURL: `http://localhost:1337/api/`,
  headers: {
    Authorization: `Bearer ${APIToken}`,
  },
});

export const getData = async ({
  queryKey,
}: QueryFunctionContext<[string | undefined]>) => {
  const [quizID] = queryKey;
  const { data } = await axiosInstace.get(`${quizID?.toLowerCase()}s`);
  let questions = [] as IQuizData[];
  if (data) {
    for (let index = 0; index < data.data.length; index++) {
      questions.push({
        question: data.data[index].attributes.question,
        imgSrc: data.data[index].attributes.imgSrc,
        choiceA: data.data[index].attributes.choiceA,
        choiceB: data.data[index].attributes.choiceB,
        choiceC: data.data[index].attributes.choiceC,
        correct: data.data[index].attributes.correct,
        id: data.data[index].id,
      });
    }
  }
  return questions;
};

export const getQuestion = async ({
  queryKey,
}: QueryFunctionContext<[string | undefined, string | undefined]>) => {
  const [quizID, uuid] = queryKey;
  const { data } = await axiosInstace.get(`/${quizID?.toLowerCase()}s/${uuid}`);
  return data.data.attributes;
};

// export const putQuestion = async (req: IQuizData) => {
//   const { id, ...rest } = req;
//   const { data } = await axiosInstace.put<IQuizData>(
//     `/${rest.cat}/${id}`,
//     rest
//   );
//   return data;
// };

// export const deleteQuestion = async (req: IQuizData) => {
//   const { id, cat } = req;
//   const { data } = await axiosInstace.delete<IQuizData>(`/${cat}/${id}`);
//   return data;
// };
