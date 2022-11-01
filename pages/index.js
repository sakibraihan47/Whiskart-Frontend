import Head from "next/head";
import Image from "next/image";
import { NavbarSignIn } from "../components/NavbarSignIn";
import { NavbarArtist } from "../components/NavbarArtist";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <>
      <NavbarArtist />
    </>
  );
}
