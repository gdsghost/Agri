import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserForm from './UserForm';
import DeleteModal from './DeleteModal';
import userService from '../../../../services/userService';
import Spinner from '../../../Loading/Spinner';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function AllUsersTable() {

  const [userList, setUserList] = useState();

  useEffect(() => {
    userService.getUsers().then((res) => {
      setUserList(res.data);
    })
  }, []);

  if (userList === undefined) {
    return <Spinner />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User ID</StyledTableCell>
            <StyledTableCell align="right">UserName</StyledTableCell>
            <StyledTableCell align="right">First Name</StyledTableCell>
            <StyledTableCell align="right">Last Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Role</StyledTableCell>
            <StyledTableCell align="right">Contact</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((row) => (
            <StyledTableRow key={row.userId}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.userName}</StyledTableCell>
              <StyledTableCell align="right">{row.firstName}</StyledTableCell>
              <StyledTableCell align="right">{row.lastName}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.role}</StyledTableCell>
              <StyledTableCell align="right">{row.contact}</StyledTableCell>
              <StyledTableCell align="right"><UserForm data={row}/></StyledTableCell>
              <StyledTableCell align="right"><DeleteModal data={row.id}/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
