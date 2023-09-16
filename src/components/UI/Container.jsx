import React from "react";
import styles from "./Container.module.css";
import { Paper } from "@mui/material";

const Container = ({ children, from }) => {
  return (
    <>
      <Paper elevation={7} style={{ fontSize:'4rem',width:'20%',margin:'auto',textAlign: "center" }}>{from}</Paper>
      <div className={styles.container}>{children}</div>
      
    </>
  );
};

export default Container;
