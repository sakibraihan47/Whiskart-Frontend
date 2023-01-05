import Cookies from "js-cookie";

const authReducers = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      return { user: null, token: null, updatedState: null };

    case "UPDATE_CART_COUNT":
      let updatedState = {
        ...state,
        cartCount: state.cartCount + action.payload.cartCount,
      };

      Cookies.set("localCartCount", updatedState.cartCount);
      return updatedState;
    default:
      return state;
  }
};

export default authReducers;
