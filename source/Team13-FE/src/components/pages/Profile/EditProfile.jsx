import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem } from '@mui/material';

function ChangeAccountDetails({ open, onClose }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [state, setState] = useState('');

  const handleSaveChanges = () => {
    // Logic to save changes
    onClose(); // Close modal after saving
  };

  return (
   <div>
    <DialogTitle>Change account details</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Mobile phone"
          value={mobilePhone}
          onChange={(e) => setMobilePhone(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          margin="normal"
          select
        >
          <MenuItem value="State1">State1</MenuItem>
          <MenuItem value="State2">State2</MenuItem>
          <MenuItem value="State3">State3</MenuItem>
          {/* Add more states as needed */}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">Cancel</Button>
        <Button onClick={handleSaveChanges} variant="contained" color="primary" sx={{ bgcolor: 'purple' }}>
          Save changes
        </Button>
      </DialogActions>

   </div>
      
    
  );
}

export default ChangeAccountDetails;
