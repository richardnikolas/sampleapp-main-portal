import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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
    color: '#FFFFFF',
    cursor: 'pointer'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    padding: '0 30px',
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
  const { push } = useHistory();

  return (
    <Grid container className={classes.header}>
      <Grid item style={{ display: 'flex', alignItems: 'center' }}>
        <h1 className={classes.title} onClick={() => push('/')}>
          Main Portal
        </h1>
      </Grid>

      <Grid item style={{ display: 'flex', marginLeft: 30 }}>
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

      <Grid item style={{ display: 'flex' }}>
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