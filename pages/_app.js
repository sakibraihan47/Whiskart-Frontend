import Footer from "../components/Footer/Footer";
import { NavbarArtist } from "../components/Navbar/NavbarArtist";
import { AuthContextProvider } from "../context/GlobalState";
import ArtworkState from "../context/Artwork/artworkState";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      {/* <ArtworkState> */}
      <NavbarArtist />
      <Component {...pageProps} /> <Footer /> {/* </ArtworkState> */}
    </AuthContextProvider>
  );
}

export default MyApp;
