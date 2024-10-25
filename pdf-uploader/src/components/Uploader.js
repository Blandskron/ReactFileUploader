// src/components/Uploader.js
import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Input } from '@mui/material';
import { uploadFile } from '../utils/api';

const Uploader = ({ open, handleClose, fetchPdfList }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    try {
      const response = await uploadFile(file);
      if (response.status === 201) {
        fetchPdfList();
        handleClose(); // Close modal on success
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
      <Box 
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          outline: 0
        }}
      >
        <Typography id="modal-title" variant="h6" align="center" gutterBottom>
          PDF Uploader
        </Typography>
        <Input type="file" accept="application/pdf" onChange={handleFileChange} fullWidth />
        <Button variant="contained" color="primary" onClick={handleUpload} style={{ marginTop: '10px' }} fullWidth>
          Upload
        </Button>
      </Box>
    </Modal>
  );
};

export default Uploader;