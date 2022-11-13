const artworkReducer = (state, action) => {
  switch (action.type) {
    case `GET_ALL_ARTWORKS`:
      return {
        ...state,
        artworks: action.payload,
      };
    default:
      return state;
  }
};
export default artworkReducer;
