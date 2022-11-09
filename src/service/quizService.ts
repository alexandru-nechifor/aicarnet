import axios from 'axios';
import { IQuizData } from '../types/IQuizData';
import { QueryFunctionContext } from '@tanstack/react-query';
// import { quizDatabase } from '../utils/firebase';
// import { ref, child, get } from 'firebase/database';
const axiosInstace = axios.create({
  // baseURL: 'http://localhost:3006',
  baseURL: 'https://server-aicarnet.herokuapp.com/',
});

// "start": "json-server -p 3006 -w db.json",
// const dataRef = ref(quizDatabase);

export const getData = async ({
  queryKey,
}: QueryFunctionContext<[string | undefined]>) => {
  const [quizID] = queryKey;
  const { data } = await axiosInstace.get<IQuizData[]>(`${quizID}`);
  return data;
};

// export const getData = async ({
//   queryKey,
// }: QueryFunctionContext<[string | undefined]>) => {
//   const [quizID] = queryKey;
//   let data: any = [];
//   await get(child(dataRef, `${quizID}`))
//     .then((snapshot) => {
//       if (snapshot.exists()) {
//         data = snapshot.val();
//         console.log(data);
//       } else {
//         console.log('No data available');
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   return data;
// };

export const getQuestion = async ({
  queryKey,
}: QueryFunctionContext<[string | undefined, string | undefined]>) => {
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
