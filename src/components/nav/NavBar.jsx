import styles from "./NavBar.module.css";
import { Avatar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink><img src="../../public/vite.svg" /></NavLink>
      </div>
      <div className={styles.navlinks}>
       
        <div>UserName</div>

        <NavLink to="/favourite">
          <FavoriteBorderIcon sx={{ fontSize: 28 }} color="main" />
        </NavLink>

        <NavLink to="/cart">
          <ShoppingCartIcon sx={{ fontSize: 28 }} color="main" />
        </NavLink>

        <Avatar>N</Avatar>
      </div>
    </div>
  );
};

export default NavBar;
