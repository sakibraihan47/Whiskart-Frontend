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
