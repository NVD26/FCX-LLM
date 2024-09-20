import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftNav from './components/LeftNav';
import Home from './pages/Home';
import FileUpload from './pages/FileUpload';
import DataViewer from './pages/DataViewer';
import Visualization from './pages/Visualization';
import { Box, Grid2 } from '@mui/material';

function App() {
  return (
    <Router>
      <div>
        <Header />
        &nbsp;
        <Box display="flex">
          <LeftNav />
          <Grid2 container direction="column" flex={1} sx={{ marginLeft: '200px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/file-upload" element={<FileUpload />} />
              <Route path="/data-viewer" element={<DataViewer />} />
              <Route path="/visualization" element={<Visualization />} />
            </Routes>
          </Grid2>
        </Box>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
