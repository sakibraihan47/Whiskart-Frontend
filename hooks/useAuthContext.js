// import { AuthContext } from "../context/GlobalState";
// import { useContext } from "react";

// export const useAuthContext = () => {
//   const context = useContext(AuthContext);

//   if (!context) {
//     throw Error("useAuthContext must be used inside an AuthContextProvider");
//   }

//   return context;
// };
import { createContext } from "react";
const authContext = createContext();
export default authContext;
