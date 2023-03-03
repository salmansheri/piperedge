import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./DiscountTable.css";
import { Container, Typography } from "@mui/material";
import { data } from "../../data/products";

export default function DiscountTable() {
  return (
    <Container>
      <Typography variant="h4" mt="50px" mb="50px" fontWeight={1000}>
        Discount Table
      </Typography>
      <TableContainer component={Paper} sx={{ marginBottom: "50px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Vendor</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Trade A
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Trade B
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Trade C
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Trade D
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Vendor 1
              </TableCell>
              <TableCell align="right">12</TableCell>
              <TableCell align="right">12</TableCell>
              <TableCell align="right">N/A</TableCell>
              <TableCell align="right">6</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Vendor 2
              </TableCell>
              <TableCell align="right">10</TableCell>
              <TableCell align="right">8</TableCell>
              <TableCell align="right">20</TableCell>
              <TableCell align="right">N/A</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Vendor 3
              </TableCell>
              <TableCell align="right">N/A</TableCell>
              <TableCell align="right">25</TableCell>
              <TableCell align="right">3</TableCell>
              <TableCell align="right">16</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                vendor 4
              </TableCell>
              <TableCell align="right">9</TableCell>
              <TableCell align="right">N/A</TableCell>
              <TableCell align="right">16</TableCell>
              <TableCell align="right">30</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                vendor 5
              </TableCell>
              <TableCell align="right">5</TableCell>
              <TableCell align="right">11</TableCell>
              <TableCell align="right">N/A</TableCell>
              <TableCell align="right">30</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
