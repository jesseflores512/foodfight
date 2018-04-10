import React from 'react';
import { AppBar, Toolbar, Typography } from 'material-ui';
import IconButton from 'material-ui/IconButton';
//import Icon from '@material-ui/icons/Menu';
import Button from 'material-ui/Button';

export default props =>
  <AppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu">

      </IconButton>
      <Typography variant="headline" color="inherit">
        Food Fight
      </Typography>
      <Button color="inherit">Menu</Button>
    </Toolbar>
  </AppBar>
