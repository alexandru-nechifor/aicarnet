import { Button, Group } from '@mantine/core';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
const HeroButtons = () => {
  return (
    <Group>
      <NavLink to="/chestionare-auto">
        <Button rightIcon={<BsFillArrowRightCircleFill />} size="lg">
          Chestionare auto
        </Button>
      </NavLink>
      <Button
        rightIcon={<BsFillArrowRightCircleFill />}
        variant="outline"
        size="lg"
      >
        Alătură-te
      </Button>
    </Group>
  );
};

export default HeroButtons;
