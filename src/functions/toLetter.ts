export const toLetter = (num: number | undefined) => {
  switch (num) {
    case 1:
      return 'A';

    case 2:
      return 'B';

    case 3:
      return 'A, B';

    case 4:
      return 'C';

    case 5:
      return 'A, C';

    case 6:
      return 'B, C';

    case 7:
      return 'A, B, C';
  }
};
