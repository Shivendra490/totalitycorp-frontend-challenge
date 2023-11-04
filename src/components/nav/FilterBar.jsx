import { useState } from "react";
import styles from "./FilterBar.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

let obj = {
  category: "All",
  searchKey: "",
  min: 1000,
  max: 100000,
  rating: "All",
};
const FilterBar = (props) => {
  const [value, setValue] = useState([1000, 100000]);

  const [filter, setFilter] = useState(obj);

  const handleChange = (event, newValue) => {
    const min = newValue[0];
    const max = newValue[1];
    setValue([min, max]);
    const modifiedFilter = { ...filter, min: min, max: max };
    props.onFilter(modifiedFilter);
  };

  const filterOnChangeHandler = (e) => {
    const { name, value } = e.target;

    const modifiedFilter = { ...filter, [name]: value };
    setFilter(modifiedFilter);

    props.onFilter(modifiedFilter);
  };

  const resetFilter = (e) => {
    setFilter(obj);
    setValue([1000, 100000]);

    props.onFilter(obj);
  };

  return (
    <div className={styles.filterbar}>
      <div>
        {/* Category&nbsp; */}
        <span>
          <select
            name="category"
            value={filter.category}
            onChange={filterOnChangeHandler}
          >
            <option value="All">All Categories</option>
           {props.categories?.map((category,index)=>{
            return  <option value={category} key={index}>{category}</option>
           })}
          </select>
        </span>
      </div>

      <div className={styles.search}>
        <input
          type="text"
          name="searchKey"
          placeholder="Search item"
          value={filter.searchKey}
          onChange={filterOnChangeHandler}
        />
      </div>

      <div>
        {/* Rating&nbsp; */}
        <span>
          <select
            name="rating"
            value={filter.rating}
            onChange={filterOnChangeHandler}
          >
            <option value="All">All Ratings</option>
            <option value={2}>2 * & above</option>
            <option value={3}>3 * & above</option>
            <option value={4}>4 * & above</option>
          </select>
        </span>
      </div>

      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          size="small"
          min={1000}
          max={100000}
          step={1000}
        />
      </Box>

      <div className={styles.reset}>
        <button
          onClick={resetFilter}
          style={{
            width: "100%",
            height: "100%",
            padding: "1rem",
            backgroundColor: "lightblue",
            borderRadius: "1rem",
          }}
        >
          Reset filter
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
