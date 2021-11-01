import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import treatmentService from "../../../../services/treatmentService";
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


export default function AllTreatmentsTable() {

  const [treatList, setTreatList] = useState();

  useEffect(() => {
    treatmentService.getTreatments().then((res) => {
      setTreatList(res.data);
    })
  }, []);


  if (treatList === undefined) {
    return <Spinner />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Treatment Name</StyledTableCell>
            <StyledTableCell align="right">Treatment Method</StyledTableCell>
            <StyledTableCell align="right">Treatment Type</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Assignee</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {treatList.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.treatment_name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.treatment_method}</StyledTableCell>
              <StyledTableCell align="right">{row.treatment_type}</StyledTableCell>
              <StyledTableCell align="right">{row.treatment_description}</StyledTableCell>
              <StyledTableCell align="right">8</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
