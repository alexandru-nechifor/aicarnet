import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChestionareAuto from './pages/Chestionare-Auto';
import QuizTemplate from './pages/Quiz/QuizTemplate';
import Navbar from './components/Navbar';
import QuizSelect from './pages/Quiz/QuizSelect';
import Question from './pages/Question/Question';
import Questions from './pages/Questions/Questions';
import ExamQuestions from './pages/ExamQuestions/ExamQuestions';
import { MantineProvider } from '@mantine/core';
import Footer from './components/Footer';
import DespreNoi from './pages/Despre-noi';
function App() {
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: 'Nunito Sans',
          colorScheme: 'dark',
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 960,
                  lg: 1140,
                  xl: '90%',
                },
              },
            },
          },
        }}
      >
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/chestionare-auto" element={<ChestionareAuto />} />
          <Route path="/chestionar-auto/:quizID" element={<QuizTemplate />} />
          <Route path="/chestionare-auto/:quizID" element={<QuizSelect />} />
          <Route path="/intrebari-examen/" element={<ExamQuestions />} />
          <Route path="/despre-noi/" element={<DespreNoi />} />
          <Route
            path="/intrebari-examen/:questionsID"
            element={<Questions />}
          />
          <Route
            path="/intrebari-examen/:questionsCatID/intrebare/:uuid"
            element={<Question />}
          />
        </Routes>
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
