import React from "react";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { NavbarSignIn } from "../components/NavbarSignIn";

export default function login() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  bg-gradient-to-r from-gray-800 to-purple-900">
        <Login />
      </div>
    </>
  );
}
