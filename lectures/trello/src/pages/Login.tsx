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

const loginSchema = yup.object({
  email: yup.string().email("No es un email valido").required(),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required(),
});

function LoginPage() {

  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8 }}>
        <CardContent
          sx={{
            marginTop: 25,
            padding: 4,
            textAlign: "center",
            boxShadow: 3,
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
