import React, { useState, useEffect } from 'react';
import { Box, Button, Container, Typography, TextField, Avatar } from '@mui/material';
import { auth, provider } from '../../../config/firebaseConfig.js';
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

function ProfileSettings() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // Track edit state
  const [tempFirstName, setTempFirstName] = useState(''); // Temporary values to hold changes
  const [tempLastName, setTempLastName] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const [first, last] = user.displayName?.split(' ') || [];
        setFirstName(first || '');
        setLastName(last || '');
        setEmail(user.email);
        setProfilePhoto(user.photoURL);
      }
    });
  }, []);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const [first, last] = user.displayName?.split(' ') || [];
        setFirstName(first || '');
        setLastName(last || '');
        setEmail(user.email);
        setProfilePhoto(user.photoURL);
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setTempFirstName(firstName);
    setTempLastName(lastName);
  };

  const handleSaveClick = () => {
    setFirstName(tempFirstName);
    setLastName(tempLastName);
    setIsEditing(false);
    // You can add logic here to save the changes to Firebase if needed
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      {/* Profile Settings */}
      <Box sx={{ boxShadow: 3, padding: 3, borderRadius: 2, backgroundColor: 'white', marginBottom: 3 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">Profile settings</Typography>
          {isEditing ? (
            <>
              <Button variant="contained" size="small" onClick={handleSaveClick}>Save</Button>
              <Button variant="outlined" size="small" onClick={handleCancelClick} sx={{ marginLeft: 1 }}>Cancel</Button>
            </>
          ) : (
            <Button variant="outlined" size="small" onClick={handleEditClick}>✏️ Edit</Button>
          )}
        </Box>
        <Box mt={2}>
          <Typography variant="body1">First name</Typography>
          <TextField
            value={isEditing ? tempFirstName : firstName}
            onChange={(e) => setTempFirstName(e.target.value)}
            fullWidth
            disabled={!isEditing}
            variant="outlined"
            size="small"
            sx={{ marginBottom: 2 }}
          />
          
          <Typography variant="body1">Last name</Typography>
          <TextField
            value={isEditing ? tempLastName : lastName}
            onChange={(e) => setTempLastName(e.target.value)}
            fullWidth
            disabled={!isEditing}
            variant="outlined"
            size="small"
            sx={{ marginBottom: 2 }}
          />
          
          <Typography variant="body1">Mobile phone</Typography>
          <TextField
            placeholder="Not provided"
            fullWidth
            disabled
            variant="outlined"
            size="small"
            sx={{ marginBottom: 2 }}
          />
          
          <Typography variant="body1">Email address</Typography>
          <TextField
            value={email}
            fullWidth
            disabled
            variant="outlined"
            size="small"
            sx={{ marginBottom: 2 }}
          />
          
          <Typography variant="body1">State</Typography>
          <TextField
            placeholder="--------"
            fullWidth
            disabled
            variant="outlined"
            size="small"
          />
        </Box>
      </Box>

      {/* Profile Photo */}
      <Box sx={{ boxShadow: 3, padding: 3, borderRadius: 2, backgroundColor: 'white', marginBottom: 3 }}>
        <Typography variant="h6" fontWeight="bold">Profile photo</Typography>
        <Box display="flex" alignItems="center" mt={2}>
          <Avatar src={profilePhoto} sx={{ width: 100, height: 100, marginRight: 2 }} />
          <Button variant="outlined" component="label">Upload new
            <input type="file" hidden />
          </Button>
        </Box>
        <Button variant="contained" sx={{ marginTop: 2 }}>Save</Button>
      </Box>

      {/* Password */}
      <Box sx={{ boxShadow: 3, padding: 3, borderRadius: 2, backgroundColor: 'white', marginBottom: 3 }}>
        <Typography variant="h6" fontWeight="bold">Password</Typography>
        <Box mt={2}>
          <TextField
            placeholder="Current password"
            fullWidth
            type="password"
            disabled
            variant="outlined"
            size="small"
          />
          <Button variant="outlined" sx={{ marginTop: 2 }}>Change password</Button>
        </Box>
      </Box>

      {/* Logout Button */}
      <Button
        variant="contained"
        color="error"
        fullWidth
        onClick={() => auth.signOut()}
        sx={{ marginTop: 2 }}
      >
        Logout
      </Button>
    </Container>
  );
}

export default ProfileSettings;
