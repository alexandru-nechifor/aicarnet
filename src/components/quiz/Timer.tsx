import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Settings from '../../constants/QuizSettings';

const Timer = () => {
  let { quizID } = useParams<string>();
  const time = Settings[quizID as keyof typeof Settings].time;
  const [remainingMinutes, setRemainingMinutes] = useState(time);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    if (!JSON.stringify(quizID).includes('mediu-de-invatare')) {
      const intervalId = setInterval(() => {
        setRemainingSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      if (remainingSeconds === 0) {
        setRemainingSeconds(60);
        setRemainingMinutes((prevMinutes) => prevMinutes - 1);
      }

      if (remainingMinutes === 0 && remainingSeconds === 0)
        // Do something
        console.log('Time is over');

      return () => clearInterval(intervalId);
    }
  }, [remainingSeconds, remainingMinutes, quizID]);

  if (JSON.stringify(quizID).includes('mediu-de-invatare')) {
    return <>Nelimitat</>;
  } else {
    return (
      <>
        {remainingMinutes}:{remainingSeconds}
      </>
    );
  }
};

export default Timer;
