import Link from "next/link";
import { useRouter } from "next/router";

const homepage = ({ artworks }) => {
  return (
    <>
      {artworks && (
        <section className="py-6 text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="  overflow-x-hidden min-h-96">
              <div className=" flex flex-wrap m-4">
                {artworks.map((artwork) => (
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={artwork.img}
                      />
                    </a>
                    <div className="flex flex-row justify-between">
                      <div className="mt-4">
                        <h3 className="text-pink-500 text-bold text-xs tracking-widest title-font mb-1">
                          {artwork.artist.firstName} {artwork.artist.lastName}
                        </h3>

                        <Link href={"home/" + artwork._id}>
                          <a>
                            <h2 className="text-white title-font text-lg font-medium">
                              {artwork.name}
                            </h2>
                          </a>
                        </Link>
                        <p className="">BDT {artwork.price}.00</p>
                      </div>
                      <div class="flex flex-col space-x-1">
                        <div class="bg-pink-600 text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 mt-4 flex-row">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 1024 1024"
                            class="text-xl"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path>
                          </svg>
                          <span>{artwork.like}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;

  if (!token) {
    return { redirect: { permanent: true, destination: "/" }, props: {} };
  }

  if (token === null) {
    return { redirect: { permanent: true, destination: "/" }, props: {} };
  }
  const res = await fetch("http://localhost:3002/getartworkall", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",

      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  console.log("🚀 ~ file: homepage.js:66 ~ getServerSideProps ~ data", data);

  return {
    props: { artworks: data.artworks },
  };
};

export default homepage;
