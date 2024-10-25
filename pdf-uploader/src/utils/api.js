// src/utils/api.js
import axios from 'axios';
import { BASE_URL } from '../constants';

// Función para subir un archivo
export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post(`${BASE_URL}/upload/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// Función para obtener la lista de archivos PDF
export const fetchPdfs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pdfs/`);
    console.log('Received PDF Data:', response.data);  // Log para verificar lo que se recibe
    return response.data;  // Devuelve la data directamente
  } catch (error) {
    console.error('Error fetching PDFs:', error);
    return [];  // Devuelve un array vacío en caso de error
  }
};

// Función para eliminar un archivo PDF
export const deletePdf = async (name) => {
  try {
    await axios.delete(`${BASE_URL}/pdfs/`, { params: { name } });
  } catch (error) {
    console.error('Error deleting PDF:', error);
    throw error;  // Lanza el error para manejo en el componente
  }
};