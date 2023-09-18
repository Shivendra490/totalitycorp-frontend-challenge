import { useContext, useEffect, useState } from "react";
import Container from "../UI/Container";
import CartContext from "../../store/CartContext";
import MuiCard from "../UI/MuiCard";

const Products = (props) => {
  const productsList = props.productsList;

  const ctx = useContext(CartContext);

  const addToCart = (item) => {
    ctx.addToCart(item);
  };

  const remove1Cart = (id) => {
    ctx.removeFromCart(id);
  };

  return (
    <Container from="product">
      {productsList &&
        productsList?.map((product) => {
          return (
            <MuiCard
              onAddToCart={addToCart}
              product={product}
              key={product.id}
              from="product"
              onRemoveFromCart={remove1Cart}
            />
          );
        })}
    </Container>
  );
};

export default Products;
