import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>

<Link to="/dashboard" >
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    </Link>

    <Link to="/dashboard/users" >
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    </Link>

<Link to="/dashboard/farms">
    <ListItem button>
      <ListItemIcon>
        <NaturePeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Farms" />
    </ListItem>
    </Link>

<Link to="/dashboard/treatments">
    <ListItem button>
      <ListItemIcon>
        <MedicalServicesIcon />
      </ListItemIcon>
      <ListItemText primary="Treatments" />
    </ListItem>
    </Link>

<Link to="/dashboard/inventory">
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Inventory" />
    </ListItem>
    </Link>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
