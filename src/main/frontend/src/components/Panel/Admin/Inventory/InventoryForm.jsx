import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import inventoryService from '../../../../services/inventoryService';


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

export default function InventoryForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitTask = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    let medicine = {
      medicine_name: data.get('medicine_name'),
      medicine_company: data.get('medicine_company'),
      medicine_cost: parseInt(data.get('medicine_cost')),
      medicine_type: data.get('medicine_type'),
      medicine_dose: data.get('medicine_dose'),
      medicine_description: data.get('medicine_description'),
    };

    try{
      inventoryService.createMedicine(medicine).then(res => {
        console.log(res);
      });
    }catch(err){
      alert("Error creating inventory");
    }finally{
      setOpen(false);
      window.location.reload();
    }
  }

  return (
    <div>
      <Button onClick={handleOpen}>Create Inventory</Button>
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
                  autoComplete="medicine_name"
                  name="medicine_name"
                  required
                  fullWidth
                  id="medicine_name"
                  label="Medicine Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="medicine_company"
                  label="Company Name"
                  name="medicine_company"
                  autoComplete="medicine_company"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="medicine_composition"
                  label="Medicine Composition"
                  name="medicine_composition"
                  autoComplete="medicine_composition"
                />
              </Grid>

              <Grid item xs={12} sm={3}>
                <TextField
                  autoComplete="medicine_cost"
                  name="medicine_cost"
                  required
                  fullWidth
                  id="medicine_cost"
                  label="Cost"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  required
                  fullWidth
                  id="medicine_type"
                  label="Type"
                  name="medicine_type"
                  autoComplete="medicine_type"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  id="medicine_dose"
                  label="Dose"
                  name="medicine_dose"
                  autoComplete="medicine_dose"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="medicine_description"
                  label="Description"
                  name="medicine_description"
                  autoComplete="medicine_description"
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
