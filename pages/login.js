import React from "react";
import Login from "../components/Login";
import { IoLogoOctocat } from "react-icons/Io";

export default function login() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-gray-600">
      <a
        href="#"
        class="flex items-center mb-2 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <IoLogoOctocat />
        WHiSKART
      </a>
      <p class="text-xl mb-2 mt-0 text-white font-bold">Account Login</p>
      <Login />
    </div>
  );
}
