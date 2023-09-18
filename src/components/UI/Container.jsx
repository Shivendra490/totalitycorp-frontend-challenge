import React, { useContext, useState } from "react";
import styles from "./Container.module.css";
import { Button, Typography } from "@mui/material";
import CartContext from "../../store/CartContext";
import { Box, Paper } from "@mui/material";

import TextField from "@mui/material/TextField";

const Container = ({ children, from }) => {
  const [address, setAddress] = useState({});
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.cartItems?.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const confirmOrderHandler = () => {
    if (!address.address || !address.city) {
      alert("address and city both are mandatory");
      return;
    }
    alert("Your order is placed successfully");
  };
  const addressHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  return (
    <>
      <Paper
        elevation={7}
        style={{
          fontSize: "2rem",
          width: "20%",
          margin: "1rem auto",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        {from}
        {from === "cart" && `(${numberOfCartItems}) ${ctx.totalCartPrice} INR`}
      </Paper>
      <div className={styles.container}>{children}</div>
      {from === "cart" && (
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2rem",
              gap: "1rem",
            }}
          >
            <Paper
              elevation={5}
              sx={{ padding: ".5rem" }}
            >{`Total Number of Cart Items ${numberOfCartItems}`}</Paper>
            <Paper
              elevation={5}
              sx={{ padding: ".5rem" }}
            >{`Total Amount  of Cart Items ${ctx.totalCartPrice} INR`}</Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2rem",
              gap: "1rem",
              margin: "2rem",
            }}
          >
            <Paper
              elevation={5}
              sx={{ padding: ".5rem" ,backgroundColor:'black',color:'white' }}
            >{`Shiping Details`}</Paper>
          </Box>

          <Box
            elevation={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "2rem",
              gap: "1rem",
              padding: ".5rem",
            }}
          >
            <Paper elevation={5} sx={{ padding: "1rem" }}>
              <TextField
                variant="outlined"
                name="address"
                value={address.address}
                label="Address"
                onChange={addressHandler}
              />
            </Paper>
            <Paper elevation={5} sx={{ padding: "1rem" }}>
              <TextField
                variant="outlined"
                name="city"
                value={address.city}
                label="City"
                onChange={addressHandler}
              />
            </Paper>
          </Box>

          <Box sx={{ margin: "2rem", fontSize: "4rem" }}>
            <Button
              variant="contained"
              onClick={confirmOrderHandler}
              disabled={ctx.cartItems.length < 1 ? true : false}
              fontSize="4rem"
              fullWidth
            >
              Place Order
            </Button>
          </Box>
        </div>
      )}
    </>
  );
};

export default Container;
