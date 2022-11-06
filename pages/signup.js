import React from "react";
import Signup from "../components/Signup";

export default function signup() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-blue-400">
        <div className="flex text-black font-bold py-2 text-4xl">WHiSKART</div>
        <Signup />
      </div>
    </>
  );
}
