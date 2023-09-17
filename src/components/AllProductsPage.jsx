import { useEffect, useState } from 'react';
import styles from './AllProductsPage.module.css'

// import Container from './UI/Container';
import Products from './products/Products';
import FilterBar from './nav/FilterBar';
import productItems from './../api/api'




const AllProductsPage = (props) => {

  const [productsList,setProductsList]=useState([])

  useEffect(()=>{
    setProductsList(productItems)

  },[])

//   const filterCategory=(category)=>{
//     console.log('cate',category)
//     if(category==='All'){
//         setProductsList(productItems)
//         return

//     }
//     const categoryFilteredItems=productItems?.filter((product)=>{
//         return product.category===category
//     })
//     setProductsList(categoryFilteredItems)
//   }

//   const searchFilter=(key)=>{
//     const searchFilteredItems=productItems?.filter((product)=>{
//         return product.name.toLowerCase().includes(key.toLowerCase())
//     })

//     setProductsList(searchFilteredItems)

//   }

const filterItems=(filterObj)=>{
    const {category,searchKey,min,max,rating} =filterObj

    const filteredProducts=productItems?.filter((item)=>{
        if(category==='All'){
            return item
        }else{
            return item.category===category
        }
    })
    .filter((item)=>{
        if(!searchKey){
            return item
        }else{
            return item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())
        }
    })
    .filter((item)=>{
        if(rating==='All'){
            return item
        }else{
            return item.rating>=rating
        }
    })
    .filter((item)=>{
        return min<=item.price && max>=item.price
    })
    setProductsList(filteredProducts)
}


  return (
    <main className={styles.allProductsWrapper}>
      <FilterBar onFilter={filterItems}/>
      <Products productsList={productsList}/>
    </main>
  )
}



export default AllProductsPage
