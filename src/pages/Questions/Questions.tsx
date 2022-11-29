import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuestions } from '../../customHooks/useQuestions';
import ReactPaginate from 'react-paginate';
import { Button, Center, Grid, Group, Loader, Stack } from '@mantine/core';
import Choice from '../../components/QuestionsData/Choice';
import QuestionHeading from '../../components/QuestionsData/QuestionHeading';
import DataImage from '../../components/QuestionsData/DataImage';
import SearchInput from './SearchInput';
import useFilteredQuestionsSelector from '../../customHooks/useFilteredQuestionsSelector';
import CustomContainer from '../../components/CustomComponents/Container';
import { useQuestionsStyles } from '../../styles/Quiz/useQuestionsStyles';
import { QuizTopics } from '../../constants/Quiz/chestionare';
import { isACorrect, isBCorrect, isCCorrect } from '../../utils/checkCorrect';

const Questions = () => {
  const { classes } = useQuestionsStyles();

  const { questionsID } = useParams<string>();
  const [pageNumber, setPageNumber] = useState(0);

  const { isFetching, isError } = useQuestions(questionsID);
  const questionData = useFilteredQuestionsSelector();

  // React Pagination
  const questionsPerPage = 15;
  const pagesVisited = pageNumber * questionsPerPage;
  const pageCount = Math.ceil(questionData.length / questionsPerPage);
  const displayQuestions = questionData.slice(
    pagesVisited,
    pagesVisited + questionsPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pageNumber]);

  const changePage = ({ selected }: { selected: number }): void => {
    setPageNumber(selected);
  };

  if (isError) {
    return <>error</>;
  }

  if (isFetching) {
    return (
      <Center sx={{ height: '90vh' }}>
        <Loader size="lg" />
      </Center>
    );
  }

  return (
    <CustomContainer>
      <Stack mx="auto" justify="center" align="center" spacing={'xl'}>
        <Grid sx={{ margin: '2rem 0', width: '100%' }} justify="space-between">
          <Grid.Col sm={12} lg={6} xl={8}>
            <Group>
              {QuizTopics.map((item) => {
                return (
                  <Link to={`/intrebari-examen/${item.quizID}`} key={item.key}>
                    <Button
                      variant={
                        questionsID === item.quizID ? 'filled' : 'outline'
                      }
                    >
                      {item.title}
                    </Button>
                  </Link>
                );
              })}
            </Group>
          </Grid.Col>
          <Grid.Col sm={12} lg={6} xl={4}>
            <SearchInput />
          </Grid.Col>
        </Grid>

        {displayQuestions.map((item, index: number) => {
          return (
            <Link
              to={`intrebare/${item.id}`}
              key={item.id}
              className={classes.dataBox}
            >
              <Stack>
                <QuestionHeading>{`${index + 1 + pagesVisited}. ${
                  item.question
                }`}</QuestionHeading>

                <DataImage src={item.imgSrc} alt={item.question} />

                <Choice correct={isACorrect(item.correct)}>
                  {item.choiceA}
                </Choice>
                <Choice correct={isBCorrect(item.correct)}>
                  {item.choiceB}
                </Choice>
                <Choice correct={isCCorrect(item.correct)}>
                  {item.choiceC}
                </Choice>
              </Stack>
            </Link>
          );
        })}
      </Stack>

      <ReactPaginate
        previousLabel={'Înapoi'}
        nextLabel={'Următoarea pagină'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={classes.paginateContainer}
        previousClassName={classes.button}
        nextLinkClassName={classes.button}
        disabledClassName={classes.buttonDisabled}
        activeClassName={classes.activeText}
        pageClassName={classes.page}
      />
    </CustomContainer>
  );
};

export default Questions;
