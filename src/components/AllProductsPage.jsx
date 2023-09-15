import styles from './AllProductsPage.module.css'
import Product from './single-product/Product'


const AllProductsPage = () => {
  return (
    <div className={styles.allproductswrapper}>
      <Product/>
    </div>
  )
}

export default AllProductsPage
