import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import userService from '../../../../services/userService';


const style_modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function UserForm(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const [role, setRole] = React.useState(props.data.role);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmitTask = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    let user = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      userName: data.get('userName'),
      role: role,
      contact: data.get('contact'),
      email: data.get('email'),
      password: data.get('password'),
    };

    let userUpdateID = props.data.id;

    try {
      userService.updateUser(user,userUpdateID).then(res => {
        console.log(res);
        setOpen(false)
      window.location.reload();
      })
    } catch (err) {
      alert("Error in updating User!");
    }
  }

  console.log(props.data);
  return (
    <div>
      <Button onClick={handleOpen}>Edit User</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style_modal} component="form" noValidate onSubmit={handleSubmitTask}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  defaultValue={props.data.firstName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  defaultValue={props.data.lastName}
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  name="userName"
                  autoComplete="username"
                  defaultValue={props.data.userName}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="Role"
                      onChange={handleChange}
                    >
                      <MenuItem value="farmer">Farmer</MenuItem>
                      <MenuItem value="bioTech">BioTechnician</MenuItem>
                      <MenuItem value="admin">Admin</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="contact"
                  label="Contact"
                  name="contact"
                  autoComplete="contact"
                  defaultValue={props.data.contact}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  defaultValue={props.data.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  defaultValue="not showing"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Edit
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
