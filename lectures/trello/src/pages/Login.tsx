import { AccountCircle } from "@mui/icons-material";

import { Box, CardContent, InputAdornment, TextField } from "@mui/material";
import Container from "@mui/material/Container";
import PasswordIcon from "@mui/icons-material/Password";

function LoginPage() {
  return (
    <Container maxWidth="xs">
      <Box sx={{}}>
        <CardContent>
          <TextField
            id="input-email-textfield"
            label="Email"
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
            id="input-password-textfield"
            label="Password"
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
        </CardContent>
      </Box>
    </Container>
  );
}

export default LoginPage;
