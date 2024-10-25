// src/components/PdfTable.js
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { deletePdf } from '../utils/api';

const PdfTable = ({ pdfUrls = [], fetchPdfList }) => {  // Asegurar array vacío por defecto
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleClickOpen = (pdf) => {
    setSelectedPdf(pdf);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setSelectedPdf(null);
  };

  const handleDelete = async () => {
    try {
      if (selectedPdf) {
        await deletePdf(selectedPdf.name);
        fetchPdfList(); // Refresca la lista tras borrar un archivo
      }
    } catch (error) {
      console.error('Error deleting file:', error);
    } finally {
      handleClose();  // Cierre del diálogo
    }
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pdfUrls.map((pdf, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {pdf.name}
                </TableCell>
                <TableCell align="right">
                  <Button variant="outlined" href={pdf.url} target="_blank" rel="noopener noreferrer">
                    View
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => handleClickOpen(pdf)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the document "{selectedPdf && selectedPdf.name}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PdfTable;