import React, { useState } from 'react';

import {
  Box,
  Typography,
  Card,
  CardActions,
  Button,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import axios from 'axios';
import OffcanvasSelectOrder from '../../clientComponent/OffcanvasSelectOrder/OffcanvasSelectOrder';
import OffcanvasListItems from '../../clientComponent/OffcanvasListItems/OffcanvasListItems';

const API_URL = 'https://66937520c6be000fa07b9d27.mockapi.io/favorites';

function ProductCard({ product, onDelete }) {
  const [stateShowButtonListItems, setStateShowButtonListItems] = useState(false);
  const [stateShowListItems, setStateShowListItems] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const handleShowButtonListItems = () => {
    setStateShowButtonListItems(true);
  };

  const handleCloseButtonListItems = () => {
    setStateShowButtonListItems(false);
  };

  const handleShowListItems = () => {
    setStateShowListItems(true);
  };

  const handleCloseListItems = () => {
    setStateShowListItems(false);
    setStateShowButtonListItems(false);
  };

  const handleOpenConfirmDialog = () => {
    setOpenConfirmDialog(true);
  };

  const handleCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/${product.id}`);
      onDelete(product.id); // Callback to update the parent component
      setOpenConfirmDialog(false);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (!product) {
    return null;
  }

  return (
    <>
      <Card
        sx={{
          width: 300,
          boxShadow: 3,
          borderRadius: 3,
          overflow: 'hidden',
          transition: 'transform 0.3s, box-shadow 0.3s',
          ':hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
          },
        }}
      >
        {/* Product Image */}
        <Box
          component="img"
          src={
            product.images && product.images.length > 0
              ? product.images[0]
              : 'https://via.placeholder.com/300x150'
          }
          alt={product.productName || 'Product Image'}
          sx={{
            width: '100%',
            height: 170,
            objectFit: 'cover',
            backgroundColor: '#f0f0f0',
          }}
        />
        {/* Seller Name */}
        <Box
          sx={{
            backgroundColor: '#007bff',
            color: '#fff',
            textAlign: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '5px 0',
          }}
        >
          {product.sellerName || "Owner's offer"}
        </Box>
        {/* Product Details */}
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
            Valued: <strong>${product.price}</strong> 💸 Partial Cash
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
          >
            {product.productName}
          </Typography>
          <Typography variant="body2" sx={{ color: '#888', mt: 1 }}>
            📍 {product.location || 'Location not provided'}
          </Typography>
        </Box>
        {/* Actions */}
        <CardActions sx={{ justifyContent: 'space-between', px: 2, py: 1, backgroundColor: '#f9f9f9' }}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            startIcon={<AddCircleOutlineIcon />}
            sx={{ textTransform: 'none', backgroundColor: '#8a2be2' }}

            onClick={handleShowButtonListItems}
          >
            Make an offer
          </Button>
          <IconButton color="primary" onClick={handleOpenConfirmDialog}>

            <FavoriteIcon sx={{ color: '#8a2be2' }} />
          </IconButton>
        </CardActions>
      </Card>


      {/* Delete Confirmation Dialog */}
      <Dialog open={openConfirmDialog} onClose={handleCloseConfirmDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to remove this product from your favorites?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Offcanvas Components */}
      <OffcanvasSelectOrder
        stateShowListItem={stateShowButtonListItems}
        handleClose={handleCloseButtonListItems}
        placement={'end'}
        name={'end'}
        handleShowListItems={handleShowListItems}
      />
      <OffcanvasListItems
        StateShowListItems={stateShowListItems}
        handleClose={handleCloseListItems}
        placement={'end'}
        name={'end'}
      />

    </>
  );
}

export default ProductCard;
