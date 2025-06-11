import { Card, CardContent, Typography } from '@mui/material';
import { Draggable } from "@hello-pangea/dnd";

const TaskCard = ({ task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided, snapshot) => (
      <Card
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        sx={{
          mb: 2,
          boxShadow: snapshot.isDragging ? 4 : 1,
          backgroundColor: '#fff'
        }}
      >
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold">
            {task.title}
          </Typography>
          <Typography variant="body2">{task.description}</Typography>
        </CardContent>
      </Card>
    )}
  </Draggable>
);

export default TaskCard;