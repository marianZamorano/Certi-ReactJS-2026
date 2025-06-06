import { useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import { DragDropContext } from "@hello-pangea/dnd";

import Board from "./Board";
import { v4 as uuidv4 } from "uuid";

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
  "Rechazado": [],
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

const ProjectPage = () => {
  const [columns, setColumns] = useState(initialData);

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
      <Typography variant="h4" gutterBottom>
        Ecommerce para ADIDAS
      </Typography>
      <Typography variant="body1" mb={2}>
        Ecommerce en Remix y Shopify para ADIDAS
      </Typography>
      <Button variant="contained" sx={{ mb: 3 }} color="secondary">
        Agregar Tarea
      </Button>
      <DragDropContext onDragEnd={onDragEnd}>
        <Board columns={columns} />
      </DragDropContext>
    </Container>
  );
};

export default ProjectPage;
