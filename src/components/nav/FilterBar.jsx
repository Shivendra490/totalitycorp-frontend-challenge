import { useState } from "react";
import styles from "./FilterBar.module.css";


let obj={category:'All',searchKey:'',min:100,max:900,rating:'All'}
const FilterBar = (props) => {

  const [filter,setFilter]=useState({category:'All',searchKey:'',min:100,max:900,rating:'All'})
  

  const filterOnChangeHandler=(e)=>{
    const {name,value}=e.target
    setFilter({...filter,[name]:value})
    
     obj={...obj,[name]:value}
    

    props.onFilter(obj)
  }


const resetFilter=(e)=>{
 
  setFilter({category:'All',searchKey:'',min:100,max:1000,rating:'All'})
  obj={category:'All',searchKey:'',min:100,max:1000,rating:'All'}
  props.onFilter(obj)
}

  // const searchHandler=(e)=>{
  //   const {value}=e.target
  //   setSearchKey(value)
  //   props.onSearchFilter(value)
  // }

  
  
  return (
    <div className={styles.filterbar}>
      <div>
        Category&nbsp;
        <span>
          <select name="category" value={filter.category} onChange={filterOnChangeHandler}>
            <option value="All">all</option>
            <option value="MensWear">Mens Wear</option>
            <option value="WomensWear">Womens Wear</option>
          </select>
        </span>
      </div>

      <div className={styles.search}>
        <input type='text' name='searchKey' placeholder="Search item" value={filter.searchKey} onChange={filterOnChangeHandler}/>
      </div>

      <div>
        Rating&nbsp;
        <span>
          <select name="rating" value={filter.rating} onChange={filterOnChangeHandler}>
            <option value="All">All</option>
            <option value={2}>2 * & above</option>
            <option value={3}>3 * & above</option>
            <option value={4}>4 * & above</option>
          </select>
        </span>
      </div>

      <div>
        Min&nbsp;
        <span>
          <select name="min" value={filter.min}onChange={filterOnChangeHandler}>
          <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={300}>300</option>
            <option value={400}>400</option>
            <option value={500}>500</option>
            <option value={600}>600</option>
            <option value={700}>700</option>
            <option value={800}>800</option>
            <option value={900}>900</option>
          </select>
        </span>
      </div>

      <div>
        Max&nbsp;
        <span>
          <select name="max" value={filter.max} onChange={filterOnChangeHandler}>
          <option value={900}>1000</option>
            <option value={900}>900</option>
            <option value={800}>800</option>
            <option value={700}>700</option>
            <option value={600}>600</option>
            <option value={500}>500</option>
            <option value={400}>400</option>
            <option value={300}>300</option>
            <option value={200}>200</option>
            <option value={100}>100</option>
          </select>
        </span>
      </div>

      <div className={styles.reset}>
        <button onClick={resetFilter} style={{width:'100%',height:'100%',padding:'1rem' , backgroundColor:'lightblue',borderRadius:'1rem'}}>Reset filter</button>
      </div>


    </div>
  );
};

export default FilterBar;
