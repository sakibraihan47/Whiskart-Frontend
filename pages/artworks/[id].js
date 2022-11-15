import { useState } from "react";
import storage from "../../firebase";
import Cookies from "js-cookie";
import Image from "next/image";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notifyFail } from "../../utils/toast";
import { notifySuccess } from "../../utils/toast";
import { useRouter } from "next/router";

const EditArtwork = ({ artwork }) => {
  const router = useRouter();

  const [name, setName] = useState();
  const [des, setDes] = useState();
  const [canvas, setCanvas] = useState();
  const [price, setPrice] = useState();
  const [qty, setQty] = useState();
  const [genre, setGenre] = useState();
  const [color, setColor] = useState();
  const src = artwork.img;

  // const [artId, setId] = useState();

  // const uploadImage = async (event) => {
  // artwork.preventDefault();

  //   if (imageUpload == null) return;
  //   const imageRef = ref(storage, `images/${imageUpload.name}`);
  //   uploadBytes(imageRef, imageUpload).then((byte) => {
  //     console.log(
  //       "🚀 ~ file: EditArtwork.js ~ line 22 ~ uploadBytes ~ byte",
  //       byte
  //     );

  //     alert("Image has been Uploaded");
  //   });

  //   getDownloadURL(imageRef).then((url) => {
  //     // return resolve(url);
  //     handleSubmit(url);
  //     return url;
  //   });
  // };

  const handleChange = (event) => {
    if (event.target.name == "name") {
      setName(event.target.value);
    }
    //else {
    //   setName(artwork.name);
    // }
    else if (event.target.name == "des") {
      setDes(event.target.value);
    }
    //else {
    //   setDes(artwork.des);
    // }
    else if (event.target.name == "canvas") {
      setCanvas(event.target.value);
    }
    //else {
    //   setCanvas(artwork.canvas);
    // }
    else if (event.target.name == "price") {
      setPrice(event.target.value);
    }
    //else {
    //   setPrice(artwork.price);
    // }
    else if (event.target.name == "qty") {
      setQty(event.target.value);
    }

    //else {
    //   setQty(artwork.qty);
    // }
    else if (event.target.name == "genre") {
      setGenre(event.target.value);
    }
    //else {
    //   setGenre(artwork.genre);
    // }
    else if (event.target.name == "color") {
      setColor(event.target.value);
    }
    //else {
    //   setColor(artwork.color);
    // }
    // setId(artwork.id);
  };
  const handleSubmit = async (event) => {
    // if (event.target.name == "name" && event.target.value == " ") {
    //   notifyFail();
    // }
    // const artId = "637117b0d959022912b6f10a"; //artwork.id;
    event.preventDefault();
    // Promise.resolve(uploadImage).then((img) => console.log("image", img));
    // const id = artwork.id;
    // const currrentArt = artId;
    const payload = { name, des, canvas, price, qty, genre, color };
    console.log("Payload:", payload);

    try {
      let res = await fetch(
        `http://localhost:3002/updateartwork/${artwork._id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
          body: JSON.stringify(payload),
        }
      );

      let response = await res.json();
      notifySuccess();

      setTimeout(() => {
        router.reload(window.location.pathname);
      }, 5000);

      console.log("response", response);
    } catch (error) {
      notifyFail();
      console.log("error", error);
    }
  };

  const deleteThis = async () => {
    try {
      let res = await fetch(`http://localhost:3002/delartwork/${artwork._id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });

      let response = await res.json();
      router.back();
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-purple-900">
        <div className="p-6 bg-blue-100 rounded  ">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center">
              <div className="font-bold text-s text-blue-500">
                <h1>Artwork Details</h1>
                <small>ID: {artwork._id}</small>
              </div>
              <div className=" flex items-center  p-3">
                <Image
                  className="rounded"
                  src={src}
                  loader={() => src}
                  alt="this image"
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="name"
                name="name"
                id="name"
                value={name}
                className="block py-2.5 px-0 w-full font-bold text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder={artwork.name}
                onChange={handleChange}
              />
              <label
                htmlFor="name"
                className="absolute peer-focus:dark:text-blue-500 text-xs font-bold text-gray-400"
              >
                Artwork Name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="name"
                name="des"
                id="description"
                value={des}
                className="block py-2.5 px-0 w-full font-bold text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder={artwork.des}
                onChange={handleChange}
              />
              <label
                htmlFor="description"
                className="absolute peer-focus:dark:text-blue-500 text-xs font-bold text-gray-400"
              >
                Description
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="canvas"
                name="canvas"
                id="canvas"
                className="block py-2.5 px-0 w-full font-bold text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder={artwork.canvas}
                value={canvas}
                onChange={handleChange}
              />
              <label
                htmlFor="canvas"
                className="absolute peer-focus:dark:text-blue-500 text-xs font-bold text-gray-400"
              >
                Canvas
              </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="qty"
                  id="qty"
                  className="block py-2.5 px-0 w-full font-bold text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  value={qty}
                  placeholder={artwork.qty}
                  onChange={handleChange}
                />
                <label
                  htmlFor="qty"
                  className="absolute peer-focus:dark:text-blue-500 text-xs font-bold text-gray-400"
                >
                  Quantity
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="block py-2.5 px-0 w-full font-bold text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder={artwork.price}
                  value={price}
                  onChange={handleChange}
                />
                <label
                  htmlFor="price"
                  className="absolute peer-focus:dark:text-blue-500 text-xs font-bold text-gray-400"
                >
                  Unit Price
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 mb-8">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="genre"
                  id="genre"
                  className="block py-2.5 px-0 w-full font-bold text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder={artwork.genre}
                  value={genre}
                  onChange={handleChange}
                />
                <label
                  htmlFor="genre"
                  className="absolute peer-focus:dark:text-blue-500 text-xs font-bold text-gray-400"
                >
                  Genre
                </label>
              </div>
              <div className="relative z-0 mb-2 w-full group">
                <input
                  type="text"
                  name="color"
                  id="color"
                  className="block py-2.5 px-0 w-full font-bold text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder={artwork.color}
                  value={color}
                  onChange={handleChange}
                />
                <label
                  htmlFor="color"
                  className="absolute peer-focus:dark:text-blue-500 text-xs font-bold text-gray-400"
                >
                  Color
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="font-bold text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Save Changes
            </button>
            <button
              type=""
              onClick={deleteThis}
              className="text-black mx-4 bg-white font-bold hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              DELETE
            </button>
          </form>
        </div>
      </div>
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

export default EditArtwork;
