import React from "react";
import { useState, useEffect } from "react";

export const Signup = () => {
  // const [user, setUser] = useState({
  //   email: "",
  // });
  // const handleUser = (key, value) => setUser({ ...user, [key]: value });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRole] = useState("");

  const handleChange = (event) => {
    if (event.target.name == "firstName") {
      setFirstName(event.target.value);
    } else if (event.target.name == "lastName") {
      setLastName(event.target.value);
    } else if (event.target.name == "email") {
      setEmail(event.target.value);
    } else if (event.target.name == "pass") {
      setPass(event.target.value);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = { firstName, lastName, email, pass, role };
    console.log(payload);

    try {
      let res = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let response = await res.json();
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPass("");
    setRole("");
  };

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Account Creation
          </h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
            method="POST"
          >
            <div>
              <label
                for="f_name"
                className="block mb-2 text-sm font-medium text-white"
              >
                First Name
              </label>
              <input
                value={firstName}
                type="firstName"
                name="firstName"
                id="firstName"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-200 focus:border-blue-600 block w-full p-2.5"
                placeholder="First Name"
                required=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                for="l_name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Last Name
              </label>
              <input
                value={lastName}
                type="lastName"
                name="lastName"
                id="lastName"
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Last Name"
                required=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email Address
              </label>
              <input
                value={email}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="hello@gmail.com"
                required=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                value={pass}
                name="pass"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required=""
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                for="confirm-password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                required=""
              />
            </div>
            <div className="flex items-center justify-around">
              <div className="flex items-center pl-4 pr-4 rounded border border-blue-700">
                <input
                  checked={role === "buyer"}
                  value="buyer"
                  id="bordered-radio-1"
                  type="radio"
                  name="bordered-radio"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="artist"
                  className="py-4 ml-2 w-full text-sm font-medium text-gray-300"
                >
                  You are a Buyer
                </label>
              </div>
              <div className="flex items-center pl-4 pr-4 rounded border border-green-700">
                <input
                  checked={role === "artist"}
                  value="artist"
                  id="bordered-radio-2"
                  type="radio"
                  name="bordered-radio"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="buyer"
                  className="py-4 ml-2 w-full text-sm font-medium text-gray-300"
                >
                  You are an Artist
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-red-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-white">
              Already have an account?{" "}
              <a href="#" className="font-medium text-blue-500 hover:underline">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
