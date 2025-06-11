import { Box } from '@mui/material';
import Column from './Column'; 

const Board = ({ columns }) => (
  <Box display="flex" gap={2} overflow="auto">
    {Object.entries(columns).map(([status, tasks]) => (
      <Column key={status} title={status} tasks={tasks} />
    ))}
  </Box>
);

export default Board;