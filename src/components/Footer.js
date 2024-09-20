import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{ bgcolor: '#ADD8E6', p: 2, position: 'fixed', bottom: 0, width: '100%' }}
    >
      <Typography variant="body2" align="center">
        Version 1.0 | Contact: office@itsc.uah.edu  | <Link href="#">Privacy Policy</Link>
      </Typography>
    </Box>
  );
};

export default Footer;
