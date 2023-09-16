import styles from "./NavBar.module.css";
import { Avatar } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink, useNavigate } from "react-router-dom";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
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
  const numberOfCartItems=ctx.cartItems?.reduce((acc,cur)=>{return acc+cur.quantity},0)
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

        <NavLink to="/cart">
          <StyledBadge badgeContent={numberOfCartItems || 0} sx={{ fontSize: 28 }} color="primary">
            <ShoppingCartIcon sx={{ fontSize: 32 }} />
          </StyledBadge>
        </NavLink>

        <Avatar>N</Avatar>
      </div>
    </div>
  );
};

export default NavBar;
