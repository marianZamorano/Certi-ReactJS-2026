import { Paper, Typography } from '@mui/material';
import { Droppable } from "@hello-pangea/dnd";
import TaskCard from './TaskCard'; // Adjust the import path as necessary

const Column = ({ title, tasks }) => (
  <Droppable droppableId={title}>
    {(provided, snapshot) => (
      <Paper
        ref={provided.innerRef}
        {...provided.droppableProps}
        sx={{
          width: 250,
          p: 2,
          backgroundColor: snapshot.isDraggingOver ? '#e0e0e0' : '#f4f4f4'
        }}
      >
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        {tasks.map((task, index) => (
          <TaskCard key={task.id} task={task} index={index} />
        ))}
        {provided.placeholder}
      </Paper>
    )}
  </Droppable>
);

export default Column;
