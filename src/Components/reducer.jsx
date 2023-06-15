export const initialState = {
  cart: [],
  total: null,
};
export const actionType = {
  SET_CART: "SET_CART",
  SET_TOTAL: "SET_TOTAL",
};

const reducer = (state, action) => {
 
  console.table(action.cart);

  switch (action.type) {
    case 'SET_CART':
      return {
        ...state,
        cart: action.cart,
      };

    case 'SET_TOTAL':
      return {
        ...state,
        total: action.total,
      };

    default:
      return state;
  }
};

export default reducer;
