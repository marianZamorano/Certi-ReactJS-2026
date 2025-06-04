import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import LabelIcon from "@mui/icons-material/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import type { Project } from "../interfaces/projectInterface";
import { useAuth } from "../contexts/AuthContext";

interface CustomCardProps {
  title?: string;
  action?: () => void;
  project?: Project;
}
export const CustomCard = ({ title, action, project }: CustomCardProps) => {
  console.log(project);
  const { user, isAuth } = useAuth();
  console.log(user, isAuth);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 3,
        boxShadow: 1,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <CardActionArea onClick={action}>
        <CardMedia
          component="img"
          height="160"
          image="https://picsum.photos/200/300"
          alt={title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Box display="flex" justifyContent="space-between" alignItems="start">
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </Box>
            <IconButton
              onClick={handleOpenMenu}
              size="small"
              sx={{ alignSelf: "flex-start" }}
            >
              <MoreVertIcon fontSize="small" />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                elevation: 3,
                sx: {
                  borderRadius: 2,
                  minWidth: 200,
                },
              }}
            >
              <MenuItem
                onClick={(event) => {
                  event.stopPropagation();
                  // onEdit?.();
                  handleCloseMenu();
                }}
              >
                <ListItemIcon>
                  <EditIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Editar proyecto" />
              </MenuItem>

              <MenuItem
                onClick={() => {
                  // onTag?.();
                  handleCloseMenu();
                }}
              >
                <ListItemIcon>
                  <LabelIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Cambiar etiqueta" />
              </MenuItem>

              <MenuItem
                onClick={() => {
                  onDelete?.();
                  handleCloseMenu();
                }}
                sx={{ color: "error.main" }}
              >
                <ListItemIcon sx={{ color: "error.main" }}>
                  <DeleteIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Eliminar proyecto" />
              </MenuItem>
            </Menu>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
