import axios from 'axios';
import { IQuizData } from '../types/IQuizData';
import { QueryFunctionContext } from '@tanstack/react-query';
const axiosInstace = axios.create({
  baseURL: 'http://localhost:3006',
});

// QueryFunctionContext<[string, string | null | undefined]>;

export const getData = async ({ queryKey }: any) => {
  const [quizID] = queryKey;
  const { data } = await axiosInstace.get<IQuizData[]>(quizID);
  return data;
};

export const getQuestion = async ({ queryKey }: any) => {
  const [quizID, uuid] = queryKey;
  const { data } = await axiosInstace.get<IQuizData>(`/${quizID}/${uuid}`);
  return data;
};

export const putQuestion = async (req: IQuizData) => {
  const { id, ...rest } = req;
  const { data } = await axiosInstace.put<IQuizData>(
    `/${rest.cat}/${id}`,
    rest
  );
  return data;
};

export const deleteQuestion = async (req: IQuizData) => {
  const { id, cat } = req;
  const { data } = await axiosInstace.delete<IQuizData>(`/${cat}/${id}`);
  return data;
};
