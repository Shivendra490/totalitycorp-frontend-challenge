import styles from "./NavBar.module.css";
import { Avatar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div>Logo</div>
      <div className={styles.navlinks}>
        <div>Home</div>
        <div>About</div>
        <div>Contact us</div>
        <FavoriteBorderIcon sx={{ fontSize: 28 }} color="secondary"/>
        <div>
          <ShoppingCartIcon sx={{ fontSize: 28 }} color="secondary" />
        </div>
        <Avatar>N</Avatar>
      </div>
    </div>
  );
};

export default NavBar;
