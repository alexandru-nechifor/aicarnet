import { Box, Image, Stack, Title } from '@mantine/core';
import CustomContainer from '../../components/CustomComponents/Container';
import SelectButtons from './SelectButtons';
import DataArranging from '../../assets/data_arranging.svg';

const SelectCat = () => {
  return (
    <CustomContainer>
      <Stack
        mx="auto"
        justify="center"
        align="center"
        spacing={'xl'}
        mt={'4rem'}
      >
        <Title
          order={1}
          mb={'2rem'}
          sx={(theme) => ({ color: theme.colors.heading })}
        >
          Selectează categoria dorită.
        </Title>
        <Box>
          <Image
            src={DataArranging}
            alt="Selectare categorie"
            width={'100%'}
            mb={'2rem'}
          />
        </Box>

        <SelectButtons />
      </Stack>
    </CustomContainer>
  );
};

export default SelectCat;
