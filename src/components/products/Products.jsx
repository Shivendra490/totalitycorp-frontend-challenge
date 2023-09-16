


import { useContext, useEffect, useState } from "react";
import Card from "../UI/ProductCard";
import Container from "../UI/Container";
import CartContext from "../../store/CartContext";
import ProductCard from "../UI/ProductCard";
import MuiCard from "../UI/MuiCard";

export const DUMMY_PRODUCTS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "T-Shirt",
    price: 500,
    rating: 3,
    category: "mensWear",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1682342786341-239a41287013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "T-Shirt",
    price: 500,
    rating: 3,
    category: "mensWear",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1622445275649-b1922cc3e837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "T-Shirt",
    price: 500,
    rating: 3,
    category: "mensWear",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvdXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    name: "T-Shirt",
    price: 500,
    rating: 3,
    category: "mensWear",
  },
  {
    id: 5,
    image:
      "https://plus.unsplash.com/premium_photo-1673758901405-32f0a6f625d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRyb3VzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "T-Shirt",
    price: 500,
    rating: 3,
    category: "mensWear",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyb3VzZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "T-Shirt",
    price: 500,
    rating: 3,
    category: "mensWear",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    name: "T-Shirt",
    price: 500,
    rating: 3,
    category: "mensWear",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNoaXJ0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "T-Shirt",
    price: 500,
    rating: 3,
    category: "mensWear",
  },
];



const Products = (props) => {


  const [allProducts,setAllProducts]=useState([])
  const ctx=useContext(CartContext)

  useEffect(()=>{
    setAllProducts(DUMMY_PRODUCTS)

  },[])

  const addToCart=(item)=>{
      ctx.addToCart(item)
  }

  const remove1Cart=(id)=>{
      ctx.removeFromCart(id)
  }

  return (
    <Container from='product'>
      {allProducts &&
        allProducts.map((product) => {
          return (
            <ProductCard onAddToCart={addToCart} product={product} key={product.id} from="product" onRemoveFromCart={remove1Cart} />
            // <MuiCard onAddToCart={addToCart} product={product} key={product.id} from="product"  />
          );
        })}
    </Container>
  );
};



export default Products;
