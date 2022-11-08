import { NavbarArtist } from "./NavbarArtist";
import Footer from "./Footer";
const LayoutArtist = ({ children }) => {
  return (
    <>
      <NavbarArtist />
      {children}
      <Footer />
    </>
  );
};

export default LayoutArtist;
