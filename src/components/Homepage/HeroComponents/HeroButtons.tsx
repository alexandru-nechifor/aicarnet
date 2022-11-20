import { Button, createStyles, Group } from '@mantine/core';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
const HeroButtons = () => {
  const useStyles = createStyles((theme) => ({
    btn: {
      [theme.fn.smallerThan('sm')]: {
        display: 'block',
        width: '100%',
      },
    },
  }));
  const { classes } = useStyles();
  const { currentUser } = useAuth();
  return (
    <Group>
      <NavLink to="/chestionare-auto" className={classes.btn}>
        <Button
          rightIcon={<BsFillArrowRightCircleFill />}
          size="lg"
          className={classes.btn}
        >
          Chestionare auto
        </Button>
      </NavLink>

      {currentUser ? (
        <NavLink to="/cont" className={classes.btn}>
          <Button
            rightIcon={<BsFillArrowRightCircleFill />}
            variant="outline"
            size="lg"
            sx={{ width: '100%' }}
          >
            Contul meu
          </Button>
        </NavLink>
      ) : (
        <NavLink to="/inregistrare" className={classes.btn}>
          <Button
            rightIcon={<BsFillArrowRightCircleFill />}
            variant="outline"
            size="lg"
            sx={{ width: '100%' }}
          >
            Alătură-te
          </Button>
        </NavLink>
      )}
    </Group>
  );
};

export default HeroButtons;
