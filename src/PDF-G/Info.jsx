import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PdfDocument from './PdfDocument'; // Import your PdfDocument component
import ReactPDF from '@react-pdf/renderer';

export default function Info() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGeneratePDF = () => {
    const pdfContent = (
        ReactPDF.render(<PdfDocument name={formData.name} description={formData.description} />,`${__dirname}/example.pdf`)
        
    );

    
    console.log(pdfContent);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="description"
            label="description"
            type="description"
            id="description"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleGeneratePDF}
          >
            Generate PDF
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
