import * as React from 'react';
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Container,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { FcGoogle } from 'react-icons/fc'; 
import { Visibility, VisibilityOff } from '@mui/icons-material'; 

function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Welcome back
        </Typography>
        <Typography variant="body1" sx={{ mt: 1, textAlign: 'center' }}>
          Please enter your email and password to login <br /> your account.
        </Typography>
        <Button
          fullWidth
          variant="outlined"
          startIcon={<FcGoogle />} 
          sx={{ mt: 2 }}
        >
          Login with Google
        </Button>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                    sx={{
                      color: 'grey.600', 
                      '&:hover': {
                        color: 'grey.800', 
                      },
                    }}
                  >
                    {showPassword ? (
                      <VisibilityOff sx={{ fontSize: 24 }} /> 
                    ) : (
                      <Visibility sx={{ fontSize: 24 }} /> 
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Link href="#" variant="body2" sx={{ display: 'block', mt: 1, textAlign: 'right' }}>
            Forgot password?
          </Link>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Login
          </Button>
          <Box sx={{ mt: 3 }}>
            <Link href="#" variant="body2">
              {"Don't have an account? Create account"}
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginForm;