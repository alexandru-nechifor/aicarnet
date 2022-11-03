import { Grid, Title, Text } from '@mantine/core';
import CustomContainer from '../customComponents/Container';

import { helpData } from '../../constants/helpData';
import { BsArrowRightShort } from 'react-icons/bs';
import { useHelpStyles } from '../../styles/Home/heroStyles';
import { NavLink } from 'react-router-dom';

const HelpSection = () => {
  const { classes } = useHelpStyles();

  return (
    <section className={classes.helpSection}>
      <CustomContainer>
        <Title order={2} className={classes.header}>
          Cum te putem ajuta?
        </Title>
        <Grid mt={50} gutter="xl">
          {helpData.map((item) => {
            const Icon = item.icon;
            return (
              <Grid.Col lg={4}>
                <Icon className={classes.boxIcon} />
                <Text my={20}>{item.text}</Text>
                <NavLink to={item.url} className={classes.link}>
                  Citește mai mult <BsArrowRightShort size={20} />
                </NavLink>
              </Grid.Col>
            );
          })}
        </Grid>
      </CustomContainer>
    </section>
  );
};

export default HelpSection;
