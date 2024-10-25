// src/components/Uploader.js
import React, { useState, useEffect } from 'react';
import { uploadFile, fetchPdfs } from '../utils/api';
import { Container, Typography, Button, List, ListItem, ListItemText, Input, Box } from '@mui/material';

const Uploader = () => {
  const [file, setFile] = useState(null);
  const [pdfUrls, setPdfUrls] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    try {
      const response = await uploadFile(file);
      if (response.status === 201) {
        fetchPdfList();
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const fetchPdfList = async () => {
    try {
      const response = await fetchPdfs();
      setPdfUrls(response.data);
    } catch (error) {
      console.error('Error fetching PDFs:', error);
    }
  };

  useEffect(() => {
    fetchPdfList();
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        PDF Uploader
      </Typography>
      <Input type="file" accept="application/pdf" onChange={handleFileChange} />
      <Button variant="contained" color="primary" onClick={handleUpload} style={{ marginTop: '10px' }}>
        Upload
      </Button>
      <Typography variant="h5" align="center" gutterTop style={{ marginTop: '20px' }}>
        Uploaded PDFs
      </Typography>
      <Box mt={2}>
        <List>
          {pdfUrls.map((pdf, index) => (
            <ListItem key={index} button component="a" href={pdf.url} target="_blank" rel="noopener noreferrer">
              <ListItemText primary={pdf.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Uploader;