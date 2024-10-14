import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddItemDialog from './AddItemDialog';
import { Box } from '@mui/material';

function MyListings() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Box display="flex" justifyContent="space-between" alignItems="flex-start">
      <div style={{ flex: 1 }}>
        <h1>My Listings</h1>
        <p>You can manage your listed items here.</p>
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>
          List a new item
        </Button>
      </div>

      {isDialogOpen && (
        <div style={{ width: '30%', padding: '20px', borderLeft: '1px solid #ddd' }}>
          <AddItemDialog open={isDialogOpen} onClose={handleCloseDialog} />
        </div>
      )}
    </Box>
  );
}

export default MyListings;