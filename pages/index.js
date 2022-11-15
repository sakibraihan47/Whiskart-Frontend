import Head from "next/head";
import Image from "next/image";

import Link from "next/link";
import Avatar from "../components/Avatar";

export default function Home() {
  return (
    <>
      <main className="bg-hero h-screen flex items-center px-6 lg:px-32 text-white bg-gradient-to-r from-gray-800 to-purple-900">
        <section className="w-screen md:w-9/12 xl:w-8/12">
          <span className="font-raleway font-bold uppercase tracking-widest">
            W
          </span>
          <span className=" font-bold uppercase tracking-widest">
            ELCOME TO
          </span>
          <span className=" ml-1 font-bold uppercase tracking-widest font-raleway">
            W
          </span>
          <span className=" font-bold uppercase tracking-widest">HISKART</span>
          <h1 className=" text-3xl lg:text-5xl font-bold text-pink-500">
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
            href="/signup"
            className="animate-pulse my-6 font-bold text-gray-900 bg-gray-100 hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
          >
            Join Whiskart
          </a>
        </section>
        <Avatar className="" />
      </main>
    </>
  );
}
