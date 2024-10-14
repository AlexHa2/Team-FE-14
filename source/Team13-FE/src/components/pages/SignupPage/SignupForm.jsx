import React from "react";
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

const SignupForm = () => {
  return (
  //   <div>
  //   <h1>This is a test</h1>
  // </div>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ maxWidth: 400, margin: "auto", padding: "20px", boxShadow: 3, borderRadius: 2 }}
    >
      <Typography variant="h5" component="h1" sx={{ marginBottom: "20px" }}>
        Let's get your account set up
      </Typography>

      { <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        sx={{ marginBottom: "20px", backgroundColor: "#4285F4" }}
        fullWidth
      >
        Sign up with Google
      </Button> }

      <Typography variant="body2" sx={{ marginBottom: "20px" }}>
        Or, sign up with your email
      </Typography>

      <TextField label="First name" variant="outlined" margin="normal" fullWidth />
      <TextField label="Last name" variant="outlined" margin="normal" fullWidth />
      <TextField label="Email address" variant="outlined" margin="normal" fullWidth />
      <TextField label="Password" variant="outlined" margin="normal" type="password" fullWidth />
      <TextField
        label="Password Confirmation"
        variant="outlined"
        margin="normal"
        type="password"
        fullWidth
      />

      <FormControlLabel
        control={<Checkbox />}
        label="By creating an account you agree to our Terms and Conditions and Privacy Policy."
        sx={{ marginBottom: "20px" }}
      />

      <Button variant="contained" color="primary" fullWidth>
        Create account
      </Button>

      <Typography variant="body2" sx={{ marginTop: "20px" }}>
        Already have an account? <a href="/login">Log in</a>
      </Typography>
    </Box>
    
  );
  
};

export default SignupForm;
