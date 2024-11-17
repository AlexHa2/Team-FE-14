import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './ProductCard.css'; // Ensure you have a separate CSS file for styling

function ProductCard({ image, price, productName, location, ownerName, onDelete, onEdit }) {
  return (
    <Card className="product-card">
      <Box className="card-media-container">
        <CardMedia
          component="img"
          height="200"
          image={image || 'https://via.placeholder.com/250'}
          alt={productName}
          className="product-image"
        />
        <Box className="owner-strip">
          <Typography variant="body2" className="owner-text">
            {ownerName}'s offer
          </Typography>
        </Box>
      </Box>
      <Box className="make-offer-section">
        <Typography className="make-offer-text">Make an offer</Typography>
        <Box className="offer-icon">+</Box>
      </Box>
      <CardContent>
        <Typography variant="body2" className="item-value">
          valued: <strong>${price}</strong> 💸 Partial Cash
        </Typography>
        <Typography variant="body2" className="item-description">
          {productName}
        </Typography>
        <Typography variant="body2" className="item-location">
          📍 {location}
        </Typography>
      </CardContent>
      <Box className="card-actions">
        <IconButton onClick={onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  );
}

export default ProductCard;
