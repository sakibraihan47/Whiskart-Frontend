import { createContext, useReducer, useEffect } from "react";
import authReducers from "./Reducers";
import Cookies from "js-cookie";

// const getData = async (url, token) => {
//   const res = await fetch(url, {
//     method: "GET",
//     headers: {
//       Bearer: token,
//     },
//   });

//   const data = await res.json();
//   return data;
// };
export const AuthContext = createContext();
console.log(AuthContext);
export const AuthContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(authReducers, {
  //   user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
  //   token: Cookies.get("token") || null,
  // });
  const [state, dispatch] = useReducer(authReducers, {
    user: null,
    token: null,
    cartCount: parseInt(Cookies.get("localCartCount")) || 0,
  });

  useEffect(() => {
    const user = Cookies.get("user");
    const token = Cookies.get("token");

    if (user && token) {
      dispatch({
        type: "LOGIN",
        payload: { user: JSON.parse(user), token },
      });
    }
  }, []);

  // console.log("AuthContext state: ", state);
  const login = (credentials) => {
    dispatch({
      type: "LOGIN",
      payload: {
        user: credentials.User,
        token: credentials.accessToken,
      },
    });
  };
  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: { user: null, token: null },
    });
  };

  const updateCartCount = (cartCount) => {
    dispatch({
      type: "UPDATE_CART_COUNT",
      payload: { cartCount },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
        login,
        logout,
        updateCartCount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//   useEffect(() => {
//     const firstLogin = Cookies.get("firstLogin");
//     const url = "http://localhost:3002/hiddencontent/";
//     if (firstLogin) {
//       getData(url).then((res) => {
//         if (res.err) return Cookies.remove("firstLogin");
//         dispatch({
//           type: "AUTH",
//           payload: {
//             token: res.accessToken,
//             user: res.user,
//           },
//         });
//       });
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
