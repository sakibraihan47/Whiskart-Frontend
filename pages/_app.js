import Footer from "../components/Footer/Footer";
import { NavbarArtist } from "../components/Navbar/NavbarArtist";
import { AuthContextProvider } from "../context/GlobalState";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <NavbarArtist />
      <Component {...pageProps} /> <Footer />{" "}
    </AuthContextProvider>
  );
}

export default MyApp;
