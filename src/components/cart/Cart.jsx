import React, { useContext } from 'react'
import { DUMMY_PRODUCTS } from '../../App'
import ProductCard from '../UI/ProductCard'
import Container from '../UI/Container'
import CartContext from '../../store/CartContext'


const cart = (props) => {
  const ctx=useContext(CartContext)
  return (
    <Container from='cart'>
      {ctx.cartItems?.map(product=>{
        return <ProductCard product={product} key={product.id} from='cart'/>
      })}
    </Container>
  )
}

export default cart
