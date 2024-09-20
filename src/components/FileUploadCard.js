import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Box } from '@mui/material';

const FileUploadCard = () => {
  const [dataSheet, setDataSheet] = useState(null);
  const [dataFile, setDataFile] = useState(null);

  const handleFileUpload = (event, setFile) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('dataSheet', dataSheet);
    formData.append('dataFile', dataFile);

    // Trigger your API here
    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    }).then(response => {
      // Handle response
      console.log('Files uploaded successfully');
    });
  };

  return (
    
    <Card>
        &nbsp;
      <CardContent>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            type="file"
            onChange={(e) => handleFileUpload(e, setDataSheet)}
            label="Upload Sample Data Sheet"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            type="file"
            onChange={(e) => handleFileUpload(e, setDataFile)}
            label="Upload Sample Data File"
            InputLabelProps={{ shrink: true }}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FileUploadCard;
