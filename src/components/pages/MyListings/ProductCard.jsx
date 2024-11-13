import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function ProductCard({ image, price, productName, state, onDelete, onEdit }) {
  return (
    <Card style={{ width: '300px', margin: '10px', position: 'relative' }}>
      <CardMedia
        component="img"
        height="250" // Điều chỉnh chiều cao hình ảnh
        image={image || 'https://via.placeholder.com/250'} // Thêm hình ảnh mặc định nếu không có
        alt={productName}
        style={{ objectFit: 'cover' }} // Giữ tỷ lệ hình ảnh
      />
      <CardContent>
        <Typography variant="h6">{productName}</Typography>
        <Typography variant="body2">Price: ${price}</Typography>
        <Typography variant="body2">State: {state || 'N/A'}</Typography>
      </CardContent>

      {/* Nút Sửa và Xóa */}
      <div style={{ position: 'absolute', bottom: '10px', right: '10px', display: 'flex' }}>
        <IconButton
          onClick={onEdit}
          style={{
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            marginRight: '5px'
          }}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={onDelete}
          style={{
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          <DeleteIcon />
        </IconButton>
      </div>
    </Card>
  );
}

export default ProductCard;
