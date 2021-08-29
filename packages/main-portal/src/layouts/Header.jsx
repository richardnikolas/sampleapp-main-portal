import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Grid, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  header: {
    height: '60px',
    display: 'flex',
    backgroundColor: '#023b56'
  },
  title: {
    fontSize: '30px',
    margin: '10px 30px',
    color: '#FFFFFF'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.header}>
      <Grid item xs={4} style={{ display: 'flex', alignItems: 'center' }}>
        <h1 className={classes.title}>
          Micro Frontends
        </h1>
      </Grid>

      <Grid item xs={2}>
        <ListItem
          button
          to="/react-parcel"
          component={Link}
          title="React Parcel"
        >
          <ListItemText
            primary="React Parcel"
          />
        </ListItem>
      </Grid>
    </Grid>
  )
};

export default Header;