import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Grid, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  header: {
    height: '65px',
    display: 'flex',
    backgroundColor: '#023b56'
  },
  title: {
    fontSize: '30px',
    margin: '0 30px',
    color: '#FFFFFF'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    borderLeft: '1px solid',
    borderRight: '1px solid',
    borderColor: '#FFFFFF',
    '&:hover': {
      backgroundColor: '#011e2c'
    }
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.header}>
      <Grid item xs={2} style={{ display: 'flex', alignItems: 'center' }}>
        <h1 className={classes.title}>
          Micro Frontends
        </h1>
      </Grid>

      <Grid item xs={1} style={{ display: 'flex' }}>
        <ListItem
          button
          to="/react-parcel"
          component={Link}
          title="React Parcel"
          className={classes.listItem}
        >
          <ListItemText
            primary="React Parcel"
          />
        </ListItem>
      </Grid>

      <Grid item xs={1} style={{ display: 'flex' }}>
        <ListItem
          button
          to="/vue-parcel"
          component={Link}
          title="Vue Parcel"
          className={classes.listItem}
        >
          <ListItemText
            primary="Vue Parcel"
          />
        </ListItem>
      </Grid>
    </Grid>
  )
};

export default Header;