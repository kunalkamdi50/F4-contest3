import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from '../actions/actionTypes';

const initialState = {
  cartItems: [],
  checkoutStatus: '',
};

const myCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        return state; // Item already exists in the cart, do not add again
      }

      return {
        ...state,
        cartItems: [...state.cartItems, newItem],
      };

    case REMOVE_FROM_CART:
      const itemId = action.payload;
      const updatedCartItems = state.cartItems.filter((item) => item.id !== itemId);
      return {
        ...state,
        cartItems: updatedCartItems,
      };
      case CHECKOUT:
      return {
        ...state,
        cartItems: [],
        checkoutStatus: 'success',
      };

    default:
      return state;
  }
};

export default myCartReducer;
