import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChestionareAuto from './pages/Chestionare-Auto';
import QuizTemplate from './pages/Quiz/QuizTemplate';
import QuizSelect from './pages/Quiz/QuizSelect';
import Question from './pages/Question/Question';
import Questions from './pages/Questions/Questions';
import {
  /* eslint-disable */
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import DespreNoi from './pages/Despre-noi';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import Signup from './components/user/SignUp';
import Account from './components/user/Account/Account';
import Signin from './components/user/SignIn';

import ProtectedRoute from './components/Navigation/ProtectedRoute';
import EmailVerified from './components/user/EmailVerified';
import WithNavbar from './components/Navigation/WithNavbar';
import SelectCat from './pages/Questions/SelectCat';

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
              heading: [colorScheme === 'dark' ? '#EAF3FF' : '#081325'],
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
          <EmailVerified />
          <Routes>
            <Route element={<WithNavbar />}>
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
              <Route path="/despre-noi" element={<DespreNoi />} />
              <Route path="/intrebari-examen/" element={<SelectCat />} />
              <Route
                path="/intrebari-examen/:questionsID"
                element={<Questions />}
              />
              <Route
                path="/intrebari-examen/:questionsCatID/intrebare/:uuid"
                element={<Question />}
              />

              <Route path="/cont" element={<Account />} />
            </Route>

            {/* User */}
            <Route
              path="/inregistrare"
              element={
                <ProtectedRoute to="/cont">
                  <Signup />
                </ProtectedRoute>
              }
            />
            <Route
              path="/autentificare"
              element={
                <ProtectedRoute to="/cont">
                  <Signin />
                </ProtectedRoute>
              }
            />
          </Routes>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default App;
