import { createStyles, Group, Text } from '@mantine/core';
import ReviewIMG from '../../../assets/Home/review.png';
import { AiFillStar } from 'react-icons/ai';

const SocialProof = () => {
  const useStyles = createStyles((theme) => ({
    iconStyle: {
      color: theme.colors.yellow[6],
      fontSize: 20,
      [theme.fn.smallerThan('xs')]: { fontSize: 40 },
    },
  }));
  const { classes } = useStyles();

  const renderIcon = (num: number) =>
    [...Array(num)].map(() => {
      return <AiFillStar className={classes.iconStyle} />;
    });

  return (
    <Group>
      <img src={ReviewIMG} alt="Persoane mulțumite de serviciile aiCarnet" />
      <Text size="sm">Peste 100 de persoane mulțumite</Text>
      <Group
        spacing={0}
        sx={(theme) => ({
          [theme.fn.smallerThan('xs')]: {
            opacity: '5%',
            position: 'absolute',
            right: '11%',
          },
        })}
      >
        {renderIcon(5)}
      </Group>
    </Group>
  );
};

export default SocialProof;
