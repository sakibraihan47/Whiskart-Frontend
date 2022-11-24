import { useState, useContext } from "react";
import { AuthContext } from "../context/GlobalState";
import Cookies from "js-cookie";
import { notifyLoginError } from "../utils/toast";

export const useLogin = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(null);
  const { login: contextLogin } = useContext(AuthContext);

  const login = async (email, pass) => {
    setIsLoading(true);
    setError(false);

    const response = await fetch("http://localhost:3002/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, pass }),
    });
    const json = await response.json();

    if (!response.ok) {
      return {
        error: json?.error || "Something went wrong!",
      };
    }
    if (response.ok) {
      // save the user to local storage
      Cookies.set("user", JSON.stringify(json.User));
      Cookies.set("token", json.accessToken);

      // update the auth context
      // dispatch({ type: "LOGIN", payload: json });
      contextLogin(json);

      // update loading state
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
