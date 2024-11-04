import React, { useState } from 'react';
import { Box, Button, Container, TextField, Avatar, Typography } from '@mui/material';

function ProfileSettings() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [email, setEmail] = useState('example@gmail.com');
  const [state, setState] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleFileUpload = (event) => {
    setProfilePhoto(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Box sx={{ boxShadow: 3, padding: 3, borderRadius: 2, backgroundColor: 'white' }}>
        <Typography variant="h6" gutterBottom>Profile settings</Typography>
        
        {/* Profile Form */}
        <TextField
          fullWidth
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Mobile Phone"
          value={mobilePhone}
          onChange={(e) => setMobilePhone(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          disabled
        />
        <TextField
          fullWidth
          label="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          margin="normal"
        />

        {/* Profile Photo */}
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h6" gutterBottom>Profile photo</Typography>
          <Avatar src={profilePhoto} sx={{ width: 100, height: 100, marginBottom: 2 }} />
          <Button variant="contained" component="label">
            Upload new
            <input type="file" hidden onChange={handleFileUpload} />
          </Button>
        </Box>

        {/* Password Section */}
        <Box sx={{ marginTop: 3 }}>
          <Typography variant="h6" gutterBottom>Password</Typography>
          <Button variant="contained">Change password</Button>
        </Box>

        {/* Logout Button */}
        <Box sx={{ marginTop: 3 }}>
          <Button variant="outlined" color="error" fullWidth>Logout</Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ProfileSettings;
