import {
  Center,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Title,
} from '@mantine/core';
import AboutSVG from '../assets/aboutus.svg';

const DespreNoi = () => {
  return (
    <Container size="xl">
      <Center>
        <Stack justify="center" align="center" spacing={'lg'}>
          <Title order={1} mb={30}>
            Despre noi
          </Title>
          <Grid justify={'space-around'} align="center">
            <Grid.Col lg={6} sm={12}>
              <Image src={AboutSVG} width={'90%'} mx="auto" />
            </Grid.Col>
            <Grid.Col lg={6} sm={12}>
              <Paper
                withBorder
                sx={{ padding: '1rem', borderRadius: 8 }}
                mt={30}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                ante magna. Morbi varius est nunc, at hendrerit nibh fermentum
                quis. Duis consectetur tincidunt orci eget mattis. Proin sed
                quam neque. Aliquam felis leo, feugiat aliquet mauris at,
                lobortis molestie quam. Sed mattis viverra quam, a dignissim
                neque vehicula id. Aenean luctus venenatis nulla, eu scelerisque
                purus faucibus nec. Vestibulum tempor, dui sed elementum
                accumsan, mi tellus semper urna, in sodales neque lorem id
                turpis. Nulla efficitur nec elit id vulputate. Vivamus velit
                est, viverra sit amet sagittis ut, imperdiet non eros.
              </Paper>
            </Grid.Col>
          </Grid>
        </Stack>
      </Center>
    </Container>
  );
};

export default DespreNoi;
