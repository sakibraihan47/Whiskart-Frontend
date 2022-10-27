import React from "react";
import { useState, useEffect } from "react";

export const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-l font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              required="on"
              autoComplete="off"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-l font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*********"
              required="on"
            />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-center">
            <button
              class="bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
          <div class="flex items-center justify-center mt-5 text-green-400 hover:underline cursor-pointer font-bold">
            <a>Create an account</a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
