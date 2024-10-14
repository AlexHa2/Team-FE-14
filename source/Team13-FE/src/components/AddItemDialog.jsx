import React, { useState } from 'react';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function AddItemDialog({ open, onClose }) {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [state, setState] = useState('');
  const [acceptLowerPrice, setAcceptLowerPrice] = useState(false);
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    setImages([...images, event.target.files[0]]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      productName,
      description,
      price,
      category,
      condition,
      state,
      acceptLowerPrice,
      images,
    });
    onClose(); // Đóng dialog sau khi submit
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ position: 'relative' }}>
      {/* Nút đóng (X) */}
      <IconButton 
        onClick={onClose} 
        style={{ position: 'absolute', top: '10px', right: '10px' }}
      >
        <CloseIcon />
      </IconButton>

      {/* Thay đổi phần chọn hình thành hình vuông có dấu cộng */}
      <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleImageUpload}
        hidden
      />
      <label htmlFor="contained-button-file">
        <Box
          sx={{
            width: '100%',
            height: '200px',
            border: '2px dashed #ccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            marginBottom: '16px',
          }}
        >
          <span style={{ fontSize: '2rem', color: '#ccc' }}>+</span>
        </Box>
        <span>max 8 images (4mb per image)</span>
      </label>

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

      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="furniture">Furniture</MenuItem>
          <MenuItem value="clothing">Clothing</MenuItem>
          <MenuItem value="books">Books</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Condition</InputLabel>
        <Select value={condition} onChange={(e) => setCondition(e.target.value)}>
          <MenuItem value="new">New</MenuItem>
          <MenuItem value="used">Used</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>State</InputLabel>
        <Select value={state} onChange={(e) => setState(e.target.value)}>
          <MenuItem value="available">Available</MenuItem>
          <MenuItem value="sold">Sold</MenuItem>
        </Select>
      </FormControl>

      <FormControlLabel
        control={
          <Checkbox
            checked={acceptLowerPrice}
            onChange={(e) => setAcceptLowerPrice(e.target.checked)}
          />
        }
        label="Accept that people may offer products with lower prices than your offer"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        List Item
      </Button>
    </Box>
  );
}

export default AddItemDialog;
