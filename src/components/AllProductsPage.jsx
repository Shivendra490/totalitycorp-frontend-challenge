import styles from './AllProductsPage.module.css'
import Product from './single-product/Product'



const AllProductsPage = (props) => {
  return (
    <div className={styles.allproductswrapper}>
      <Product productsList={props.productsList}/>
    </div>
  )
}



export default AllProductsPage
