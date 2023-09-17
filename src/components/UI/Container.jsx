import React, { useContext } from "react";
import styles from "./Container.module.css";
import { Paper } from "@mui/material";
import CartContext from "../../store/CartContext";
import FilterBar from "../nav/FilterBar";


const Container = ({ children, from }) => {
    const ctx=useContext(CartContext)
    
  return (
    <>
        
      <Paper elevation={7} style={{ fontSize:'4rem',width:'20%',margin:'auto',textAlign: "center" }}>{from}{from ==='cart' && ctx.totalCartPrice +"INR"} </Paper>
      <div className={styles.container}>{children}</div>

    </>
  );
};

export default Container;
