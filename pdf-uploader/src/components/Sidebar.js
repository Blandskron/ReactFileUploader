// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText, Collapse, Divider } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

const Sidebar = () => {
  const [openHome, setOpenHome] = useState(false);
  const [openDashboard, setOpenDashboard] = useState(false);

  const handleClickHome = () => {
    setOpenHome(!openHome);
  };

  const handleClickDashboard = () => {
    setOpenDashboard(!openDashboard);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <List component="nav">
        <ListItem button onClick={handleClickHome}>
          <ListItemText primary="Home" />
          {openHome ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openHome} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Overview" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Updates" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Reports" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem button onClick={handleClickDashboard}>
          <ListItemText primary="Dashboard" />
          {openDashboard ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openDashboard} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Overview" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Weekly" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Monthly" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Annually" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem button>
          <ListItemText primary="Orders" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Account" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
