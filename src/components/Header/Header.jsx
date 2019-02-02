import React from 'react';
import styles from './styles';

import logo from '../../images/logo.svg';

// Material UI Components
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const Header = props => {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className={classes.root}>
          <Typography variant="h6" color="inherit">
            Reactter
          </Typography>
          <Button color="inherit">Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
