export const reducer = (state, action) => {
  switch (action.type) {
    case "Add_Product":
      return {
        ...state,
        products: action.payload,
      };
    case "Add to Cart":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "Remove from Cart":
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
      };
    default:
  }
};
