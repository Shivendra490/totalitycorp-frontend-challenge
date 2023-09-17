import styles from "./NavBar.module.css";
import { Avatar } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink, useNavigate } from "react-router-dom";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const NavBar = () => {
  const ctx=useContext(CartContext)
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const numberOfCartItems=ctx.cartItems?.reduce((acc,cur)=>{return acc+cur.quantity},0)

  useEffect(() => {
    
    if (ctx.cartItems.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.cartItems]);
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink>
          <img src="../../public/vite.svg" />
        </NavLink>
      </div>
      <div className={styles.navlinks}>
        <div>UserName</div>

        <NavLink to="/favourite">
          <FavoriteBorderIcon sx={{ fontSize: 28 }} color="main" />
        </NavLink>

        <NavLink to="/cart" className={styles.bump}>
          <StyledBadge badgeContent={numberOfCartItems || 0} className={styles.bump} sx={{ fontSize: 28 }} color="primary">
            <ShoppingCartIcon sx={{ fontSize: 32 }} />
          </StyledBadge>
        </NavLink>

        <Avatar>N</Avatar>
      </div>
    </div>
  );
};

export default NavBar;
