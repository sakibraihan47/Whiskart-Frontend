import React from "react";

import Login from "../components/Auth/Login";

export default function login() {
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0  bg-gradient-to-r from-gray-800 to-purple-900">
        <Login />
      </div>
    </>
  );
}
export const getServerSideProps = async (context) => {
  let user = context?.req?.cookies?.user;
  console.log(
    "🚀 ~ file: login.js ~ line 16 ~ getServerSideProps ~ user",
    user
  );
  if (user != undefined) {
    user = JSON.parse(user);
  }

  if (user) {
    if (user.role == "artist") {
      return {
        redirect: { permanent: true, destination: "/homepage" },
        props: {},
      };
    } else if (user.role == "buyer") {
      return {
        redirect: { permanent: true, destination: "/homepage" },
        props: {},
      };
    }
  }

  return {
    props: {},
  };
};
