import { Button, createStyles, Group } from '@mantine/core';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
const HeroButtons = () => {
  const useStyles = createStyles((theme) => ({
    btn: {
      [theme.fn.smallerThan('sm')]: {
        width: '100%',
      },
    },

    link: {
      color: '#fff',
    },
  }));
  const { classes } = useStyles();
  const { currentUser } = useAuth();
  return (
    <Group>
      <Button
        rightIcon={<BsFillArrowRightCircleFill />}
        size="lg"
        className={classes.btn}
      >
        <NavLink to="/chestionare-auto" className={classes.link}>
          Chestionare auto
        </NavLink>
      </Button>

      {currentUser ? (
        <NavLink to="/cont">
          <Button
            rightIcon={<BsFillArrowRightCircleFill />}
            variant="outline"
            size="lg"
            className={classes.btn}
          >
            Contul meu
          </Button>
        </NavLink>
      ) : (
        <NavLink to="/inregistrare">
          <Button
            rightIcon={<BsFillArrowRightCircleFill />}
            variant="outline"
            size="lg"
            className={classes.btn}
          >
            Alătură-te
          </Button>
        </NavLink>
      )}
    </Group>
  );
};

export default HeroButtons;
