import { AccountCircle } from "@mui/icons-material";

import {
  Box,
  Button,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import PasswordIcon from "@mui/icons-material/Password";
import * as yup from "yup";
import { useFormik } from "formik";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import Toast from "../components/toast";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("No es un email valido")
    .required("El email es requerido"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es requerida"),
});

function LoginPage() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const { login: loginContext } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "admin@example.com",
      password: "password123",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const responseLogin = await login(values.email, values.password);
      if (!responseLogin) {
        setLoginError(true);
        formik.resetForm();
        return;
      }
      loginContext(responseLogin);
      navigate("/app/dashboard", {
        replace: true,
      });
    },
  });

  return (
    <Container maxWidth="xs">
      <Toast
        open={loginError}
        message="Usuario Incorrecto"
        severity="error"
        onClose={() => setLoginError(false)}
      />
      <Box sx={{ marginY: 8 }}>
        <CardContent
          sx={{
            marginTop: 25,
            padding: 4,
            textAlign: "center",
            boxShadow: 3,
            paddingBottom: 12,
          }}
        >
          <Typography
            sx={{ marginY: 2 }}
            variant="h5"
            component="h1"
            gutterBottom
          >
            Iniciar Sesión
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="input-email-textfield"
              label="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              helperText={formik.touched.email && formik.errors.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                },
              }}
              variant="standard"
            />

            <TextField
              fullWidth
              id="input-password-textfield"
              label="Password"
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordIcon />
                    </InputAdornment>
                  ),
                },
              }}
              variant="standard"
            />

            <Button
              type="submit"
              sx={{
                marginTop: 2,
                width: "100%",
              }}
              variant="contained"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Box>
    </Container>
  );
}

export default LoginPage;