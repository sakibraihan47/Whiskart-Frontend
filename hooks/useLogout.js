import { AuthContext } from "../context/GlobalState";
import { useContext } from "react";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";

export const useLogout = () => {
  const router = useRouter();
  const { logout: contextLogout } = useContext(AuthContext);

  const logout = async () => {
    // remove user from storage
    Cookies.remove("user");
    Cookies.remove("token");
    // Cookies.remove("localCartCount");

    //dispatch logout action
    // dispatch({ type: "LOGOUT", payload: null });
    contextLogout();
    router.push("/");
  };

  return { logout };
};
