import React, { useState, useEffect, useContext } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  IconButton,
  InputAdornment,
} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { auth, provider } from '../../../config/firebaseConfig.js';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { UserContextStore } from "../../../Context/UserContext.jsx";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { handleUserLogin } = useContext(UserContextStore);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  // Đăng nhập bằng Google
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem("email", data.user.email);
      handleUserLogin({ user: { userName: data.user.displayName, userEmail: data.user.email } });
      navigate('/homepage'); // Điều hướng đến trang chính sau khi đăng nhập thành công
    }).catch((error) => {
      console.error("Error signing in: ", error);
    });
  };

  // Đăng nhập bằng email và mật khẩu
  const handleEmailLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      handleUserLogin({ user: { userName: userCredential.user.displayName, userEmail: userCredential.user.email } });
      navigate('/homepage'); // Điều hướng đến trang chính sau khi đăng nhập thành công
    }).catch((error) => {
      console.error("Error signing in:", error);
    });
  };

  useEffect(() => {
    setEmail(localStorage.getItem('email') || '');
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ maxWidth: 400, margin: "auto", padding: "20px", boxShadow: 3, borderRadius: 2 }}
    >
      <Typography variant="h5" component="h1" sx={{ marginBottom: "20px" }}>
        Welcome back
      </Typography>

      <Button
        onClick={handleGoogleLogin}
        variant="contained"
        startIcon={<GoogleIcon />}
        sx={{ marginBottom: "20px", backgroundColor: "#4285F4" }}
        fullWidth
      >
        Login with Google
      </Button>

      <Typography variant="body2" sx={{ marginBottom: "20px" }}>
        Or, login with your email
      </Typography>

      <Box component="form" onSubmit={handleEmailLogin} noValidate sx={{ width: '100%' }}>
        <TextField
          label="Email Address"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Link href="#" variant="body2" sx={{ display: 'block', mt: 1, textAlign: 'right' }}>
          Forgot password?
        </Link>

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2, mb: 2 }}>
          Login
        </Button>
      </Box>

      <Typography variant="body2" sx={{ mt: 3 }}>
        {"Don't have an account? "}
        <Link href="/signup">Create account</Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
