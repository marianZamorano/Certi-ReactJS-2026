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
import { AccountCircle } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

import Toast from "../components/toast";
import { useLogin } from "../hooks/useLogin";

function LoginPage() {
  const { loginError, setLoginError, formik } = useLogin();
  const { t } = useTranslation();

  return (
    <Container maxWidth="xs">
      <Toast
        open={loginError}
        message={t("login.errorToastMessage")}
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
            {t("login.title")}
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="input-email-textfield"
              label={t("login.emailLabel")}
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
              label={t("login.passwordLabel")}
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
              {t("login.button")}
            </Button>
          </form>
        </CardContent>
      </Box>
    </Container>
  );
}

export default LoginPage;
