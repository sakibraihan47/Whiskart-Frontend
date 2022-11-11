import { NavbarArtist } from "../components/NavbarArtist";

const homepage = () => {
  return (
    <>
      <section className="py-6 text-gray-400 bg-gray-900 body-font h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://blog.artsper.com/wp-content/uploads/2019/01/nuit-e%CC%81toile%CC%81e.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-pink-500 text-bold text-xs tracking-widest title-font mb-1">
                  Jason Momoa
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  Star Trek
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://artinteriors.ca/assets/2022-06-18-115311-537-2022-06-17-191747-270-2022-06-17-151649-268-Unknown-1.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-pink-500 text-bold text-xs tracking-widest title-font mb-1">
                  Alison
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  Treehouse
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://artinteriors.ca/assets/orig-166687518624432-1666875186-fe15b.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-pink-500 text-bold text-xs tracking-widest title-font mb-1">
                  George
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://blog.artsper.com/wp-content/uploads/2019/02/village.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-pink-500 text-bold text-xs tracking-widest title-font mb-1">
                  Samantha
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  Sacred Field
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://artinteriors.ca/assets/orig-166791857824522-1667918578-a98df.jpeg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-pink-500 text-bold text-xs tracking-widest title-font mb-1">
                  Tim Cook
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  Poverty
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://blog.artsper.com/wp-content/uploads/2019/02/nuit-e%CC%81toile%CC%81e-rhone.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-pink-500 text-bold text-xs tracking-widest title-font mb-1">
                  Alex Rins
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  Midnight Blood
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://artinteriors.ca/assets/2022-10-25-204815-295-Fern-alley-16x16-ooc-700.png"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-pink-500 text-bold text-xs tracking-widest title-font mb-1">
                  James
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  Abstract Blue
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://artinteriors.ca/assets/orig-163555585022569-1635555850-a386b.jpg"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-pink-500 text-bold text-xs tracking-widest title-font mb-1">
                  Patrick Blue
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  The eyes
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default homepage;
