// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Uploader from './components/Uploader';
import PdfTable from './components/PdfTable';
import { fetchPdfs } from './utils/api';
import { Button, Box } from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);
  const [pdfUrls, setPdfUrls] = useState([]);  // Inicia como un array para prevenir fallos

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchPdfList = async () => {
    try {
      const data = await fetchPdfs();  // Usa la función para conseguir los datos
      console.log('PDF List:', data);  // Asegúrate de que los datos son lo que esperas
      setPdfUrls(data || []);  // Asigna siempre un array a `pdfUrls`
    } catch (error) {
      console.error('Error fetching PDFs:', error);
      setPdfUrls([]);  // Resetea a un array vacío en caso de error
    }
  };

  useEffect(() => {
    fetchPdfList();  // Activa la carga de PDFs al montar
  }, []);

  return (
    <Box>
      <Header />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, ml: '240px' }}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Upload PDF
        </Button>
        <Uploader open={open} handleClose={handleClose} fetchPdfList={fetchPdfList} />
        <PdfTable pdfUrls={pdfUrls} fetchPdfList={fetchPdfList} />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;