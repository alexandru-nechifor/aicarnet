import { Container } from '@mantine/core';
import { IReactChildren } from '../../types/IReactChildren';

const CustomContainer = ({ children }: IReactChildren) => {
  return (
    <Container
      sx={(theme) => ({
        maxWidth: '80%',
        [theme.fn.smallerThan('md')]: { maxWidth: '90%' },
        [theme.fn.smallerThan('sm')]: { maxWidth: '95%' },
      })}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
