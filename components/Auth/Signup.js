import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { notifySignup } from "../../utils/toast";
import { ToastContainer } from "react-toastify";
import Link from "next/link";

export const Signup = () => {
  // const [user, setUser] = useState({
  //   email: "",
  // });
  // const handleUser = (key, value) => setUser({ ...user, [key]: value });
  const router = useRouter();
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
      notifySignup();
      setTimeout(() => {
        router.push("/login");
      }, 2000);
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
      <ToastContainer />
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
            <div className="flex ">
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
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 focus:border-purple-300 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white"
                  placeholder="First Name"
                  required=""
                  onChange={handleChange}
                />
              </div>
              <div className="ml-5">
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
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 focus:border-purple-300 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white"
                  placeholder="Last Name"
                  required=""
                  onChange={handleChange}
                />
              </div>
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 focus:border-purple-300 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white"
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 focus:border-purple-300 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white"
                required=""
                onChange={handleChange}
              />
            </div>
            {/* <div className="flex items-center justify-around">
              <div className="">
                <input
                  checked={role === "buyer"}
                  value="buyer"
                  id="bordered-radio-1"
                  type="radio"
                  name="bordered-radio"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2"
                />
                <label
                  for="artist"
                  className=" text-bold text-red-400 py-1 ml-2 w-full text-sm font-medium text-gray-300"
                >
                  Buyer
                </label>
              </div>
              <div className="">
                <input
                  checked={role === "artist"}
                  value="artist"
                  id="bordered-radio-2"
                  type="radio"
                  name="bordered-radio"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  className="colored-radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="buyer"
                  className="text-bold text-blue-400 py-4 ml-2 w-full text-sm font-medium text-gray-300"
                >
                  Artist
                </label>
              </div>
            </div> */}
            <ul class="grid gap-6 w-full md:grid-cols-2">
              <li>
                <input
                  checked={role === "buyer"}
                  value="buyer"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  type="radio"
                  id="hosting-small"
                  name="hosting"
                  class="hidden peer"
                  required
                />
                <label
                  for="hosting-small"
                  class="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-300 peer-checked:border-red-300 peer-checked:text-blue-300 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <div class="w-full text-lg font-semibold">Buyer</div>
                  </div>
                  <svg
                    aria-hidden="true"
                    class="ml-3 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </label>
              </li>
              <li>
                <input
                  checked={role === "artist"}
                  value="artist"
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  type="radio"
                  id="hosting-big"
                  name="hosting"
                  class="hidden peer"
                />
                <label
                  for="hosting-big"
                  class="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-300 peer-checked:border-green-300 peer-checked:text-green-300 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <div class="block">
                    <div class="w-full text-lg font-semibold">Artist</div>
                  </div>
                  <svg
                    aria-hidden="true"
                    class="ml-3 w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </label>
              </li>
            </ul>
            <button
              type="submit"
              className="w-full text-white bg-red-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-white">
              Already have an account?{" "}
              <Link href="/login">
                <a className="font-medium text-blue-500 hover:underline">
                  Login here
                </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Signup;
