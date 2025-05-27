import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const goToRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <Button variant="contained" onClick={goToLogin}>
        Login
      </Button>
      <Button variant="contained" onClick={goToRegister}>
        Register
      </Button>
    </>
  );
}

export default DashboardPage;
