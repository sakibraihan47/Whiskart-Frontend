import { useState } from "react";
import storage from "../firebase";
import Cookies from "js-cookie";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const ArtworkPost = () => {
  const [imageUpload, setImageUpload] = useState();
  const [name, setName] = useState();
  const [des, setDes] = useState();
  const [canvas, setCanvas] = useState();
  const [price, setPrice] = useState();
  const [qty, setQty] = useState();
  const [genre, setGenre] = useState();
  const [color, setColor] = useState();

  const uploadImage = async (event) => {
    event.preventDefault();

    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((byte) => {
      console.log(
        "🚀 ~ file: ArtworkPost.js ~ line 22 ~ uploadBytes ~ byte",
        byte
      );

      alert("Image has been Uploaded");
    });

    setTimeout(() => {
      getDownloadURL(imageRef).then((url) => {
        // return resolve(url);
        handleSubmit(url);
        return url;
      });
    }, 3000);
  };

  const handleChange = (event) => {
    if (event.target.name == "name") {
      setName(event.target.value);
    } else if (event.target.name == "des") {
      setDes(event.target.value);
    } else if (event.target.name == "canvas") {
      setCanvas(event.target.value);
    } else if (event.target.name == "price") {
      setPrice(event.target.value);
    } else if (event.target.name == "qty") {
      setQty(event.target.value);
    } else if (event.target.name == "genre") {
      setGenre(event.target.value);
    } else if (event.target.name == "color") {
      setColor(event.target.value);
    }
  };
  const handleSubmit = async (url) => {
    // Promise.resolve(uploadImage).then((img) => console.log("image", img));

    const payload = { name, des, canvas, price, qty, genre, color, img: url };
    console.log("Payload:", payload);

    try {
      let res = await fetch("http://localhost:3002/postartwork", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(payload),
      });

      let response = await res.json();
      console.log("token", Cookies.get("token"));
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="p-6 bg-blue-100 rounded  ">
        <form onSubmit={uploadImage}>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="name"
              name="name"
              id="name"
              value={name}
              className="block py-2.5 px-0 w-full text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              onChange={handleChange}
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              className="block py-2.5 px-0 w-full text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
              onChange={handleChange}
            />
            <label
              htmlFor="description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Description
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="canvas"
              name="canvas"
              id="canvas"
              className="block py-2.5 px-0 w-full text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={canvas}
              onChange={handleChange}
            />
            <label
              htmlFor="canvas"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                className="block py-2.5 px-0 w-full text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                value={qty}
                placeholder=" "
                required
                onChange={handleChange}
              />
              <label
                htmlFor="qty"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Quantity
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="number"
                name="price"
                id="price"
                className="block py-2.5 px-0 w-full text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={price}
                onChange={handleChange}
              />
              <label
                htmlFor="price"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Unit Price
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="genre"
                id="genre"
                className="block py-2.5 px-0 w-full text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={genre}
                onChange={handleChange}
              />
              <label
                htmlFor="genre"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Genre
              </label>
            </div>
            <div className="relative z-0 mb-2 w-full group">
              <input
                type="text"
                name="color"
                id="color"
                className="block py-2.5 px-0 w-full text-sm dark:text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={color}
                onChange={handleChange}
              />
              <label
                htmlFor="color"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Color
              </label>
            </div>

            <div className="relative z-0 mb-2 w-full group">
              <label
                className="block mb-2 text-sm dark:text-gray-900"
                for="file_input"
              >
                Upload an Image of Artwork
              </label>
              <input
                className="block w-full text-sm  bg-gray-50 rounded  border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-blue-400"
                id="file_input"
                type="file"
                onChange={(event) => {
                  setImageUpload(event.target.files[0]);
                }}
              ></input>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Post Artwork
          </button>
        </form>
      </div>
    </>
  );
};

export default ArtworkPost;
