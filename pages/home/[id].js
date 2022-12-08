import { useState, useEffect } from "react";
import storage from "../../firebase";
import Cookies from "js-cookie";
import Image from "next/image";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  notifyCart,
  notifyCartExist,
  notifyDelete,
  notifyFail,
  notifySuccess,
} from "../../utils/toast";
import { AuthContext } from "../../context/GlobalState";
import { useContext } from "react";
import e from "cors";
import cart from "../cart";

const artworkInfo = ({ artwork, token, buyer }) => {
  const { user } = useContext(AuthContext);

  const [recArt, setRecArt] = useState([]);
  const [chkCart, setCheckCart] = useState([]);
  console.log("🚀 ~ file: [id].js:24 ~ artworkInfo ~ chkCart", chkCart);

  useEffect(() => {
    recommendTo();

    checkCart();
  }, []);
  const recommendTo = async () => {
    try {
      let res = await fetch("http://localhost:3002/recommendation", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user: buyer, artwork: artwork._id }),
      });
      const recommendationList = await res.json();
      setRecArt(recommendationList);
      console.log(
        "🚀 ~ file: [id].js:44 ~ recommendTo ~ recommendationList",
        recommendationList
      );
    } catch (error) {
      console.log(error);
    }
  };

  const addCart = async () => {
    if (chkCart === true) {
      notifyCartExist();
    } else if (chkCart === false) {
      try {
        let res = await fetch("http://localhost:3002/mycart", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ buyer: user.id, artwork }),
        });

        let response = await res.json();
        console.log("🚀 ~ file: [id].js:36 ~ addCart ~ response", response);

        notifyCart();
      } catch (error) {
        console.log(error);
      }
    }
  };

  ////

  const checkCart = async () => {
    const res = await fetch("http://localhost:3002/checkcart/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",

        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ buyer, artwork }),
    });

    const data = await res.json();
    console.log("🚀 ~ file: [id].js:88 ~ checkCart ~ data", data);
    setCheckCart(data);
  };

  return (
    <>
      <ToastContainer />
      {user && user?.role == "artist" && (
        <div className="flex h-screen items-center m-b justify-center px-6 bg-gradient-to-r from-gray-800 to-black">
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
        <div className="flex h-screen flex-col items-center m-b justify-center px-6 bg-gradient-to-r from-gray-800 to-black">
          <div className="">
            {/* <a href="#">
              <img
                className="p-8 rounded-lg"
                src={artwork.img}
                alt="product image"
              />
            </a> */}

            <div className="w-full max-w-sm rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg h-64 w-full "
                  src={artwork.img}
                  alt="product image"
                />
              </a>
              <div className="px-5 pb-5 py-4 ">
                <div className="flex justify-between">
                  <h5 className="text-l font-raleway font-semibold tracking-tight text-gray-900 dark:text-white">
                    {artwork.name}
                  </h5>

                  <div className="text-l font-raleway font-semibold tracking-tight text-gray-900  text-pink-600">
                    <h1>
                      by {artwork.artist.firstName} {artwork.artist.lastName}
                    </h1>
                  </div>
                </div>
                <p className="leading-relaxed text-amber-50 font-semibold py-1 mb-2 text-s">
                  {artwork.des}
                </p>
                <div className="flex justify-between items-center py-1">
                  <h1 className="font-bold text-xs  text-amber-100">Genre</h1>
                  <span className="text-xs font-bold font-raleway uppercase px-2.5 rounded bg-blue-200 text-blue-800 ">
                    {artwork.genre}
                  </span>
                  <h1 className="font-bold text-xs  text-amber-100">Canvas</h1>
                  <span className="text-xs font-bold font-raleway uppercase px-2.5 rounded bg-blue-200 text-blue-800 ">
                    {artwork.canvas}
                  </span>
                  <h1 className="font-bold  text-xs  text-amber-100">Color</h1>
                  <span className="text-xs font-bold font-raleway uppercase px-2.5 rounded bg-blue-200 text-blue-800 ">
                    {artwork.color}
                  </span>
                </div>
                <hr className=" mx-auto w-100 h-1 bg-gray-100 rounded border-0 md:my-4 dark:bg-gray-700"></hr>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 dark:text-pink-600">
                    BDT {artwork.price}
                  </span>

                  {artwork.qty > 0 && (
                    <a
                      onClick={addCart}
                      className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </a>
                  )}
                  {artwork.qty == 0 && (
                    <a className="text-gray-300 uppercase bg-gray-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                      Out of Stock!
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            {/* <a href="#">
              <img
                className="p-8 rounded-lg"
                src={artwork.img}
                alt="product image"
              />
            </a> */}
            <div className="container w-96">
              <div className="  min-h-96 w-full bg-slate-900 rounded-xl p-2">
                <h1 className="font-bold text-l text-rose-400">
                  Recommended for you
                </h1>
                <div className=" flex flex-row p-2 max-w-sm overflow-x-auto">
                  {recArt.map((recommend) => (
                    <div>
                      <div className="w-32 mx-auto px-1">
                        <a className="block relative h-24 overflow-hidden">
                          <img
                            alt="ecommerce"
                            className="object-cover shadow-md object-center rounded w-full h-full block"
                            src={recommend.img}
                          />
                        </a>
                        <div className="mt-1">
                          {/* <h3 className="text-pink-500 text-bold text-xs tracking-widest title-font mb-1">
                            {recommend.artist.firstName}{" "}
                            {recommend.artist.lastName}
                          </h3> */}

                          <a>
                            <h2 className="text-gray-400 title-font text-xs font-medium">
                              {recommend.name}
                            </h2>
                          </a>

                          {/* <p className="text-white title-font text-xs font-medium">
                            BDT {recommend.price}
                          </p> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
  const buyer = JSON.parse(context.req.cookies.user).id;
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

  // let rec = await fetch("http://localhost:3002/recommendation/", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",

  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // rec = await rec.json();

  return {
    props: { artwork: res.artworks, token: token, buyer: buyer },
  };
};

export default artworkInfo;
