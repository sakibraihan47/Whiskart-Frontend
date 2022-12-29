import { useEffect, useState, useContext } from "react";
import Counter from "../components/Counter";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { NavbarDynamic } from "../components/Navbar/NavbarDynamic";
import { AuthContext } from "../context/GlobalState";

const cart = ({ cart }) => {
  //   const UserContext = createContext()
  // const item=({ cart }) =>{

  //   if (cart) {
  //    return (
  //     <UserContext.Provider value={cart.length}>
  //       <NavbarDynamic/>

  //       </UserContext.Provider>
  //    );
  //   } else {
  //    return (
  //     <></>
  //    );
  //   }}

  

  // const { updateCartCount } = useContext(AuthContext);
  const { updateCartCount } = cart.length


  

  let arr = [];
  arr = cart.map((cart) => cart.artwork.price);
  let sum = 0;
  let i = 0;
  for (i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
  }

  // const [id, setItem] = useState();
  const router = useRouter();

  let set = (id) => {
    fetch(`http://localhost:3002/deletefromcart/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
     
      
    });

   
    router.reload(window.location.pathname);
  };

    

  // const deleteThis = async () => {
  //   try {
  //     let res = await fetch(`http://localhost:3002/deletefromcart/${id}`, {
  //       method: "DELETE",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${Cookies.get("token")}`,
  //       },
  //     });

  //     let response = await res.json();

  //     console.log("response", response);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  return (
    <div className="flex bg-gray-800 h-screen items-center ">
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10 rounded-xl mr-2">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Your Cart</h1>
              <h2 className="font-semibold text-2xl">Items: {cart.length}</h2>
            </div>

            <div className="flex mt-10 mb-5 ">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Artwork Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Canvas Size
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            <div className="overflow-y-auto overflow-x-hidden max-h-96">
              {cart.map((cart, index) => (
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-2/5">
                    <div className="">
                      <img
                        className="h-24 w-36"
                        src={cart.artwork.img}
                        alt="cart"
                        key={index}
                      />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">
                        {cart.artwork.name}
                      </span>
                      <span className="text-red-500 text-xs">
                        {cart.artwork.artist.firstName}{" "}
                        {cart.artwork.artist.lastName}
                      </span>

                      <a
                        href="#"
                        className="border border-rose-500 p-2 w-16 rounded hover:bg-red-500 hover:text-white font-bold text-black bg-white  text-xs"
                        value={cart.artwork._id}
                        onClick={() => {
                          set(cart._id);
  // updateCartCount(-1)

                        }}
                      >
                        Remove
                        {/* {cart._id} */}
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    {/* <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      value="1"
                    />

                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg> */}
                    {/* <Counter /> */}
                    {cart.artwork.canvas}
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {cart.artwork.price}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {cart.artwork.price}
                  </span>
                </div>
              ))}
            </div>

            {cart.length == 0 && (
              <div className="text-center font-bold font-raleway uppercase text-xl text-gray-700 tracking-widest mt-12 mb-12 " >No Items in your Cart</div>
            )}
            <a
              href="/homepage"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Browsing
            </a>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10 bg-amber-50 rounded-xl">
            <h1 className="font-semibold text-2xl border-b pb-8 ">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {cart.length}
              </span>
              <span className="font-semibold text-sm">{sum}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping charges - $10.00</option>
              </select>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>{sum}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps = async (context) => {
//   const token = context.req.cookies.token;

//   if (!token) {
//     return { redirect: { permanent: true, destination: "/" }, props: {} };
//   }
//   const res = await fetch("http://localhost:3002/getmycart", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",

//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const data = await res.json();

//   return {
//     props: { cart: data.cart },
//   };
// };

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;

  const user = JSON.parse(context.req.cookies.user).id;
  console.log(
    "🚀 ~ file: gallery.js ~ line 78 ~ getServerSideProps ~ user",
    user
  );
  if (!token) {
    return { redirect: { permanent: true, destination: "/" }, props: {} };
  }
  const res = await fetch("http://localhost:3002/getmycart/" + user, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return {
    props: { cart: data.cart },
  };
};

export default cart;
