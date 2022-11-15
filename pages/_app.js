import Footer from "../components/Footer/Footer";
import { NavbarDynamic } from "../components/Navbar/NavbarDynamic";
import { AuthContextProvider } from "../context/GlobalState";
import ArtworkState from "../context/Artwork/artworkState";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      {/* <ArtworkState> */}
      <NavbarDynamic />
      <Component {...pageProps} /> <Footer /> {/* </ArtworkState> */}
    </AuthContextProvider>
  );
}

export default MyApp;
