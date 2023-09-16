import styles from "./FilterBar.module.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const FilterBar = () => {
  return (
    <div className={styles.filterbar}>
      <div>
        Category&nbsp;
        <span>
          <select name="categories">
            <option value="all">all</option>
            <option value="furniture">furniture</option>
          </select>
        </span>
      </div>

      <div className={styles.search}>
        <input type='text' placeholder="Search item"/>
      </div>

      <div>
        Rating&nbsp;
        <span>
          <select name="categories">
            <option value="all">all</option>
            <option value="2stars">2 <StarBorderIcon/> & above</option>
            <option value="2stars">3 <StarBorderIcon/> & above</option>
            <option value="2stars">4 <StarBorderIcon/> & above</option>
          </select>
        </span>
      </div>

      <div>
        Min&nbsp;
        <span>
          <select name="categories">
            <option value="all">all</option>
            <option value="furniture">furniture</option>
          </select>
        </span>
      </div>

      <div>
        Max&nbsp;
        <span>
          <select name="categories">
            <option value="all">all</option>
            <option value="furniture">furniture</option>
          </select>
        </span>
      </div>

      <div className={styles.reset}>
        <button style={{width:'100%',height:'100%',padding:'1rem' , backgroundColor:'lightblue',borderRadius:'1rem'}}>Reset filter</button>
      </div>


    </div>
  );
};

export default FilterBar;
