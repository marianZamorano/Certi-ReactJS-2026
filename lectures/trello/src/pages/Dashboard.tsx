import { Button, Container, Grid, TextField } from "@mui/material";
import { CustomCard } from "../components/Card";
import { CustomDialogs } from "../components/Dialog";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getStorage } from "../helpers/localStorage";
import { createProject, getProjectByUserId } from "../services/projectService";
import { v4 as uuidv4 } from "uuid";

const projectSchema = Yup.object({
  projectName: Yup.string().required("El nombre del proyecto es requerido"),
});
function DashboardPage() {
  const formik = useFormik({
    initialValues: {
      projectName: "",
    },
    validationSchema: projectSchema,
    onSubmit: async (values) => {
      const project = {
        id: uuidv4(),
        name: values.projectName,
        owner: user.id,
        date: new Date().toISOString(),
      };
      const response = await createProject(project);
      if (response) {
        setProjects((prevProjects) => [...prevProjects, response]);
        formik.resetForm();
      }
      setOpenDialog(false);
    },
  });
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const openDialogHandler = () => {
    setOpenDialog(true);
  };

  const closeDialogHandler = () => {
    setOpenDialog(false);
  };

  const getProjects = async (userId: string) => {
    try {
      const projects = await getProjectByUserId(userId);
      setProjects(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    const userStorage = getStorage("user");
    setUser(userStorage);
    if (userStorage) {
      getProjects(userStorage.id);
    }
  }, []);

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
        {projects.length > 0 ? (
          projects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <CustomCard key={project.id} title={project.name} />
            </Grid>
          ))
        ) : (
          <p>No hay proyectos disponibles</p>
        )}
      </Grid>
    </Container>
  );
}

export default DashboardPage;
