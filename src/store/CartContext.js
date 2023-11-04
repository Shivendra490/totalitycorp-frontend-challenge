import { createContext } from "react";

const CartContext=createContext({
    cartItems:[],
    totalCartPrice:0,
    addToCart:(item)=>{},
    removeFromCart:(id)=>{},
    clearCart:()=>{}
    

})

export default CartContext;
