import React, { useState, useEffect } from 'react';
import { Button, TextField, FormControl, Select, MenuItem, InputLabel, Box, IconButton, Container } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function AddItemDialog({ onClose, onAddProduct, onUpdateProduct, currentProduct }) {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [state, setState] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (currentProduct) {
      setProductName(currentProduct.productName);
      setDescription(currentProduct.description);
      setPrice(currentProduct.price);
      setCategory(currentProduct.category);
      setCondition(currentProduct.condition);
      setState(currentProduct.state);
      setImages(currentProduct.images || []);
    } else {
      resetForm();
    }
  }, [currentProduct]);

  const resetForm = () => {
    setProductName('');
    setDescription('');
    setPrice('');
    setCategory('');
    setCondition('');
    setState('');
    setImages([]);
  };

  const handleImageChange = (e) => {
    setImages([e.target.value]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const productData = {
      productName,
      description,
      price,
      category,
      condition,
      state,
      images
    };

    if (currentProduct) {
      onUpdateProduct({ ...productData, id: currentProduct.id });
    } else {
      onAddProduct(productData);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box component="form" onSubmit={handleSubmit} sx={{ position: 'relative', p: 2 }}>
        <IconButton onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>
          <CloseIcon />
        </IconButton>

        <TextField
          label="Product name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />

        <TextField
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Image URL"
          value={images[0] || ''}
          onChange={handleImageChange}
          fullWidth
          margin="normal"
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Category</InputLabel>
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Fashion">Fashion</MenuItem>
            <MenuItem value="Home">Home</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Condition</InputLabel>
          <Select value={condition} onChange={(e) => setCondition(e.target.value)}>
            <MenuItem value="New">New</MenuItem>
            <MenuItem value="Used">Used</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>State</InputLabel>
          <Select value={state} onChange={(e) => setState(e.target.value)}>
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Sold">Sold</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          {currentProduct ? 'Update Product' : 'Add Product'}
        </Button>
      </Box>
    </Container>
  );
}

export default AddItemDialog;
