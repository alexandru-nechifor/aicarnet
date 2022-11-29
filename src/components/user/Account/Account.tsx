import { Grid } from '@mantine/core';

import CustomContainer from '../../CustomComponents/Container';
import Gradient from '../../CustomComponents/Gradient';
import Profile from './Profile';
import Statistics from './Statistics';

function Account() {
  return (
    <Gradient>
      <CustomContainer>
        <Grid sx={{ padding: '4rem 0' }} gutter="xl">
          <Grid.Col lg={4}>
            <Profile />
          </Grid.Col>
          <Grid.Col lg={8}>
            <Statistics />
          </Grid.Col>
        </Grid>
      </CustomContainer>
    </Gradient>
  );
}

export default Account;
