import Link from "next/link";
import Image from "next/image";

const Picture = ({ text, link, image }) => {
  return (
    <Link href={link} target="_blank">
      <div className="group relative flex justify-center items-center">
        <p className="absolute opacity-0 group-hover:opacity-100 text-white z-10 font-semibold text-4xl duration-150">
          {text}
        </p>
        <div className="opacity-0 group-hover:opacity-50 bg-gray-900 w-full h-full absolute duration-150"></div>
        <Image src={image} alt="gallery image" />
      </div>
    </Link>
  );
};

export default Picture;
