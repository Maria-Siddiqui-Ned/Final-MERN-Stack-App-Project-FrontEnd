export const reducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART": {
            return { ...state, cart: [...state.cart, action.payload] }
        }

        case "CHECKOUT":
            return { state, cart: [] }

        case 'CLEAR_CART':
            return { ...state, cart: [] };

        case 'UPDATE_CART':
            return { ...state, cart: action.payload };

        case 'REMOVE_FROM_CART':
            const updatedCart = state.cart.filter(item => item.id !== action.productId);
            return { ...state, cart: updatedCart };

           default: {
            return state;
        }
    }
}