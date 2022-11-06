import React from "react";
import Login from "../components/Login";

export default function login() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-green-200">
      <a
        href="#"
        className="flex items-center py-2 font-bold text-black text-4xl"
      >
        WHiSKART
      </a>
      <Login />
    </div>
  );
}
