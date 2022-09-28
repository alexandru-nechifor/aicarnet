import { createStyles, Image } from '@mantine/core';
interface IDataImage {
  src: string | undefined;
  alt: string;
}

const DataImage = ({ src, alt }: IDataImage) => {
  const useStyles = createStyles((theme) => ({
    dataImage: {
      [theme.fn.smallerThan('md')]: { width: '100%' },
      width: '40%',
      margin: '0.5rem auto',
      borderRadius: 10,
    },
  }));

  const { classes } = useStyles();
  return (
    <div className={classes.dataImage} hidden={src ? false : true}>
      <Image src={src} alt={alt} />
    </div>
  );
};

export default DataImage;
