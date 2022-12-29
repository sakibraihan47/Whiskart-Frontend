import { useState, useEffect } from "react";
import storage from "../../firebase";
import Cookies from "js-cookie";
import Image from "next/image";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
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
import { useRouter } from "next/router";

const artworkInfo = ({ artwork, token, buyer, recommend}) => {
console.log("🚀 ~ file: [id].js:24 ~ artworkInfo ~ recommend", recommend)

  // const check =(recommend)=>{
  //   console.log("Click Event",recommend)
  // }


  console.log("🚀 ~ file: [id].js:23 ~ artworkInfo ~ buyer", buyer);
  const { user, updateCartCount } = useContext(AuthContext);
  const router = useRouter();
  // const [recArt, setRecArt] = useState([]);
  const [chkCart, setCheckCart] = useState([]);
  const [chkLike, setCheckLike] = useState()
  const [count, setCount] = useState(artwork.like)
  const [cartContent, setCartContent] = useState([]);
  console.log("🚀 ~ file: [id].js:24 ~ artworkInfo ~ chkCart", count);
  
  // useEffect(() => {
  //   // recommendTo();
  //   // checkCart();

  // }, [cartContent]);
  
  useEffect(() => {
    // recommendTo();
    console.log("🚀 ~ file: [id].js:49 ~ artworkInfo ~ artwork", artwork)

  }, [artwork]);
  useEffect(() => {
    // recommendTo();
    console.log("🚀 ~ file: [id].js:49 ~ artworkInfo ~ artwork", artwork)

  }, [cartContent]);

 
  
  
  // const recommendTo = async () => {
  //   try {
  //     let res = await fetch("http://localhost:3002/recommendation", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({ user: buyer, artwork: artwork._id }),
  //     });
  //     const recommendationList = await res.json();
  //     setRecArt(recommendationList);
  //     console.log(
  //       "🚀 ~ file: [id].js:44 ~ recommendTo ~ recommendationList",
  //       recommendationList
  //     );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };



const like = async() =>{
  
  let counter = count + 1
  setCount(counter)
  console.log("🚀 ~ file: [id].js:81 ~ like ~ counter", counter)
    console.log("🚀 ~ file: [id].js:84 ~ like ~ artwork.id", artwork._id)
  const res = await fetch("http://localhost:3002/like/" + artwork._id, {
    
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({like: counter}),
    
  });

  const data = await res.json();
 
}


  const addCart = async () => {
   
    // router.reload(window.location.pathname);

  
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
        setCartContent(response);
        console.log("🚀 ~ file: [id].js:36 ~ addCart ~ response", response);

        notifyCart();
      } catch (error) {
        console.log(error);
      }
    
  };




  const checkCart = async () => {

    console.log("🚀 ~ file: [id].js:102 ~ checkCart ~ artwork", artwork)
      console.log("🚀 ~ file: [id].js:102 ~ checkCart ~ buyer", buyer)

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

    if (data === true) {
      notifyCartExist();
    } else if (data === false) {
      addCart()
      updateCartCount(1)
    }
    
  };

  return (
    <>
      <ToastContainer />
      {user && user?.role == "artist" && (
        <div className="flex h-screen items-center m-b justify-center px-6 bg-gradient-to-r from-gray-800 to-black">
          <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="p-8 rounded-t-lg rounded-md"
                src={artwork.img}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {artwork.name}
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5 text-pink-600">
                <h1>
                  {artwork.artist.firstName} {artwork.artist.lastName}
                </h1>
              </div>
              <div className="flex items-center mt-2.5 mb-5">
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
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-pink-600">
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
        <div className="flex h-screen items-center m-b justify-center px-16 bg-gradient-to-r from-gray-800 to-black">
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
                  className="rounded-t-lg h-64 w-full "
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
                  <h1 className="font-bold text-xs mr-1  text-amber-100">Genre</h1>
                  <span className="text-xs font-bold mr-1  font-raleway uppercase px-2.5 rounded bg-blue-200 text-blue-800 ">
                    {artwork.genre}
                  </span>
                  <h1 className="font-bold text-xs mr-1 text-amber-100">Canvas</h1>
                  <span className="text-xs font-bold mr-1  font-raleway uppercase px-2.5 rounded bg-blue-200 text-blue-800 ">
                    {artwork.canvas}
                  </span>
                  <h1 className="font-bold  text-xs mr-1  text-amber-100">Color</h1>
                  <span className="text-xs font-bold mr-1  font-raleway uppercase px-2.5 rounded bg-blue-200 text-blue-800 ">
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
                      onClick={(e) => {
                       
                        console.log("🚀 ~ file: [id].js:245 ~ artworkInfo ~ e", e)
                        e.preventDefault()
                        checkCart()
                      }
                    }
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
                     <div class="flex flex-col space-x-1">
                    
                    <div
                      class="bg-pink-600 text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row"
                      onClick={like}>
                  
                      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg>



<span>{count}</span>
                    </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          
          {recommend.length >0 && (
          <div className="flex ml-4 w-72 h-screen justify-center items-center">
            {/* <a href="#">
              <img
                className="p-8 rounded-lg"
                src={artwork.img}
                alt="product image"
              />
            </a> */}
            
            <div className="container w-full">
            <h1 className=" text-l uppercase text-center font-bold text-pink-600 font-raleway">
                  Recommended for you
                </h1>
              <div className="  min-h-96  bg-gray-800 w-full rounded-xl p-2">
             
                <div className=" flex flex-col p-2 max-h-96 overflow-y-auto overflow-x-hidden">
                  {recommend.map((recommend) => (
                    <div 
                    >
                      <div className="w-48 mx-auto">
                     
                      <Link href={"./"+ recommend._id}
                    >
                        <a className="block relative h-24 overflow-hidden">
                       

                          <img
                            alt="ecommerce"
                            className="object-cover shadow-md object-center rounded w-full h-full block"
                            src={recommend.img}
                           
                          />
                        </a>
                        </Link>
                        <div className="mb-1">
                          {/* <h3 className="text-pink-500 text-bold text-xs tracking-widest title-font mb-1">
                            {recommend.artist.firstName}{" "}
                            {recommend.artist.lastName}
                          </h3> */}

                          <a>
                            {/* onClick={check(recommend)}> */}
                            <h2 className="text-gray-400 title-font text-s font-medium">
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
           )}
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;
  console.log("🚀 ~ file: [id].js:292 ~ getServerSideProps ~ token", token)
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




  let rec = await fetch("http://localhost:3002/recommendation", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ user: buyer, artwork: id }),
      });
      const recommendationList = await rec.json();
      // setRecArt(recommendationList);
      console.log(
        "🚀 ~ file: [id].js:44 ~ recommendTo ~ recommendationList",
        recommendationList
      );

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
    props: { artwork: res.artworks, token: token, buyer: buyer, recommend: recommendationList},
  };
};

export default artworkInfo;
