import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = { cartItems: [], totalPrice: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const updatedTotalPrice =
      state.totalPrice + action.item.price * action.item.quantity;
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item?.id === action.item.id
    );

    const existingCartItem = state.cartItems[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.cartItems.concat(action.item);
    }
    return { cartItems: updatedItems, totalPrice: updatedTotalPrice };
  }

  if (action.type === "REMOVE_FROM_CART") {
    const existingCartItemIndex = state.cartItems.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.cartItems[existingCartItemIndex];
    const updatedTotalPrice = state.totalPrice - existingItem.price;

    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = state.cartItems.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...state.cartItems];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      cartItems: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }
  if(action.type==="CLEAR_CART"){
    return defaultCartState

    
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchAction] = useReducer(cartReducer, defaultCartState);

  const addToCartHandler = (item) => {
    dispatchAction({ type: "ADD_TO_CART", item: item });
  };
  const removeFromCartHandler = (id) => {
    dispatchAction({ type: "REMOVE_FROM_CART", id: id });
  };
  const emptyCart=()=>{
    dispatchAction({type:'CLEAR_CART'})
  }

  const cartContext = {
    cartItems: cartState.cartItems,
    totalCartPrice: cartState.totalPrice,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
    clearCart:emptyCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
