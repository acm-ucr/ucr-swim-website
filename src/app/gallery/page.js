"use client";
import { PICTURES } from "@/data/pictures.js";
import PageTitle from "@/components/PageTitle";
import gallery from "@/public/gallery/gallery.webp";
import Picture from "@/components/gallery/Picture.jsx";
import useView from "@/components/useView.jsx";

const Gallery = () => {
  const [inView, ref] = useView();
  return (
    <div className="w-full flex flex-col items-center">
      <PageTitle title="Gallery" image={gallery} />

      <p className="w-4/5 text-2xl md:text-4xl text-swim-blue-400 font-bold md:my-[10vh] my-5">
        Check Out Our Photos
      </p>

      <div ref={ref} className="lg:grid lg:grid-cols-2 w-4/5">
        {PICTURES.map((picture, index) => (
          <div
            key={index}
            className={`${
              inView &&
              `animate-flip-up animate-once animate-ease-out animate-duration-[4000ms]`
            }`}
          >
            <Picture
              text={picture.text}
              link={picture.link}
              image={picture.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
