import React, { useContext } from "react";
import styles from "./Container.module.css";
import { Button, Paper } from "@mui/material";
import CartContext from "../../store/CartContext";
import FilterBar from "../nav/FilterBar";
import { useNavigate } from "react-router-dom";


const Container = ({ children, from }) => {
    const navigate=useNavigate()
    const ctx=useContext(CartContext)
    if(from==='cart'){

    }
    
  return (
    <>
        
      <Paper elevation={7} style={{ fontSize:'2rem',width:'20%',margin:'1rem auto',textAlign: "center" }}>{from}{from ==='cart' && `(${ctx.cartItems.length}) ${ctx.totalCartPrice} INR`} </Paper>
      <div className={styles.container}>{children}</div>
      {from==='cart' && <div>
        <Button variant='contained' onClick={()=>navigate('/order')} disabled={ctx.cartItems.length<1 ? true : false}>Continue</Button>
        </div>}


    </>
  );
};

export default Container;
