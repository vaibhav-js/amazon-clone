export const initialState = {
    cart: [],
    user: null
};

export const getCartTotalAmount = (cart) => cart?.reduce((amount, item) => (item.price * item.quantity) + amount, 0);
export const getCartTotalItems = (cart) => cart?.reduce((total, item) => item.quantity + total, 0);

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            const existingItem = state.cart.find((cartItem) => cartItem.id === action.item.id);
            if (existingItem) {
                const updatedCart = state.cart.map((item) => item.id === action.item.id ? {...item, quantity: item.quantity + 1} : item)
                return {
                    ...state,
                    cart: updatedCart
                }
            } else {
                const newItem = {...action.item, quantity: 1};
                return {
                    ...state,
                    cart: [...state.cart, newItem]
                };
            }

        case "REMOVE_FROM_CART":
            const cartItem = state.cart.find((item) => item.id === action.item.id);
            if (cartItem) {
                if (cartItem.quantity === 1) {
                    const updatedCart = state.cart.filter((item) => item.id !== action.item.id);
                    return {
                        ...state,
                        cart: updatedCart
                    }
                } else {
                    const updatedCart = state.cart.map((item) => item.id === action.item.id ? { ...item, quantity: item.quantity - 1 } : item);
                    return {
                        ...state,
                        cart: updatedCart
                    }
                }
            } else {
                console.warn(`Can't remove product (id: ${action.item.id}) as it is not in cart!`)
                return state
            }

        case "EMPTY_CART":
            return {
                ...state,
                cart: []
            }

        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
            
        default:
            return state;
    }
}

export default reducer;