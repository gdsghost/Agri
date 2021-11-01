import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import treatmentService from '../../../../services/treatmentService';


const style_modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TreatmentForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitTask = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    let bioTech = parseInt(data.get('bioTech'));

    let treatment = {
      treatment_name: data.get('treatment_name'),
      treatment_method: data.get('treatment_method'),
      treatment_type: data.get('treatment_type'),
      treatment_description: data.get('treatment_description'),
    };

    try{
      treatmentService.createTreatment(bioTech,treatment).then(res => {
        console.log(res);
      });
    }catch(err){
      alert("Error creating treatment");
    }finally{
      setOpen(false);
      window.location.reload();
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>Create Treatment</Button>
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
                  name="treatment_name"
                  required
                  fullWidth
                  id="treatment_name"
                  label="Treatment Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="treatment_method"
                  label="Treatment Method"
                  name="treatment_method"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="treatment_type"
                  label="Treatment Type"
                  name="treatment_type"
                  autoComplete="treatment_type"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="treatment_description"
                  label="Treatment Description"
                  name="treatment_description"
                  autoComplete="treatment_description"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="bioTech"
                  label="Assignee"
                  name="bioTech"
                  autoComplete="bioTech"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
