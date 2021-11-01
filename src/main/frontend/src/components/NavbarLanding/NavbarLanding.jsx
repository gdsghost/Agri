import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ComputerIcon from '@mui/icons-material/Computer';
import { useHistory } from "react-router-dom";

export default function ButtonAppBar(props) {

  //get data from sessionStorage

  const [userData, setuserData] = useState(JSON.parse(sessionStorage.getItem('userSessionData')));
  let history = useHistory();

  const handleDashboard = () => {
    if (userData.role === "admin") {
      history.push('/dashboard');
    } else if (userData.role === "farmer") {
      history.push('/dashboard');
    } else if (userData.role === "bioTech") {
      history.push('/dashboard');
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ComputerIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Farm Managment System
          </Typography>
          {userData!==null?<Button color="inherit" onClick={handleDashboard}>Dashboard</Button>:<Button color="inherit" href="/login">Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

