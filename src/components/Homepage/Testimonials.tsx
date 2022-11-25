import { Title } from '@mantine/core';
import CustomContainer from '../customComponents/Container';

const Testimonials = () => {
  return (
    <CustomContainer>
      <Title
        order={2}
        sx={(theme) => ({ color: theme.colors.heading, textAlign: 'center' })}
      >
        Vezi ce părere au utilizatorii noștri
      </Title>
    </CustomContainer>
  );
};

export default Testimonials;
