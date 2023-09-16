import React, { useRef } from "react";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Paper } from "@mui/material";
import styles from "./ProductCard.module.css";
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ProductCard = (props) => {
  console.log('productcard',props)
  const quantityRef=useRef()
  const product = props.product;
  const from=props.from

  const submitHandler=(e)=>{
    e.preventDefault()
    const enteredQuantity=quantityRef.current.value;
    const enteredQuantityNumber=+enteredQuantity
    console.log(enteredQuantityNumber)
    if(enteredQuantityNumber<1 || enteredQuantityNumber>5){
      alert('qty should be between 1 to 5')
      return
    }
    const newItem={
      ...product,quantity:enteredQuantityNumber
    }
    props.onAddToCart(newItem)

  }
  return (
    <Paper elevation={5} className={styles.card} key={product.id}>
      <div className={styles.productImage} alt="img">
        <img src={product.image} />
      </div>
      <div className={styles.formWrapper}>
        <span>{product.name}</span>
        <p>
          <FavoriteBorderIcon sx={{ fontSize: 25 }} color="secondary" />
        </p>
      </div>

      <div className={styles.formWrapper}>
        <span>INR {product.price}</span>
        <p>
          <Rating
            name="read-only"
            value={product.rating}
            readOnly
            size="large"
          />
        </p>
      </div>

      {/* <div className={styles.formWrapper}>
          <div className={styles.btn}><button><ClearIcon fontSize='large'/>{5}</button></div>
          <div className={styles.btn}><button><AddIcon sx={{ fontSize: 25 }}/></button></div>
          <div className={styles.btn}><button><RemoveIcon sx={{ fontSize: 25 }}/></button></div>
          
        </div> */}

      <form onSubmit={submitHandler}>
        <div className={styles.formWrapper}>
          <input type="number" ref={quantityRef} defaultValue={props.product.quantity || '1'} min={1} max={5} step={1} />
          <button>ADD to Cart</button>
        </div>
      </form>
    </Paper>
  );
};

export default ProductCard;
