import MyGallery from "../components/MyGallery";
import Cookies from "js-cookie";

const Edit = ({ artwork }) => {
  console.log("🚀 ~ file: gallery.js ~ line 5 ~ Gallery ~ artworks", artwork);

  return (
    <>
      {/* {artworks.map((artwork) => ( */}
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-purple-900">
        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Artwork
                </th>
                <th scope="col" class="py-3 px-6">
                  Description
                </th>
                <th scope="col" class="py-3 px-6">
                  Color
                </th>
                <th scope="col" class="py-3 px-6">
                  Genre
                </th>
                <th scope="col" class="py-3 px-6">
                  Canvas
                </th>
                <th scope="col" class="py-3 px-6">
                  Price
                </th>
                <th scope="col" class="py-3 px-6">
                  Posted On
                </th>
                <th scope="col" class="py-3 px-6">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {artwork.name}
                </th>
                <td class="py-4 px-6"> {artwork.des}</td>
                <td class="py-4 px-6"> {artwork.color}</td>
                <td class="py-4 px-6"> {artwork.genre}</td>
                <td class="py-4 px-6"> {artwork.canvas}</td>
                <td class="py-4 px-6"> {artwork.price}</td>
                <td class="py-4 px-6">{artwork.createdAt}</td>

                <td class="py-4 px-6 text-right">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* ))} */}
    </>
  );
};

export const getServerSideProps = async (context) => {
  console.log(
    "🚀 ~ file: edit.js ~ line 75 ~ getServerSideProps ~ context",
    context.params
  );
  const token = context.req.cookies.token;
  if (!token) {
    return { redirect: { permanent: true, destination: "/" }, props: {} };
  }
  const id = "637117b0d959022912b6f10a";
  let res = await fetch("http://localhost:3002/getthisartwork/" + id, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  });
  res = await res.json();
  console.log("🚀 ~ file: edit.js ~ line 90 ~ getServerSideProps ~ res", res);

  // return {
  //   props: { artwork: res },
  // };
  return {
    props: { artwork: res.artworks },
  };
};

export default Edit;
