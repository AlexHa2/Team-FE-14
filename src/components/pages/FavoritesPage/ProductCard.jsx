import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, CardActions, Button, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import OffcanvasSelectOrder from '../../clientComponent/OffcanvasSelectOrder/OffcanvasSelectOrder';
import OffcanvasListItems from '../../clientComponent/OffcanvasListItems/OffcanvasListItems';

function ProductCard({ product }) {
  const [stateShowButtonListimes, setstateShowButtonListimes] = useState(false)
  const [stateShowListItems, setstateShowListItems] = useState(false)

  const handleShowShowButtonListimes = () => {
    setstateShowButtonListimes(true)
}

  const handleCloseShowButtonListimes = () => {
    setstateShowButtonListimes(false)
  }


  const handleShowListItems = (name) => {
    setstateShowListItems(true)
    // setSelectedItemId(id);
  }

  const handleCloseListItems = () => {
    setstateShowListItems(false)
    setstateShowButtonListimes(false)
  }

  return (
    <>
      <Card sx={{ width: 300, boxShadow: 3, borderRadius: 2, overflow: 'hidden', border: '1px solid #e0e0e0' }}>
        <Box
          component="img"
          src={product.image[0]}
          alt={product.name}
          sx={{ width: '100%', height: 150, objectFit: 'cover' }}
        />
        <CardContent sx={{ p: 2 }}>
          <Typography variant="subtitle2" color="textSecondary" fontWeight="bold">
            {product.sellerName || "Seller's offer"} {/* Hiển thị tên người bán nếu có */}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1 }}>
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Valued: ${product.price} - Partial Cash
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            {product.location}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', px: 2, py: 1, backgroundColor: '#f7f7f7' }}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            startIcon={<AddCircleOutlineIcon />}
            sx={{ textTransform: 'none', backgroundColor: '#8a2be2' }}
            onClick={() => handleShowShowButtonListimes(product.name)}
          >
            Make an offer
          </Button>
          <IconButton color="primary">
            <FavoriteIcon sx={{ color: '#8a2be2' }} />
          </IconButton>
        </CardActions>
      </Card>
      <div>
        <OffcanvasSelectOrder stateShowListItem={stateShowButtonListimes} handleClose={handleCloseShowButtonListimes} placement={'end'} name={'end'} handleShowListItems={handleShowListItems}  
        />
      </div>
      <div>
        <OffcanvasListItems StateShowListItems={stateShowListItems} handleClose={handleCloseListItems} placement={'end'} name={'end'}  />
      </div>
    </>
  );
}

export default ProductCard;
