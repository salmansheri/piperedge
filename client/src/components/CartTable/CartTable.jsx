import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Button, Typography } from "@mui/material";

export default function CartTable() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        await fetch("http://localhost:5000/api/v1/cart")
          .then((res) => res.json())
          .then((data) => setCartItems(data.message));
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  });
  return (
    <Container sx={{ marginBottom: "100px" }}>
      <Typography variant="h4" sx={{ fontWeight: 1000 }} mb="50px">
        Shopping Cart
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right">Product Name</TableCell>
              <TableCell align="right">Org Price</TableCell>
              <TableCell align="right">DiscountPrice</TableCell>

              <TableCell align="right">Vendor</TableCell>
              <TableCell align="right">Remove from Cart</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow
                key={item._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell key={item.id} component="th" scope="row">
                  {item.id}
                </TableCell>
                <TableCell key={item.name} align="right">
                  {item.name}
                </TableCell>
                <TableCell key={item.price} align="right">
                  {item.price}
                </TableCell>

                <TableCell key={item.discountedPrice} align="right">
                  {item.discountedPrice}
                </TableCell>
                <TableCell key={item.vendors} align="right">
                  {item.vendors}
                </TableCell>
                <TableCell key="button" align="right">
                  <Button variant="contained" color="error">
                    Remove
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
