import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Container, Typography, Button } from "@mui/material";
import { datas } from "../../data/products";
import axios from 'axios'; 

export default function ProductTable() {
  const [tableData, setTableData] = useState({
    id: 0, 
    name: "", 
    price: 0, 
    tags: [], 
    vendor: "",     
  }); 

  const handleClick = async () => {
   await axios.post("http://localhost:5000/api/v1/cart", {
      id: tableData.id, 
      name: tableData.name, 
      price: tableData.price, 
      tags: tableData.tags, 
      vendor: tableData.vendor,
    }).then((res) => console.log("succuss"))
      .catch((err) => console.log(err)); 
    
    
  }
  return (
    <Container>
      <Typography variant="h4" mb="50px" fontWeight={1000}>
        Product Table
      </Typography>
      <TableContainer component={Paper} sx={{ marginBottom: "50px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>#</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Product Name
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Price
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Tags
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Vendor
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Cart
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((data) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" aria-valuetext={tableData.id} onChange={(e)=> setTableData({...tableData, id: e.target.value})}>
                  {data.id}
                </TableCell>
                <TableCell align="right" onChange={(e) => setTableData({...tableData, name: e.target.value})}>{data.name}</TableCell>
                <TableCell align="right" onChange={(e) => setTableData({...tableData, price: e.target.value})}>{data.price}</TableCell>
                <TableCell align="right" onChange={(e) => setTableData({...tableData, tags: [e.target.value]})}>{data.tags}</TableCell>
                <TableCell align="right" onChange={(e) => setTableData({...tableData, vendor: e.target.value})}>{data.vendor}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="success" onClick={handleClick}>
                    Add to Cart
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
