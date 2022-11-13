import artworkContext from "./artworkContext";
import { useReducer } from "react";
import artworkReducer from "./artworkreducer";

const artworkState = (props) => {
  const initialState = {
    contents: [],
  };
  const [state, dispatch] = useReducer(artworkReducer, initialState);
  const getAllArtwork = async () => {
    try {
      console.log("enter");
      let res = await fetch("http://localhost:3002/getartwork", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      res = await res.json();
      dispatch = { type: GET_ALL_ARTWORKS, payload: res };
      return res;
    } catch (error) {
      console.log(
        "🚀 ~ file: artworkState.js ~ line 22 ~ getAllArtwork ~ error",
        error
      );
    }
  };
  return (
    <artworkContext.Provider
      value={{ contents: state.contents, getAllArtwork }}
    >
      {props.children}
    </artworkContext.Provider>
  );
};
export default artworkState;
