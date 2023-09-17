import React, { useContext } from 'react'
import { DUMMY_PRODUCTS } from '../../App'
import ProductCard from '../UI/ProductCard'
import Container from '../UI/Container'
import CartContext from '../../store/CartContext'
import MuiCard from '../UI/MuiCard'


const cart = (props) => {
  const ctx=useContext(CartContext)

  const addToCart=(item)=>{
    ctx.addToCart(item)
}
  console.log('CTX',ctx)

  const remove1Cart=(id)=>{
    ctx.removeFromCart(id)
}
  return (
    <Container from='cart'>
      {ctx.cartItems?.map(product=>{
        return <MuiCard onAddToCart={addToCart} product={product} key={product.id} from="cart"  onRemoveFromCart={remove1Cart}/>
      })}
    </Container>
  )
}

export default cart



{/* <ProductCard product={product} key={product.id} onAddToCart={addToCart} from='cart' onRemoveFromCart={remove1Cart}/> */}
