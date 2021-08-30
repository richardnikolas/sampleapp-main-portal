import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    backgroundColor: theme.palette.background.darkBlue
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: '50px',
    margin: '0 30px',
    color: '#FFFFFF',
    textAlign: 'center'
  },
}));


const Home = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.container}>
      <Grid item className={classes.titleWrapper}>
        <h1 className={classes.title}>
          A simple sample of the power of <br />Micro Frontends!
        </h1>
      </Grid>
    </Grid>
  );
}

export default Home;