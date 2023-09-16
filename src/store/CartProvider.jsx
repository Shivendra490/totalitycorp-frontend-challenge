import React, { useReducer } from 'react'
import CartContext from './CartContext'

const defaultCartState={cartItems:[],totalPrice:0}

const cartReducer=(state,action)=>{
  if(action.type==="ADD_TO_CART"){
    console.log('ACTION',action)
    const updatedTotalPrice =state.totalPrice + action.payload.price * action.payload.quantity;
    const updatedItems=state.cartItems.concat(action.payload)
    return {cartItems:updatedItems,totalPrice:updatedTotalPrice}
  }
}

const CartProvider = ({children}) => {
    const [cartState,dispatchAction]=useReducer(cartReducer,defaultCartState)

    const addToCartHandler=(item)=>{
      dispatchAction({type:"ADD_TO_CART",payload:item})
    }
    const removeFromCartHandler=(id)=>{}

    const cartContext={
      cartItems:cartState.cartItems,
      totalCartPrice:cartState.totalPrice,
      addToCart:addToCartHandler,
      removeFromCart:removeFromCartHandler
    }


  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
   
  )
}

export default CartProvider
