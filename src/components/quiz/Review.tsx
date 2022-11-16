import { toLetter } from '../../utils/toLetter';
import { useSavedAnswersSelector } from '../../customHooks/useSavedAnswersSelector';
import { useHasPassed } from '../../customHooks/useQuizStatusSelectors';
import { IconCheck, IconCircleX } from '@tabler/icons';
import { Stack, Group, Text, Button } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useQuizDataSelector } from '../../customHooks/useQuizDataSelector';
import Choice from '../questionsData/Choice';
import QuestionHeading from '../questionsData/QuestionHeading';
import DataImage from '../questionsData/DataImage';
import CorrectAnswer from '../questionsData/CorrectAnswer';
import { useScoreSelector } from '../../customHooks/useScoreSelector';
import { useNegativeScoreSelector } from '../../customHooks/useNegativeScoreSelector';
import CustomContainer from '../customComponents/Container';
import { useReviewStyles } from '../../styles/Quiz/useReviewStyles';

const Review = () => {
  const quizQuestions = useQuizDataSelector();
  const savedAnswers = useSavedAnswersSelector();
  const passed = useHasPassed();
  const score = useScoreSelector();
  const negativeScore = useNegativeScoreSelector();

  const { classes } = useReviewStyles();

  return (
    <>
      <CustomContainer>
        <Group
          className={classes.message}
          align="center"
          position="center"
          hidden={!passed}
        >
          <IconCheck className={classes.checkedIcon} size={48} />
          <Text>
            Felicitări! Ai fost declarat admis cu: {score} răspunsuri corecte
          </Text>
        </Group>

        <Group
          className={classes.message}
          align="center"
          position="center"
          hidden={passed}
        >
          <IconCircleX className={classes.circleXIcon} size={48} />
          <Text>
            Ne pare rău! Ai fost declarat respins cu: {negativeScore} răspunsuri
            greșite.
          </Text>
        </Group>
        <Stack mx="auto" justify="center" align="center" spacing={'xl'}>
          {quizQuestions.map((item, index: number) => {
            if (index <= savedAnswers.length - 1) {
              return (
                <Stack className={classes.dataBox} key={item.id}>
                  <QuestionHeading>{`${index + 1}. ${
                    item.question
                  }`}</QuestionHeading>

                  <DataImage src={item.imgSrc} alt={item.question} />

                  <Choice>{item.choiceA}</Choice>
                  <Choice>{item.choiceB}</Choice>
                  <Choice>{item.choiceC}</Choice>

                  <CorrectAnswer correct={toLetter(item.correct)} />

                  <Group>
                    <span
                      className={
                        savedAnswers[index] === item.correct
                          ? classes.correct
                          : classes.wrong
                      }
                    >
                      {toLetter(savedAnswers[index])}
                    </span>

                    <Text>Răspunsul tău</Text>
                  </Group>
                </Stack>
              );
            } else {
              return <></>;
            }
          })}

          <Group>
            <Link to="/chestionare-auto">
              <Button size={'md'} sx={{ color: 'white', margin: '1rem auto' }}>
                Chestionare auto
              </Button>
            </Link>

            {/* <Button size={'md'} sx={{ color: 'white', margin: '1rem auto' }}>
              Încearcă alt chestionar
            </Button> */}
          </Group>
        </Stack>
      </CustomContainer>
    </>
  );
};

export default Review;
