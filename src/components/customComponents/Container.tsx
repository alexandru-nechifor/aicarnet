import { Container } from '@mantine/core';
import { ReactNode } from 'react';

interface IContainer {
  children: ReactNode;
}
const CustomContainer = ({ children }: IContainer) => {
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
