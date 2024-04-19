import Picture from "@/components/gallery/Picture.jsx";
import PageTitle from "@/components/PageTitle";
import gallery from "@/public/gallery/gallery.webp";
import food from "@/public/gallery/food.JPG";
import group from "@/public/gallery/group.webp";
import guys from "@/public/gallery/guys.webp";
import intersquad from "@/public/gallery/intersquad.webp";
const Gallery = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <PageTitle title="Gallery" image={gallery} />

      <p className="w-4/5 text-4xl text-swim-blue-400 font-bold my-[10vh]">
        Check Out Our Photos
      </p>

      <div className="grid grid-cols-2 w-4/5">
        <Picture text="Fall" link="https://www.google.com/" image={group} />
        <Picture text="Winter" link="https://www.google.com/" image={food} />
        <Picture
          text="Spring"
          link="https://www.google.com/"
          image={intersquad}
        />
        <Picture text="Summer" link="https://www.google.com/" image={guys} />
      </div>
    </div>
  );
};

export default Gallery;
