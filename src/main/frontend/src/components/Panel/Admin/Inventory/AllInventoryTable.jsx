import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Spinner from '../../../Loading/Spinner';
import inventoryService from "../../../../services/inventoryService";

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


export default function AllInventoryTable() {

  const [inventList, setInventList] = useState();

  useEffect(() => {
    inventoryService.getMedicines().then((res) => {
      setInventList(res.data);
    })
  }, []);


  if (inventList === undefined) {
    return <Spinner />;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Medicine Name</StyledTableCell>
            <StyledTableCell align="right">Company</StyledTableCell>
            <StyledTableCell align="right">Composition</StyledTableCell>
            <StyledTableCell align="right">Cost</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Dose</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventList.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.medicine_name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.medicine_company}</StyledTableCell>
              <StyledTableCell align="right">{row.medicine_composition}</StyledTableCell>
              <StyledTableCell align="right">{row.medicine_cost} /KG</StyledTableCell>
              <StyledTableCell align="right">{row.medicine_type}</StyledTableCell>
              <StyledTableCell align="right">{row.medicine_dose}</StyledTableCell>
              <StyledTableCell align="right">{row.medicine_description}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
