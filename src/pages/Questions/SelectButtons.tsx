import { Button, Group } from '@mantine/core';
import { Link, useParams } from 'react-router-dom';
import { QuizTopics } from '../../constants/Quiz/chestionare';

const SelectButtons = () => {
  const { questionsID } = useParams<string>();
  return (
    <Group>
      {QuizTopics.map((item) => {
        return (
          <Link to={`/intrebari-examen/${item.quizID}`} key={item.key}>
            <Button
              variant={questionsID === item.quizID ? 'filled' : 'outline'}
            >
              {item.title}
            </Button>
          </Link>
        );
      })}
    </Group>
  );
};

export default SelectButtons;
