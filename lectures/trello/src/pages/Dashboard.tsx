import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { CustomCard } from "../components/Card";
import { CustomDialogs } from "../components/Dialog";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  createProject,
  deleteProject,
  getProjectByUserId,
  updateProject,
} from "../services/projectService";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";
import type { Project } from "../interfaces/projectInterface";
import { useNavigate } from "react-router-dom";
import { useTaskStore } from "../store/useProjectStore";
import { useAuthStore } from "../store/authStore";
import { useProjectsStore } from "../store/useProjectsStore";

const projectSchema = Yup.object({
  projectName: Yup.string().required("El nombre del proyecto es requerido"),
});
function DashboardPage() {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const {fetchProjects, removeProject, projects} = useProjectsStore((state) => state);
  
  const [openDialog, setOpenDialog] = useState(false);
  const [project, setProject] = useState(null);

  const task = useTaskStore((state) => state.task);
  console.log("from Dashboard", task);
  const deleteTask = useTaskStore((state) => state.deleteTask);

  const handleSubmit = async (values) => {
    let response;
    if (project?.name) {
      response = await updateProject({
        ...project,
        name: values.projectName,
      });

      if (response) {
        setProjects((prevProjects) =>
          prevProjects.map((p) => (p.id === response.id ? response : p))
        );
      }
    } else {
      response = await createProject({
        id: uuidv4(),
        name: values.projectName,
        owner: user.id,
        date: new Date().toISOString(),
      });
      if (response) {
        setProjects((prevProjects) => [...prevProjects, response]);
      }
    }

    formik.resetForm();
    setProject(null);
    setOpenDialog(false);
  };
  const formik = useFormik({
    initialValues: {
      projectName: "",
    },
    validationSchema: projectSchema,
    onSubmit: handleSubmit,
  });
  const openDialogHandler = () => {
    setOpenDialog(true);
  };

  const closeDialogHandler = async () => {
    await formik.resetForm();
    setOpenDialog(false);
  };

  const editProjectHandler = async (project: Project) => {
    formik.setValues({ projectName: project.name });
    setProject(project);
    setOpenDialog(true);
  };

  useEffect(() => {
    fetchProjects(user.id); 
    deleteTask();
  }, []);

  const goToProject = (projectId: string) => {
    navigate(`/app/projects/${projectId}`);
  };

  return (
    <Container maxWidth="lg">
      <CustomDialogs
        title={
          formik.values.projectName !== ""
            ? "Editar Proyecto"
            : "Agregar Proyecto"
        }
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

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={4}
        mb={4}
      >
        <Typography variant="h6" fontWeight="bold">
          Mis Proyectos
        </Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={openDialogHandler}
        >
          Agregar Proyecto
        </Button>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          marginTop: 2,
        }}
      >
        {projects.length > 0 ? (
          projects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <CustomCard
                action={() => {
                  goToProject(project.id);
                }}
                description={project.description}
                title={project.name}
                project={project}
                deleteProject={() => removeProject(project.id)}
                editProject={() => editProjectHandler(project)}
              />
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
