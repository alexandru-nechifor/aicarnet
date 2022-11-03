import { createStyles, Grid, Title, Text } from '@mantine/core';
import CustomContainer from '../customComponents/Container';
import pointerArrow from '../../assets/Home/pointer.png';
import { helpData } from '../../constants/helpData';

const HelpSection = () => {
  const useHelpStyles = createStyles((theme) => ({
    helpSection: {
      backgroundColor: '#FFF',
      minHeight: '50vh',
      margin: '0 calc(-50vw + 50%)',
      padding: '4rem 0',
    },

    header: {
      color: theme.colors.heading,
      position: 'relative',
      width: 'fit-content',

      '&:after': {
        content: `url(${pointerArrow})`,
        position: 'absolute',
        right: -100,
        top: -20,
      },
    },

    boxIcon: {
      color: theme.colors.main,
      fontSize: 34,
    },

    link: {
      color: theme.colors.main,

      '&:hover': {
        colors: theme.colors.blue[9],
      },
    },
  }));
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
                <a href={item.url} className={classes.link}>
                  Citește mai mult{' '}
                </a>
              </Grid.Col>
            );
          })}
        </Grid>
      </CustomContainer>
    </section>
  );
};

export default HelpSection;
