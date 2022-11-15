import { AuthContext } from "../context/GlobalState";
import { useContext } from "react";
import Cookies from "js-cookie";

export const useLogout = () => {
  const { logout: contextLogout } = useContext(AuthContext);

  const logout = () => {
    // remove user from storage
    Cookies.remove("user");
    Cookies.remove("token");

    //dispatch logout action
    dispatch({ type: "LOGOUT", payload: null });
    // contextLogout(json);
  };

  return { logout };
};
