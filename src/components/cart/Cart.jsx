import React, { useContext } from 'react'
import Container from '../UI/Container'
import CartContext from '../../store/CartContext'
import MuiCard from '../UI/MuiCard'



const cart = (props) => {
  const ctx=useContext(CartContext)

  const addToCart=(item)=>{
    ctx.addToCart(item)
}
  

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

