const artistList = ({ artists }) => {
  return (
    <section className="py-6 text-gray-400 bg-gray-900 body-font h-screen">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-white font-bold font-raleway text-xl uppercase bg-gray-800 p-2 rounded-lg ">
          Meet the Artists of Whiskart:
        </h1>
        <div className="flex flex-wrap m-4">
          {artists.map((artist) => (
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="mt-4">
                <h3 className="text-pink-500 text-bold text-xs tracking-widest title-font mb-1">
                  {artist.email}
                </h3>

                <a>
                  <h2 className="font-raleway text-white uppercase title-font text-lg font-medium">
                    {artist.firstName} {artist.lastName}
                  </h2>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    // <section className="py-6 text-gray-400 bg-gray-900 body-font h-screen">
    //   <div className="container px-5 py-24 mx-auto">
    //     <h1 className="text-white font-bold font-raleway text-xl uppercase bg-gray-800 p-2 rounded-lg ">
    //       Meet the Artists of Whiskart:
    //     </h1>
    //     {/* {artists.map((artist) => ( */}
    //     <div className="flex flex-wrap m-4">
    //       <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    //         <div className="max-w-sm p-6 bg-white border border-pink-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-pink-700">
    //           <a href="#">
    //             <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //               {/* {artist.firstName}
    //               {artist.lastName} */}
    //             </h5>
    //           </a>
    //           <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
    //             {/* {artist.email} {artist.role} */}
    //           </p>
    //           <a
    //             href="#"
    //             class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //           >
    //             Read Bio/Social
    //             <svg
    //               aria-hidden="true"
    //               class="w-4 h-4 ml-2 -mr-1"
    //               fill="currentColor"
    //               viewBox="0 0 20 20"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 fill-rule="evenodd"
    //                 d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    //                 clip-rule="evenodd"
    //               ></path>
    //             </svg>
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     {/* ))} */}
    //   </div>
    // </section>
  );
};
export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;

  if (!token) {
    return { redirect: { permanent: true, destination: "/" }, props: {} };
  }
  const res = await fetch("http://localhost:3002/getartist", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  return {
    props: { artists: data.artists },
  };
};

export default artistList;
