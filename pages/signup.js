import React from "react";
import Signup from "../components/Signup";
import { IoLogoOctocat } from "react-icons/Io";

export default function signup() {
  return (
    <>
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-blue-400">
        <div class="flex text-black font-bold py-2 text-4xl">
          <IoLogoOctocat />
          WHiSKART
        </div>
        <Signup />
      </div>
    </>
  );
}
