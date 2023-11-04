import React, { useContext, useState } from "react";
import styles from "./Container.module.css";
import { Button, Typography } from "@mui/material";
import CartContext from "../../store/CartContext";
import { Box, Paper } from "@mui/material";

import TextField from "@mui/material/TextField";
import { rupee } from "../../util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Container = ({ children, from }) => {
  const navigate = useNavigate();
  const [address, setAddress] = useState({ address: "", city: "" });
  const ctx = useContext(CartContext);
  const numberOfCartItems = ctx.cartItems?.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const notify = (msg, type) => {
    if (type === "success") {
      toast.success(msg, { position: "top-center" });
    } else if (type === "error") {
      toast.error(msg, { position: "top-center" });
    } else if (type === "info") {
      toast.info(msg, { position: "top-center" });
    } else {
      toast(msg, { position: "top-center" });
    }
  };

  const confirmOrderHandler = () => {
    if (!address.address || !address.city) {
      notify("address and city both are mandatory", "error");
      return;
    }
    setAddress({ address: "", city: "" });
    ctx.clearCart();

    notify("Your order is placed successfully", "success");
    setTimeout(() => navigate("/"), 2500);
  };
  const addressHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  return (
    <>
      <ToastContainer />
      <Paper
        elevation={7}
        style={{
          fontSize: "2rem",
          margin: "1rem auto",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        {from}
        {from === "cart" &&
          `(${numberOfCartItems}) ${rupee.format(ctx.totalCartPrice)}`}
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
            >{`Total Amount  of Cart Items ${rupee.format(
              ctx.totalCartPrice
            )}`}</Paper>
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
              sx={{
                padding: ".5rem",
                backgroundColor: "black",
                color: "white",
              }}
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

          <Box sx={{ margin: "2rem" }}>
            <Button
              variant="contained"
              onClick={confirmOrderHandler}
              disabled={ctx.cartItems.length < 1 ? true : false}
              sx={{ fontSize: "1.5rem" }}
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
