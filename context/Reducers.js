const authReducers = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return { user: null, token: null };
    default:
      return state;
  }
};

export default authReducers;
