import React from "react";
import { useState, useEffect } from "react";

export const Signup = () => {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [type, setUserType] = useState("");

  const handleSubmit = async (event) => {
    const form = { fname, lname, email, pass, type };
  };

  return (
    <>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Account Creation
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="f_name"
                class="block mb-2 text-sm font-medium text-white"
              >
                First Name
              </label>
              <input
                type="firstName"
                name="firstName"
                id="firstName"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-200 focus:border-blue-600 block w-full p-2.5"
                placeholder="First Name"
                required=""
              />
            </div>
            <div>
              <label
                for="l_name"
                class="block mb-2 text-sm font-medium text-white"
              >
                Last Name
              </label>
              <input
                type="lastName"
                name="lastName"
                id="lastName"
                class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-blue-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Last Name"
                required=""
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="hello@gmail.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required=""
              />
            </div>
            <div>
              <label
                for="confirm-password"
                class="block mb-2 text-sm font-medium text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-blue-600 block w-full p-2.5"
                required=""
              />
            </div>
            <div class="flex justify-center">
              <div class="flex items-center h-5">
                <input
                  id="artist"
                  aria-describedby="artist"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>

              <div class="ml-3 text-sm">
                <label for="artist" class="font-bold text-white">
                  Create as an Artist
                </label>
              </div>
              <div class="flex items-center h-5 ml-5">
                <input
                  id="buyer"
                  aria-describedby="buyer"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required=""
                />
              </div>

              <div class="ml-3 text-sm">
                <label for="buyer" class="font-bold text-white">
                  Create as a Buyer
                </label>
              </div>
            </div>

            <button
              type="submit"
              class="w-full text-white bg-red-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create an account
            </button>
            <p class="text-sm font-light text-white">
              Already have an account?{" "}
              <a href="#" class="font-medium text-blue-500 hover:underline">
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
