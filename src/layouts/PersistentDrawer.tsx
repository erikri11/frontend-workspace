import {Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Toolbar} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "@shared/types/menu";
import { DRAWER_WIDTH } from "@shared/constants/layout";
import { useContext } from "react";
import { UserRightsContext } from "@shared/context/userRightsContext";
import { checkMenuAccess } from "@shared/utils/access";
import React from "react";

interface PersistentDrawerProps {
  mobileOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export function PersistentDrawer(props: PersistentDrawerProps) {
  return (
    <Box
      aria-label="sidebar navigation"
      component="nav"
      sx={{
        width: { sm: DRAWER_WIDTH },
        flexShrink: { sm: 0 }
      }}
    >
      {/* Temporary drawer on mobile */}
      <Drawer
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.onClose}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box"
          }
        }}
      >
        <PersistentDrawerContent
          menuItems={props.menuItems}
          mobileOpen={props.mobileOpen}
          onClose={props.onClose}
        />
      </Drawer>

      {/* Permanent drawer on desktop */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box"
          }
        }}
      >
        <PersistentDrawerContent
          menuItems={props.menuItems}
          mobileOpen={props.mobileOpen}
          onClose={props.onClose}
        />
      </Drawer>
    </Box>
  );
}

function PersistentDrawerContent(props: PersistentDrawerProps) {
  const { role: userRole } = useContext(UserRightsContext);
  const location = useLocation();
  
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Push content below AppBar */}
      <Toolbar />

      <List
        subheader={
          <ListSubheader
            component='div'
            className='d-sm-none'>
            Navigasjon
          </ListSubheader>
        }
      >
        {props.menuItems.map((i, index) => (
          <React.Fragment key={index}>
            {userRole && checkMenuAccess(
              <ListItemButton
                component={Link}
                to={i.url}
                selected={"/" + location.pathname.split("/")[1] === i.url}
                key={i.text}>
                <ListItemIcon>
                  {i.icon}
                </ListItemIcon>
                <ListItemText primary={i.text} />
              </ListItemButton>,
              [userRole]
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}
