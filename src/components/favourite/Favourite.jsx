import React from 'react'
import { DUMMY_PRODUCTS } from '../../App'
import ProductCard from '../UI/ProductCard'
import Container from '../UI/Container'


const Favourite = (props) => {
  return (
    <Container from="wishlist">
      {DUMMY_PRODUCTS.map(product=>{
        return <ProductCard product={product} key={product.id} from="wishlist"/>
      })}
    </Container>
  )
}

export default Favourite
