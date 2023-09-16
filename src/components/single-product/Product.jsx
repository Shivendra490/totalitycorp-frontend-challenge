import { Paper } from "@mui/material";
import styles from "./Product.module.css";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";



const Product = (props) => {
  console.log("here", props.productsList);
  return (
    <main className={styles.container}>
      {props.productsList &&
        props.productsList.map((product) => {
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
                <span>{product.price}</span>
                <p>
                  <Rating
                    name="read-only"
                    value={product.rating}
                    readOnly
                    size="large"
                  />
                </p>
              </div>

              <form>
                <div className={styles.formWrapper}>
                  <input
                    type="number"
                    defaultValue="1"
                    min="1"
                    max="4"
                    readOnly
                  />
                  <button>ADD to Cart</button>
                </div>
              </form>
            </Paper>
          );
        })}
    </main>
  );
};



export default Product;
