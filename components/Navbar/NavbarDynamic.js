// import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout.js";
import { AuthContext } from "../../context/GlobalState";
import { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavbarDynamic = () => {
  const [item, setItem] = useState([]);

  const activeLink = "text-blue-400 ";
  const normalLink = "text-white";
  const activeLinkB = "text-green-300 ";

  const router = useRouter();
  const currentRoute = router.pathname;
  const { logout } = useLogout();

  const { user, cartCount } = useContext(AuthContext);

  const handleClick = () => {
    logout();
  };

  return (
    <>
      {user && user?.role == "artist" && (
        <nav className="fixed z-20 bg-white px-2 sm:px-4 py-1 dark:bg-gray-900  w-full top-0 left-0">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a className="flex items-center">
              <Link href="/">
                <span className="font-raleway self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  WHiSKART
                </span>
              </Link>
            </a>

            <div className="flex md:order-2">
              <div className="block relative">
                <a className="text-blue-200 uppercase text-xl p-2 inline-flex items-center">
                  {user.firstName}
                </a>
                <a className="text-white text-xl p-2 inline-flex items-center">
                  {user.email}
                </a>
              </div>
              <button
                onClick={handleClick}
                type="button"
                className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
              >
                Logout
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li
                  className={
                    currentRoute == "/homepage" ? activeLink : normalLink
                  }
                >
                  <Link href="/homepage">
                    <a
                      className={`block py-2 pr-4 pl-3 text-white text-xl bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-pink-500 ${
                        currentRoute == "/homepage" ? activeLink : normalLink
                      }`}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/mygallery">
                    <a
                      className={`block py-2 pr-4 pl-3 text-white text-xl bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-pink-500 ${
                        currentRoute == "/mygallery" ? activeLink : normalLink
                      }`}
                    >
                      My Gallery
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/artistList">
                    <a
                      className={`block py-2 pr-4 pl-3 text-white text-xl bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-pink-500 ${
                        currentRoute == "/artistList" ? activeLink : normalLink
                      }`}
                    >
                      Artists
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/post">
                    <a
                      className={`block py-2 pr-4 pl-3 text-white text-xl bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-pink-500 ${
                        currentRoute == "/post" ? activeLink : normalLink
                      }`}
                    >
                      Post+
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
      {user && user?.role == "buyer" && (
        <nav className="bg-white z-20 px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full top-0 left-0">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
              <span className="font-raleway  self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                WHiSKART
              </span>
              {user.cartContent}
            </a>

            <div className="flex md:order-2">
              <div className="block relative">
                <a className="text-green-300 uppercase text-xl p-2 inline-flex items-center">
                  {user.firstName}
                </a>
                <a className="text-white text-xl p-2 inline-flex items-center">
                  {user.email}
                </a>
              </div>
              <button
                onClick={handleClick}
                type="button"
                className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
              >
                Logout
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li
                  className={
                    currentRoute == "/homepage" ? activeLinkB : normalLink
                  }
                >
                  <Link href="/homepage">
                    <a
                      className={`block py-2 pr-4 pl-3 text-white text-xl bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-pink-500 ${
                        currentRoute == "/homepage" ? activeLinkB : normalLink
                      }`}
                    >
                      Home
                    </a>
                  </Link>
                </li>
                {/* <li>
                  <Link href="/recent">
                    <a
                      className={`block py-2 pr-4 pl-3 text-white text-xl bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-pink-500 ${
                        currentRoute == "/recent" ? activeLinkB : normalLink
                      }`}
                    >
                      Recent
                    </a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/artistList">
                    <a
                      className={`block py-2 pr-4 pl-3 text-white text-xl bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-pink-500 ${
                        currentRoute == "/artistList" ? activeLinkB : normalLink
                      }`}
                    >
                      Artists
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/cart">
                    <a
                      className={`block py-2 pr-4 pl-3 text-white text-xl bg-blue-700 rounded md:bg-transparent md:p-0 hover:text-pink-500 ${
                        currentRoute == "/cart" ? activeLinkB : normalLink
                      }`}
                    >
                      My Cart
                      {/* <span className="text-pink-400">
                        {" "}
                        {`(${cartCount > 0 ? cartCount : ""})`}
                      </span> */}
                    </a>
                    {/* {cart.length} */}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
      {!user && (
        <nav className="px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0  dark:border-gray-600">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
              <img />
              <span className="font-raleway  self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                WHiSKART
              </span>
            </a>

            <div className="flex md:order-2">
              <a
                href="/login"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign In
              </a>
            </div>
          </div>
        </nav>
      )}
      {currentRoute == "/login" && (
        <nav className="px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0  dark:border-gray-600">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
              <img />
              <span className="font-raleway  self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                WHiSKART
              </span>
            </a>

            <div className="flex md:order-2">
              <a
                href="/signup"
                type="button"
                className="text-black font-bold bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-pink-700  dark:hover: dark:focus:ring-green-400"
              >
                Create a new Account Instead
              </a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
