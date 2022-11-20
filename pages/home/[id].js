import { useState } from "react";
import storage from "../../firebase";
import Cookies from "js-cookie";
import Image from "next/image";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  notifyCart,
  notifyDelete,
  notifyFail,
  notifySuccess,
} from "../../utils/toast";
import { AuthContext } from "../../context/GlobalState";
import { useContext } from "react";

// import { useRouter } from "next/router";

const artworkInfo = ({ artwork }) => {
  const { user } = useContext(AuthContext);

  const addCart = () => {
    notifyCart();
  };
  console.log("🚀 ~ file: [id].js ~ line 161 ~ artworkInfo ~ artwork", artwork);
  // const router = useRouter();

  // const handleSubmit = async (event) => {
  // event.preventDefault();
  // const payload = { name, des, canvas, price, qty, genre, color };
  // console.log("Payload:", payload);

  //   try {
  //     let res = await fetch(
  //       `http://localhost:3002/updateartwork/${artwork._id}`,
  //       {
  //         method: "PUT",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${Cookies.get("token")}`,
  //         },
  //         body: JSON.stringify(payload),
  //       }
  //     );

  //     let response = await res.json();
  //     notifySuccess();

  //     setTimeout(() => {
  //       router.reload(window.location.pathname);
  //     }, 5000);

  //     console.log("response", response);
  //   } catch (error) {
  //     notifyFail();
  //     console.log("error", error);
  //   }
  // };

  return (
    <>
      <ToastContainer />
      {user && user?.role == "artist" && (
        <div className="flex h-screen items-center m-b justify-center px-6   bg-gradient-to-r from-gray-800 to-black">
          <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="p-8 rounded-t-lg rounded-md"
                src={artwork.img}
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {artwork.name}
                </h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5 text-pink-600">
                <h1>
                  {artwork.artist.firstName} {artwork.artist.lastName}
                </h1>
              </div>
              <div class="flex items-center mt-2.5 mb-5">
                <h1 className="font-bold text-amber-100">Genre</h1>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {artwork.genre}
                </span>
                <h1 className="font-bold text-amber-100">Canvas</h1>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {artwork.canvas}
                </span>
                <h1 className="font-bold text-amber-100">Color</h1>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {artwork.color}
                </span>
              </div>
              <p className="leading-relaxed text-white py-1">{artwork.des}</p>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-pink-600">
                  BDT {artwork.price}
                </span>
                {/* <a
                onClick={addCart}
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a> */}
              </div>
            </div>
          </div>
        </div>
      )}
      {user && user?.role == "buyer" && (
        <div className="flex h-screen items-center m-b justify-center px-6   bg-gradient-to-r from-gray-800 to-black">
          <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="p-8 rounded-t-lg"
                src={artwork.img}
                alt="product image"
              />
            </a>
            <div class="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {artwork.name}
                </h5>
              </a>
              <div class="flex items-center mt-2.5 mb-5 text-pink-600">
                <h1>
                  {artwork.artist.firstName} {artwork.artist.lastName}
                </h1>
              </div>
              <div class="flex items-center mt-2.5 mb-5">
                <h1 className="font-bold text-amber-100">Genre</h1>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {artwork.genre}
                </span>
                <h1 className="font-bold text-amber-100">Canvas</h1>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {artwork.canvas}
                </span>
                <h1 className="font-bold text-amber-100">Color</h1>
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                  {artwork.color}
                </span>
              </div>
              <p className="leading-relaxed text-white py-1">{artwork.des}</p>
              <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-pink-600">
                  BDT {artwork.price}
                </span>
                <a
                  onClick={addCart}
                  class="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;
  if (!token) {
    return { redirect: { permanent: true, destination: "/" }, props: {} };
  }
  const { params } = context;
  const { id } = params;

  let res = await fetch(`http://localhost:3002/getthisartwork/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  });
  res = await res.json();
  return {
    props: { artwork: res.artworks },
  };
};

export default artworkInfo;
