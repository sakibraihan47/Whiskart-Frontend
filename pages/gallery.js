import MyGallery from "../components/MyGallery";

const Gallery = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-800 to-purple-900">
        <MyGallery />
      </div>
    </>
  );
};

export default Gallery;
