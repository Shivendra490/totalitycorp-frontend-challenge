import { createContext } from "react";

const CartContext=createContext({
    cartItems:[],
    totalCartPrice:0,
    addToCart:(item)=>{},
    removeFromCart:(id)=>{},
    

})

export default CartContext;

// wishListItems:[],
//     addToWishList:()=>{},
//     removeFromWishList:()=>{}