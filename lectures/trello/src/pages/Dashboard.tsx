import { Button, Container, Grid, TextField } from "@mui/material";
import { CustomCard } from "../components/Card";
import { CustomDialogs } from "../components/Dialog";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const projectSchema = Yup.object({
  projectName: Yup.string().required("El nombre del proyecto es requerido"),
});
function DashboardPage() {
  const formik = useFormik({
    initialValues: {
      projectName: "",
    },
    validationSchema: projectSchema,
    onSubmit: (values) => {
      
      setOpenDialog(false);
    },
  });
  const [openDialog, setOpenDialog] = useState(false);
  const openDialogHandler = () => {
    setOpenDialog(true);
  };

  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="lg">
      <CustomDialogs
        title="Agregar Proyecto"
        open={openDialog}
        onClose={closeDialogHandler}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          label="Nombre del Proyecto"
          id="projectName"
          value={formik.values.projectName}
          onChange={formik.handleChange}
          error={
            formik.touched.projectName && Boolean(formik.errors.projectName)
          }
          helperText={formik.touched.projectName && formik.errors.projectName}
        />
      </CustomDialogs>
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
