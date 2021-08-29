import React from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '100%'
  },
  container: {
    height: '100%',
    flex: '1 1 100%',
  },
}));

const Main = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.mainContainer}>
        {children}
      </Grid>
    </Grid>
  )
};

export default Main;