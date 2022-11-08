import React from "react";
import Footer from "../components/Footer";
import { NavbarSignIn } from "../components/NavbarSignIn";

import Signup from "../components/Signup";

export default function signup() {
  return (
    <>
      <NavbarSignIn />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  bg-gradient-to-r from-gray-800 to-purple-900">
        <Signup />
      </div>
      <Footer />
    </>
  );
}
