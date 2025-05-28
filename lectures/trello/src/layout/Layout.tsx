import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Container component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Outlet />
      </Container>
    </Box>
  );
};
