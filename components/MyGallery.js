// import getAllArtwork from "../context/Artwork/artworkState";

// function MyGallery({ artworks }) {
//   console.log("this", artworks);
//   return (
//     <>
//       <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
//         <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//           <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" class="py-3 px-6">
//                 Artwork
//               </th>
//               <th scope="col" class="py-3 px-6">
//                 Description
//               </th>
//               <th scope="col" class="py-3 px-6">
//                 Color
//               </th>
//               <th scope="col" class="py-3 px-6">
//                 Genre
//               </th>
//               <th scope="col" class="py-3 px-6">
//                 Canvas
//               </th>
//               <th scope="col" class="py-3 px-6">
//                 Price
//               </th>
//               <th scope="col" class="py-3 px-6">
//                 Posted On
//               </th>
//               <th scope="col" class="py-3 px-6">
//                 <span class="sr-only">Edit</span>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
//               <th
//                 scope="row"
//                 class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//               >
//                 gfdg
//               </th>
//               <td class="py-4 px-6">dgdfgdf</td>
//               <td class="py-4 px-6">dfgfdg</td>
//               <td class="py-4 px-6">fsdfdsf</td>
//               <td class="py-4 px-6">fsdfds</td>
//               <td class="py-4 px-6">ghgfhf</td>
//               <td class="py-4 px-6">hfghfg</td>

//               <td class="py-4 px-6 text-right">
//                 <a
//                   href="#"
//                   class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
//                 >
//                   Edit
//                 </a>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

// export const getServerSideProps = async (context) => {
//   console.log(
//     "🚀 ~ file: MyGallery.js ~ line 70 ~ getServerSideProps ~ context",
//     context
//   );
//   try {
//     const res = await fetch("http://localhost:3002/getartwork", {
//       method: "GET",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });

//     const data = await res.json();
//     console.log(
//       "🚀 ~ file: MyGallery.js ~ line 13 ~ GetServerSideProps ~ data",
//       data
//     );

//     return {
//       props: { artworks: data },
//     };
//   } catch (error) {
//     console.log(
//       "🚀 ~ file: MyGallery.js ~ line 9 ~ GetServerSideProps ~ error",
//       error
//     );
//   }
// };

// export default MyGallery;
