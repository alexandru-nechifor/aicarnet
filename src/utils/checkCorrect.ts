export const isACorrect = (answer: number | undefined) => {
  switch (answer) {
    case 1:
      return true;
    case 3:
      return true;
    case 5:
      return true;
    case 7:
      return true;
    default:
      return false;
  }
};

export const isBCorrect = (answer: number | undefined) => {
  switch (answer) {
    case 2:
      return true;
    case 3:
      return true;
    case 6:
      return true;
    case 7:
      return true;
    default:
      return false;
  }
};

export const isCCorrect = (answer: number | undefined) => {
  switch (answer) {
    case 4:
      return true;
    case 5:
      return true;
    case 6:
      return true;
    case 7:
      return true;
    default:
      return false;
  }
};

export const isAWrong = (
  answer: number | undefined,
  correct: number | undefined
) => {
  if (answer !== correct) {
    switch (answer) {
      case 1:
        return true;
      case 3:
        return true;
      case 5:
        return true;
      case 7:
        return true;
      default:
        return false;
    }
  }
};

export const isBWrong = (
  answer: number | undefined,
  correct: number | undefined
) => {
  if (answer !== correct) {
    switch (answer) {
      case 2:
        return true;
      case 3:
        return true;
      case 6:
        return true;
      case 7:
        return true;
      default:
        return false;
    }
  }
};

export const isCWrong = (
  answer: number | undefined,
  correct: number | undefined
) => {
  if (answer !== correct) {
    switch (answer) {
      case 4:
        return true;
      case 5:
        return true;
      case 6:
        return true;
      case 7:
        return true;
      default:
        return false;
    }
  }
};
