import React, { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import farmService from '../../../../services/farmService';
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


export default function AllFarmsTable() {

  const [farmList, setFarmList] = useState();

  useEffect(() => {
    farmService.getFarms().then((res) => {
      setFarmList(res.data);
    })
  }, []);


  if (farmList === undefined) {
    return <Spinner />;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Farm ID</StyledTableCell>
            <StyledTableCell align="right">Farm Name</StyledTableCell>
            <StyledTableCell align="right">Farm Type</StyledTableCell>
            <StyledTableCell align="right">Farm Area</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Assignee</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {farmList.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.farm_name}</StyledTableCell>
              <StyledTableCell align="right">{row.farm_type}</StyledTableCell>
              <StyledTableCell align="right">{row.farm_area}</StyledTableCell>
              <StyledTableCell align="right">{row.farm_description}</StyledTableCell>
              <StyledTableCell align="right">8</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
