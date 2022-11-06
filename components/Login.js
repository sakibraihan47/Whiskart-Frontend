import React from "react";
import { useState, useEffect } from "react";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleChange = (event) => {
    if (event.target.name == "email") {
      setEmail(event.target.value);
    } else if (event.target.name == "pass") {
      setPass(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { email, pass };

    try {
      let res = await fetch("http://localhost:3002/signin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let response = await res.json();
      console.log("Success:", response);
    } catch (error) {
      console.log(error);
    }

    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setPass("");
    // setRole("");
  };

  return (
    <>
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              name="email"
              id="email"
              type="email"
              placeholder="Email ID"
              required=""
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
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              value={pass}
              name="pass"
              id="pass"
              type="password"
              placeholder="*********"
              required=""
              onChange={handleChange}
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="flex items-center justify-center mt-5 text-green-400 hover:underline cursor-pointer font-bold">
            <a>Create an account</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
