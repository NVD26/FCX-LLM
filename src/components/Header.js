import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#ADD8E6' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FCX-LLM
        </Typography>
        <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
