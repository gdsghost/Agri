import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import userService from '../../../../services/userService';

const style = {
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

export default function DeleteModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const  deleteUserHandle = () =>{
    let deleteUserID = props.data;

    try{
      userService.deleteUser(deleteUserID).then(res => {
        console.log(res);
      })
    }catch (err){
      alert("Error deleting user!");
    }finally{
      setOpen(false)
      window.location.reload();
    }
  }

  console.log(props.data);
  return (
    <div>
      <Button onClick={handleOpen}>Delete User</Button>
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
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Delete User
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Are you sure you want to delete the user?
            </Typography>
            <br/>
            <Button variant="contained" onClick={deleteUserHandle}>CONFIRM</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
