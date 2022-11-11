import { createContext, useReducer, useEffect } from "react";
import authReducers from "./Reducers";

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
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
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
//     const firstLogin = localStorage.getItem("firstLogin");
//     const url = "http://localhost:3002/hiddencontent/";
//     if (firstLogin) {
//       getData(url).then((res) => {
//         if (res.err) return localStorage.removeItem("firstLogin");
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
