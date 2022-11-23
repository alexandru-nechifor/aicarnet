import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuestions } from '../../customHooks/useQuestions';
import ReactPaginate from 'react-paginate';
import { Center, Group, Loader, Stack, Title } from '@mantine/core';
import { toLetter } from '../../utils/toLetter';
import Choice from '../../components/questionsData/Choice';
import QuestionHeading from '../../components/questionsData/QuestionHeading';
import DataImage from '../../components/questionsData/DataImage';
import CorrectAnswer from '../../components/questionsData/CorrectAnswer';
import SearchInput from './SearchInput';
import useFilteredQuestionsSelector from '../../customHooks/useFilteredQuestionsSelector';
import CustomContainer from '../../components/customComponents/Container';
import { useQuestionsStyles } from '../../styles/Quiz/useQuestionsStyles';

const Questions = () => {
  const { classes } = useQuestionsStyles();
  const [pageNumber, setPageNumber] = useState(0);
  const { questionsID } = useParams<string>();

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
        <Group
          sx={(theme) => ({
            margin: '2rem 0',
            justifyContent: 'space-between',
            width: '80%',

            [theme.fn.smallerThan('md')]: {
              width: '100%',
            },
          })}
        >
          <Title
            sx={(theme) => ({
              textTransform: 'capitalize',
              [theme.fn.smallerThan('sm')]: {
                textAlign: 'center',
                width: '100%',
              },
              color: theme.colors.main,
              border: `1px solid ${theme.colors.main}`,
              padding: '0.5rem 1rem',
              borderRadius: 8,
              fontWeight: 600,
            })}
            size={'h3'}
          >
            {questionsID?.replace('-', ' ')}
          </Title>
          <SearchInput />
        </Group>

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

                <Choice>{item.choiceA}</Choice>
                <Choice>{item.choiceB}</Choice>
                <Choice>{item.choiceC}</Choice>

                <CorrectAnswer correct={toLetter(item.correct)} />
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
