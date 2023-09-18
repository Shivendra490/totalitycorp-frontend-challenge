import { useEffect, useState } from "react";
import styles from "./AllProductsPage.module.css";

import Products from "./products/Products";
import FilterBar from "./nav/FilterBar";
import productItems from "./../api/api";

import CircularProgress from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";

let uniqueCategories = [
  ...new Set(productItems?.map((product) => product.category)),
];

const AllProductsPage = (props) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProductsList(productItems);
      setLoading(false);
    }, 1200);
  }, []);

  const filterItems = (filterObj) => {
    const { category, searchKey, min, max, rating } = filterObj;

    const filteredProducts = productItems
      ?.filter((item) => {
        if (category === "All") {
          return item;
        } else {
          return item.category === category;
        }
      })
      .filter((item) => {
        if (!searchKey) {
          return item;
        } else {
          return item.name
            .trim()
            .toLowerCase()
            .includes(searchKey.trim().toLowerCase());
        }
      })
      .filter((item) => {
        if (rating === "All") {
          return item;
        } else {
          return item.rating >= rating;
        }
      })
      .filter((item) => {
        return min <= item.price && max >= item.price;
      });
    setProductsList(filteredProducts);
  };

  return (
    <main className={styles.allProductsWrapper}>
      <FilterBar onFilter={filterItems} categories={uniqueCategories} />
      {!loading && productsList.length > 0 && (
        <Products productsList={productsList} />
      )}
      {!loading && productsList.length === 0 && (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">No data found</Typography>
        </Box>
      )}
      {loading && (
        <Box sx={{ textAlign: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </main>
  );
};

export default AllProductsPage;
