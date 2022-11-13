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
  const [state, dispatch] = useReducer(authReducers, {
    user: Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,
    token: Cookies.get("token") || null,
  });

  useEffect(() => {
    const user = JSON.parse(Cookies.get("user"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);
  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
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
