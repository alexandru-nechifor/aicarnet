import axios from 'axios';
import { IQuizData } from '../types/Quiz/IQuizData';
//eslint-disable-next-line
import { QueryFunctionContext } from '@tanstack/react-query';
import Settings from '../constants/Quiz/QuizSettings';
import { getToken } from '../utils/helpers';

const axiosInstace = axios.create({
  baseURL: `http://localhost:1337/api/`,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
  withCredentials: true,
});

export const getData = async ({
  queryKey,
}: QueryFunctionContext<[string | undefined]>) => {
  const [quizID] = queryKey;
  const isLearning = quizID?.includes('mediu-de-invatare');
  const quizData = quizID?.replace('-mediu-de-invatare', '').toLowerCase();

  const totalCount = Settings[quizID as keyof typeof Settings].total;
  const {
    data: { data },
  } = isLearning
    ? await axiosInstace.get(`${quizData}s`)
    : await axiosInstace.get(`/${quizData}/custom?num=${totalCount}`);

  const questions = [] as IQuizData[];
  if (data) {
    for (let index = 0; index < data.length; index++) {
      questions.push({
        question: data[index].attributes.question,
        imgSrc: data[index].attributes.imgSrc,
        choiceA: data[index].attributes.choiceA,
        choiceB: data[index].attributes.choiceB,
        choiceC: data[index].attributes.choiceC,
        correct: data[index].attributes.correct,
        id: data[index].id,
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
