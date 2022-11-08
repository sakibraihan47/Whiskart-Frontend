const Homepage = () => {
  return (
    <>
      <main className="relative h-screen flex items-center px-6 lg:px-32 text-white bg-gradient-to-r from-gray-800 to-purple-900">
        <section className="w-screen md:w-9/12 xl:w-8/12 bg-hero-p h-96 w-full">
          <span className="font-raleway font-bold uppercase tracking-widest">
            WELCOME TO WHISKART
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-pink-500">
            imagine.
            <br />
            create.
            <br />
            share.
          </h1>
          <p className="font-bold mb-1">
            An Interactive online platform for artists and art enthusiasts
          </p>
          <p>Redefine artwork in a modern way...</p>

          <a
            href="/pages/signup.js"
            className=" my-6 font-bold text-gray-900 bg-gray-100 hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
          >
            Join Whiskart
          </a>
        </section>
      </main>
    </>
  );
};

export default Homepage;
