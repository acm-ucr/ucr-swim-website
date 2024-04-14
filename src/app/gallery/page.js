import Picture from "@/components/gallery/Picture.jsx";
import testImage from "@/public/home/shorts.webp";

const Gallery = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Picture text="Text" link="https://www.google.com/" image={testImage} />
    </div>
  );
};

export default Gallery;
