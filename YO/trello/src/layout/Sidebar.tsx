import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider
} from "@mui/material";
import { Home, Info } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 240;

interface SidebarProps {
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  isMobile: boolean;
}

const Sidebar = ({
  mobileOpen,
  handleDrawerToggle,
  isMobile,
}: SidebarProps) => {
  const location = useLocation();

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/"
            selected={location.pathname === "/"}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/Login"
            selected={location.pathname === "/login"}
          >
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesion" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      )}

      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
