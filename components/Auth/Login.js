import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useLogin } from "../../hooks/useLogin";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { notifyLoginError } from "../../utils/toast";
export const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { login, error, isLoading } = useLogin();
  const [LoginError, setLoginError] = useState("");

  const handleChange = (event) => {
    if (event.target.name == "email") {
      setEmail(event.target.value);
    } else if (event.target.name == "pass") {
      setPass(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    console.log("error", error);
    event.preventDefault();
    try {
      let data = await login(email, pass);
      console.log("🚀 ~ file: Login.js ~ line 28 ~ handleSubmit ~ data", data);

      if (data?.error) {
        return notifyLoginError();
      }

      router.push("/homepage");
    } catch (error) {
      console.log("error", error);
    }

    // const payload = { email, pass };

    // try {
    //   let res = await fetch("http://localhost:3002/signin", {
    //     method: "POST",
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(payload),
    //   });

    //   let response = await res.json();
    //   console.log("Success:", response);
    //   router.push("/homepage");
    // } catch (error) {
    //   console.log(error);
    // }

    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setPass("");
    // setRole("");
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          method="POST"
        >
          <div className="mb-4">
            <p className="text-xl mb-2 mt-0 text-white font-bold">
              Account Login
            </p>
            <label
              className="block text-white text-l font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 focus:border-purple-300 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white"
              value={email}
              name="email"
              id="email"
              type="email"
              placeholder="Email ID"
              required="yes"
              autoComplete="yes"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-l font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 focus:border-purple-300 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white"
              value={pass}
              name="pass"
              id="pass"
              type="password"
              placeholder="*********"
              required=""
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-center mt-5 text-purple-400 hover:underline cursor-pointer font-bold">
            <Link href="/signup">
              <a>Create an account</a>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
