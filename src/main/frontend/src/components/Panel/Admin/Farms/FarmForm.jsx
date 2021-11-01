import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import farmService from '../../../../services/farmService';


const style_modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FarmForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitTask = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    let farmer = parseInt(data.get('assignedEmployee'));
    console.log(farmer);

    let farm = {
      farm_name: data.get('farm_name'),
      farm_type: data.get('farm_type'),
      farm_area: parseFloat(data.get('farm_area')),
      farm_description: data.get('farm_description'),
    };

    try {
      farmService.createFarm(farmer,farm).then(res => {
        console.log(res);
        setOpen(false);
      window.location.reload();
      });
    } catch (err) {
      alert("Error creating Farm");
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>Create Farm</Button>
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
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="farm_name"
                  required
                  fullWidth
                  id="farm_name"
                  label="Farm Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  required
                  fullWidth
                  id="farm_type"
                  label="Farm Type"
                  name="farm_type"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="assignedEmployee"
                  label="Asignee"
                  name="assignedEmployee"
                  autoComplete="assignedEmployee"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  required
                  fullWidth
                  id="farm_area"
                  label="Area"
                  name="farm_area"
                  autoComplete="farm_area"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="farm_description"
                  label="Farm Description"
                  name="farm_description"
                  autoComplete="farm_description"
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
