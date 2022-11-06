import Head from "next/head";
import Image from "next/image";
import { NavbarSignIn } from "../components/NavbarSignIn";
import { NavbarArtist } from "../components/NavbarArtist";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import SignUp from "../components/Signup";

export default function Home() {
  return (
    <>
      <SignUp />
    </>
  );
}
