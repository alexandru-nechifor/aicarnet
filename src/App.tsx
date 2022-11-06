import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChestionareAuto from './pages/Chestionare-Auto';
import QuizTemplate from './pages/Quiz/QuizTemplate';
import Navbar from './components/Navigation/Navbar';
import QuizSelect from './pages/Quiz/QuizSelect';
import Question from './pages/Question/Question';
import Questions from './pages/Questions/Questions';
import ExamQuestions from './pages/ExamQuestions/ExamQuestions';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import DespreNoi from './pages/Despre-noi';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import Signup from './components/user/SignUp';
import Account from './components/user/Account';
import Signin from './components/user/SignIn';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/Navigation/ProtectedRoute';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            fontFamily: 'Nunito Sans',
            colorScheme,
            colors: {
              main: ['#3F8FFE'],
              heading: [colorScheme === 'dark' ? '#EAF3FF' : '#02204A'],
            },
            components: {
              Container: {
                defaultProps: {
                  sizes: {
                    xs: 540,
                    sm: 720,
                    md: 960,
                    lg: 1140,
                    xl: '80%',
                  },
                },
              },
            },
          }}
        >
          <AuthProvider>
            <Navbar />

            <Routes>
              <Route index element={<Home />} />
              <Route path="/chestionare-auto" element={<ChestionareAuto />} />
              <Route
                path="/chestionar-auto/:quizID"
                element={<QuizTemplate />}
              />
              <Route
                path="/chestionare-auto/:quizID"
                element={<QuizSelect />}
              />
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

              {/* User */}
              <Route
                path="/inregistrare"
                element={
                  <ProtectedRoute to="/cont">
                    <Signup />
                  </ProtectedRoute>
                }
              />
              <Route path="/autentificare" element={<Signin />} />
              <Route path="/cont" element={<Account />} />
            </Routes>
          </AuthProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
