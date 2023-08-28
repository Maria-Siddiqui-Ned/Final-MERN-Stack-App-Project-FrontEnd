import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

export const CartContext = createContext("Initial Value");

const getCartData = () => {
    const data = localStorage.getItem('cart')

    if (data == 'null') {
        return []
    }
    return JSON.parse(data)
}


let data = {
    cart: getCartData()
};

export default function CartContextProvider({ children }) {
    const [cart_state, cart_dispatch] = useReducer(reducer, data);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart_state.cart))
    }, [cart_state.cart])

    const removeFromCart = () => {
        cart_dispatch({
            type: 'REMOVE_FROM_CART'})
        };

  
    return (
        <CartContext.Provider value={{ cart_state, cart_dispatch }}>
            {children}
        </CartContext.Provider>
    );
}