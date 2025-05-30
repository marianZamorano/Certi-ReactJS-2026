import { Button, Container, Grid } from "@mui/material";
import { CustomCard } from "../components/Card";
import { CustomDialogs } from "../components/Dialog";
import { useState } from "react";

function DashboardPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const openDialogHandler = () => {
    setOpenDialog(true);
  };

  const closeDialogHandler = () => { 
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="lg">
      <CustomDialogs open={openDialog} onClose={closeDialogHandler} />
      <Button variant="contained" onClick={openDialogHandler}>
        Agregar Proyecto
      </Button>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: 2,
        }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <CustomCard title="Proyecto 1" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <CustomCard title="Proyecto 2" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
          <CustomCard title="Proyecto 3" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default DashboardPage;
