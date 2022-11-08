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
