import { Button, Container, Grid } from "@mui/material";
import { CustomCard } from "../components/Card";

function DashboardPage() {
  return (
    <Container maxWidth="lg">
      <Button variant="contained">Agregar Proyecto</Button>
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
