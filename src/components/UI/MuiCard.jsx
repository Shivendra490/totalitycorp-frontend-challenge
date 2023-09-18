import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Typography from "@mui/material/Typography";

import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Paper } from "@mui/material";

export default function MuiCard(props) {
  const [qty, setQty] = React.useState(1);
  const { product, from } = props;

  const submitHandler = (e) => {
    e.preventDefault();

    if (qty < 1 || qty > 5) {
      alert("qty should be between 1 to 5");
      return;
    }
    const newItem = {
      ...product,
      quantity: qty,
    };
    props.onAddToCart(newItem);
  };

  const add1Handler = () => {
    const newItem = {
      ...product,
      quantity: 1,
    };
    props.onAddToCart(newItem);
  };

  const remove1Handler = () => {
    props.onRemoveFromCart(props.product.id);
  };

  return (
    <Card sx={{ maxWidth: 345 }} key={product.id}>
      <CardHeader title={product.name} />
      <CardMedia
        component="img"
        height="300"
        width="300"
        image={product.image}
        alt="Paella dish"
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Paper elevation={1} sx={{ padding: ".2rem .5rem" }}>
            <Typography variant="h6">INR {product.price}</Typography>
          </Paper>
          <Box>
            {" "}
            <Rating
              name="read-only"
              value={product.rating}
              readOnly
              size="small"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Paper sx={{ padding: "0.5rem 1rem", backgroundColor: "#1565c0" }}>
            <RemoveIcon
              onClick={
                from === "product"
                  ? () => (qty > 1 ? setQty(qty - 1) : setQty(1))
                  : remove1Handler
              }
            />
          </Paper>
          <Paper sx={{ padding: "0.8rem" }}>
            <Typography variant="h6">
              {from === "product" ? qty : product.quantity}
            </Typography>
          </Paper>
          <Paper sx={{ padding: "0.5rem 1rem", backgroundColor: "#1565c0" }}>
            <AddIcon
              onClick={
                from === "product"
                  ? () => (qty < 5 ? setQty(qty + 1) : setQty(5))
                  : add1Handler
              }
            />
          </Paper>
        </Box>
      </CardContent>
      {from === "product" && (
        <CardActions>
          <Button variant="contained" onClick={submitHandler} fullWidth>
            ADD TO CART
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
