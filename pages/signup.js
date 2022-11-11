import React from "react";
import Footer from "../components/Footer";
import { NavbarSignIn } from "../components/NavbarSignIn";

import Signup from "../components/Signup";

export default function signup() {
  return (
    <>
      <div className="flex h-screen items-center m-b justify-center px-6   bg-gradient-to-r from-gray-800 to-purple-900">
        <Signup />
      </div>
    </>
  );
}
