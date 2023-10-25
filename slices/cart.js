// store/cart.js
const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Add the item to the cart
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case 'REMOVE_FROM_CART':
        // Remove an item from the cart
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  

  
  export default cartReducer;
  