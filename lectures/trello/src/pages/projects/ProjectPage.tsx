import { useEffect, useState } from "react";
import { Container, Typography, Button, TextField, Box } from "@mui/material";
import { DragDropContext } from "@hello-pangea/dnd";

import Board from "./Board";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import type { Project } from "../../interfaces/projectInterface";
import { getProjectById } from "../../services/projectService";
import { CustomDialogs } from "../../components/Dialog";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialData = {
  Pendiente: [
    {
      id: uuidv4(),
      title: "Definir Framework de CSS",
      description: "Elegir entre Bootstrap o Tailwind para el proyecto",
    },
    {
      id: uuidv4(),
      title: "Instalar dependencias",
      description: "MUI, react-dnd, etc.",
    },
  ],
  Rechazado: [],
  "En Espera": [],
  "En Progreso": [
    {
      id: uuidv4(),
      title: "Elaborar diseño inicial",
      description: "Elaborar el homepage en Figma",
    },
  ],
  "En Revisión": [
    {
      id: uuidv4(),
      title: "Elegir Hosting",
      description: "Elegir entre Vercel o Netlify",
    },
  ],
  Completado: [
    { id: uuidv4(), title: "Tarea completa", description: "Tarea completa" },
  ],
};

const taskSchema = Yup.object({
  title: Yup.string().required(),
  description: Yup.string().required(),
});

const ProjectPage = () => {
  const [columns, setColumns] = useState(initialData);
  const [project, setProject] = useState({} as Project);
  const [openDialog, setOpenDialog] = useState(false);

  const { projectId } = useParams();

  const getProjectFetch = async () => {
    const response = await getProjectById(projectId);
    setProject(response);
  };

  useEffect(() => {
    getProjectFetch();
  }, []);

  const handleSubmit = (values) => {
    console.log("HOLLAAA PARECE QUE SABES");
    setColumns({
      ...columns,
      Pendiente: [
        ...columns.Pendiente,
        {
          id: uuidv4(),
          title: values.title,
          description: values.description,
        },
      ],
    });
  };

  const openDialogHandler = () => {
    setOpenDialog(true);
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: taskSchema,
    onSubmit: handleSubmit,
  });

  const closeDialogHandler = async () => {
    await formik.resetForm();
    setOpenDialog(false);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = [...columns[source.droppableId]];
    const destCol = [...columns[destination.droppableId]];
    const [movedItem] = sourceCol.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceCol.splice(destination.index, 0, movedItem);

      setColumns((prev) => ({
        ...prev,
        [source.droppableId]: sourceCol,
      }));
    } else {
      destCol.splice(destination.index, 0, movedItem);

      setColumns((prev) => ({
        ...prev,
        [source.droppableId]: sourceCol,
        [destination.droppableId]: destCol,
      }));
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <CustomDialogs
        title="Agregar Tarea"
        open={openDialog}
        onClose={closeDialogHandler}
        onSubmit={formik.handleSubmit}
      >
        <Box>
          <TextField
            label="Nombre de la Tarea"
            id="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            label="Descripcion de la Tarea"
            id="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
        </Box>
      </CustomDialogs>
      <Typography variant="h4" gutterBottom>
        {project.name}
      </Typography>
      <Typography variant="body1" mb={2}>
        {project.description}
      </Typography>
      <Button
        variant="contained"
        sx={{ mb: 3 }}
        color="secondary"
        onClick={openDialogHandler}
      >
        Agregar Tarea
      </Button>
      <DragDropContext onDragEnd={onDragEnd}>
        <Board columns={columns} />
      </DragDropContext>
    </Container>
  );
};

export default ProjectPage;
