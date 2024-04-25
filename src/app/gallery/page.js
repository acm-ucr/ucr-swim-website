"use client";
import { PICTURES } from "@/data/pictures.js";
import PageTitle from "@/components/PageTitle";
import gallery from "@/public/gallery/gallery.webp";
import Picture from "@/components/gallery/Picture.jsx";

const Gallery = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <PageTitle title="Gallery" image={gallery} />

      <p className="w-4/5 text-4xl text-swim-blue-400 font-bold my-[10vh]">
        Check Out Our Photos
      </p>

      <div className="lg:grid lg:grid-cols-2 w-4/5">
        {PICTURES.map((picture, index) => (
          <Picture
            key={index}
            text={picture.text}
            link={picture.link}
            image={picture.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
