import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import taskService from '../../../../services/taskService';
import Spinner from '../../../Loading/Spinner';

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



function preventDefault(event) {
  event.preventDefault();
}

export default function Orders(props) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [taskList,setTaskList] = useState();


  useEffect(() => {
    taskService.getTasks().then((res) => {
      setTaskList(res.data);
    })
  }, []);


  const handleSubmitTask = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    //creating a task starts
    let task = {
      task_name: data.get('task_name'),
      task_description: data.get('task_description'),
      created_date: new Date(),
      scheduled_date: new Date(value),
      task_status: "Pending",
    }

    try {
      taskService.createTasks(parseInt(data.get('assignedEmployee')),task).then(res => {
        setOpen(false);
        window.location.reload();
      })
    } catch (err) {
      setOpen(false);
      alert("Error in creating task!");
    }
    //task creating ends

  };

  //defining min date
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  //min date define ends

  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
  const handleDateChange = (event) => {
    setValue(event.target.value);
  };

  if (taskList === undefined) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      <Title>Recent Tasks</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Sheduled Date</TableCell>
            <TableCell>Created Date</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Assignee</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskList.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.scheduled_date}</TableCell>
              <TableCell>{row.created_date}</TableCell>
              <TableCell>{row.start_date}</TableCell>
              <TableCell>{row.end_date}</TableCell>
              <TableCell>{row.task_name}</TableCell>
              <TableCell>{row.task_description}</TableCell>
              <TableCell>{8}</TableCell>
              <TableCell>{row.task_status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* modal button starts */}
      {/* <div style={{backgroundColor: '#060b26'}}> */}
      <br />
      <Button onClick={handleOpen}>Create Task</Button>
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
                  name="task_name"
                  required
                  fullWidth
                  id="task_name"
                  label="Task Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="task_description"
                  label="Task Description"
                  name="task_description"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="assignedEmployee"
                  label="Asignee"
                  name="assignedEmployee"
                  autoComplete="assignedEmployee"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box sx={{ minWidth: 100 }}>
                  <label htmlFor="inputCheckIn">Shedule Date</label>
                  <input
                    name="check-in"
                    type="date"
                    className="form-control"
                    id="inputCheckIn"
                    placeholder="Check In"
                    min={today}
                    defaultValue={today}
                    // max={maximum}
                    onChange={handleDateChange}
                  />
                </Box>
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
      {/* </div> */}
      {/* modal button ends */}

    </React.Fragment>
  );
}

