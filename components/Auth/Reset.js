import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { notifyReset, notifyUserError } from "../../utils/toast";

const Reset = () => {
  const [chkUser, setCheckUser] = useState("");
  console.log("🚀 ~ file: Reset.js:15 ~ Reset ~ chkUser", chkUser);
  const checkUser = async () => {
    const res = await fetch("http://localhost:3002/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (data === false) {
      notifyUserError();
    }
    setCheckUser(data);
  };
  const passReset = async () => {
    const res = await fetch("http://localhost:3002/resetpassword", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, pass }),
    });
    const passdata = await res.json();
    if (passdata) {
      notifyReset();
      setTimeout(() => {
        router.push("/login");
      }, 4000);
    }
  };
  const router = useRouter();
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
    try {
      await checkUser();

      if (chkUser === true) {
        passReset();
      } else if (chkUser == false) {
        notifyUserError;
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
          method="POST"
        >
          <div className="mb-4">
            <p className="text-center item-center text-xl mb-2 mt-0 text-pink-500 font-bold py-6">
              Reset your Password
            </p>
            <label
              className="block text-white text-sm font-bold mb-2"
              for="email"
            >
              Confirm You Email Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 focus:border-purple-300 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white"
              value={email}
              name="email"
              id="email"
              type="email"
              placeholder="Email ID"
              required="yes"
              autoComplete="no"
              onChange={handleChange}
            />
          </div>
          {chkUser == false && (
            <div className="flex items-center justify-center">
              <button
                className="bg-purple-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={checkUser}
              >
                Verify
              </button>
            </div>
          )}

          {chkUser == true && (
            <div className="mb-6">
              <label
                className="block text-white text-l font-bold mb-2"
                for="password"
              >
                Enter New Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 focus:border-purple-300 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white"
                value={pass}
                name="pass"
                id="pass"
                type="password"
                placeholder="*********"
                required=""
                onChange={handleChange}
              />
            </div>
          )}
          {chkUser == true && (
            <div className="flex items-center justify-center">
              <button
                className="bg-pink-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Reset Password
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Reset;
