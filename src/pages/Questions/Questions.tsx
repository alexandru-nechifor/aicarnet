import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuestions } from '../../customHooks/useQuestions';
import ReactPaginate from 'react-paginate';
import {
  Center,
  Container,
  createStyles,
  Loader,
  Stack,
} from '@mantine/core';
import { toLetter } from '../../functions/toLetter';
import Choice from '../../components/questionsData/Choice';
import QuestionHeading from '../../components/questionsData/QuestionHeading';
import DataImage from '../../components/questionsData/DataImage';
import CorrectAnswer from '../../components/questionsData/CorrectAnswer';
import SearchInput from './SearchInput';
import useFilteredQuestionsSelector from '../../customHooks/useFilteredQuestionsSelector';

const Questions = () => {
  const useStyles = createStyles((theme) => ({
    dataBox: {
      [theme.fn.smallerThan('md')]: { width: '100%' },
      width: '80%',
      margin: 'auto',
      backgroundColor: theme.colors.dark[5],
      color: theme.colors.gray[1],
      padding: '2rem',
      borderRadius: '10px',
    },

    paginateContainer: {
      [theme.fn.smallerThan('md')]: { width: '100%' },
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '50%',
      margin: '2rem auto',
    },

    button: {
      backgroundColor: theme.colors.blue[7],
      [theme.fn.smallerThan('sm')]: { padding: '0.4rem 0.8rem' },
      padding: '0.8rem 1.5rem',
      borderRadius: 8,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.colors.blue[9],
        cursor: 'pointer',
      },
    },

    buttonDisabled: {
      '&:hover': {
        cursor: 'not-allowed',
        backgroundColor: theme.colors.blue[7],
      },
      opacity: '60%',
    },

    activeText: {
      color: theme.colors.blue[7],
    },

    page: {
      cursor: 'pointer',
    },
  }));

  const { classes } = useStyles();
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
    <Container size="xl">
      <Stack mx="auto" justify="center" align="center" spacing={'xl'}>
        <SearchInput />
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
    </Container>
  );
};

export default Questions;
