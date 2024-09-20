import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div style={{ width: '200px' }}>
      <List component="nav">
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/file-upload">
          <ListItemText primary="File Upload" />
        </ListItem>
        <ListItem button component={Link} to="/data-viewer">
          <ListItemText primary="Data Viewer" />
        </ListItem>
        <ListItem button component={Link} to="/visualization">
          <ListItemText primary="Visualization" />
        </ListItem>
      </List>
    </div>
  );
};

export default LeftNav;
