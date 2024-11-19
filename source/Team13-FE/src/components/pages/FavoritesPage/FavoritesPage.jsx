import React, { useState, useEffect } from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProductCard from './ProductCard';
import axios from 'axios';

const API_URL = 'https://66937520c6be000fa07b9d27.mockapi.io/favorites';

function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(API_URL);
        setFavorites(response.data);
      } catch (error) {
        console.error('Error fetching favorite products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const handleDeleteProduct = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((product) => product.id !== id));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ p: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        My favorites
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
        Your favorite items listed here
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : favorites.length === 0 ? (
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
          <ArrowForwardIcon sx={{ fontSize: 48, color: 'primary.main' }} />
          <Typography variant="body1" color="textSecondary" mt={2}>
            Looks like there are no favorites offer here
          </Typography>
        </Box>
      ) : (
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={2}
          mt={4}
          sx={{ width: '100%' }}
        >
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} onDelete={handleDeleteProduct} />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default FavoritesPage;
