import React, { useState, useEffect } from 'react';
import { Box, Button, Dialog, AppBar, Toolbar, IconButton, Typography, Slide, Container, useMediaQuery, useTheme } from '@mui/material';
import AddItemDialog from './AddItemDialog';
import ProductCard from './ProductCard';
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

const API_URL = "https://66937520c6be000fa07b9d27.mockapi.io/products";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function MyListings() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        const sortedProducts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = async (newProduct) => {
    try {
      const response = await axios.post(API_URL, newProduct);
      setProducts([response.data, ...products]);
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      const response = await axios.put(`${API_URL}/${updatedProduct.id}`, updatedProduct);
      const updatedProducts = products.map((product) =>
        product.id === updatedProduct.id ? response.data : product
      );
      setProducts(updatedProducts);
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleOpenDialog = (product = null) => {
    setCurrentProduct(product);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setCurrentProduct(null);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ p: 3 }}>
      {/* Phần tiêu đề và nút căn giữa */}
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <Typography variant="h4" align="center" gutterBottom>
          My Listings
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          You can manage your listed items here.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => handleOpenDialog()} sx={{ mt: 2 }}>
          List a new item
        </Button>
      </Box>

      {/* Danh sách sản phẩm */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center', // Căn giữa các sản phẩm
          gap: 3, // Khoảng cách giữa các sản phẩm
          marginTop: '20px',
        }}
      >
        {products.length === 0 ? (
          <Typography variant="body1" align="center">No products available</Typography>
        ) : (
          products.map((product) => (
            <Box
              key={product.id}
              sx={{
                flexBasis: 'calc(33.333% - 16px)', // Cài đặt độ rộng mỗi sản phẩm chiếm 1/3 chiều rộng container
                minWidth: '280px', // Độ rộng tối thiểu
                boxSizing: 'border-box',
              }}
            >
              <ProductCard
                image={product.images && product.images.length > 0 ? product.images[0] : ''}
                price={product.price}
                productName={product.productName}
                state={product.state}
                onDelete={() => handleDeleteProduct(product.id)}
                onEdit={() => handleOpenDialog(product)}
              />
            </Box>
          ))
        )}
      </Box>

      {/* Dialog for Add/Edit Item */}
      <Dialog
        fullScreen={fullScreen}
        open={isDialogOpen}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
        PaperProps={{
          sx: fullScreen
            ? { width: '100%', maxWidth: '100%' }
            : { width: '30%', right: 0, position: 'absolute', maxWidth: '100%', overflowX: 'hidden' }
        }}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseDialog}
              aria-label="close"
              sx={{ marginRight: 2 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ flex: 1 }} variant="h6" component="div">
              {currentProduct ? 'Edit Product' : 'List a new item'}
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <AddItemDialog
            onClose={handleCloseDialog}
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            currentProduct={currentProduct}
          />
        </Container>
      </Dialog>
    </Box>
  );
}

export default MyListings;
