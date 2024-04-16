import Link from "next/link";
import Image from "next/image";

const Picture = ({ text, link, image }) => {
  return (
    <Link href={link} target="_blank">
      <div className="group relative flex justify-center items-center">
        <p className="absolute opacity-0 group-hover:opacity-100 text-white z-10 group-hover:font-semibold group-hover:text-4xl">
          {text}
        </p>
        <div className="opacity-0 group-hover:opacity-50 bg-gray-900 w-full h-full absolute group-hover:duration-150"></div>
        <Image src={image} />
      </div>
    </Link>
  );
};

export default Picture;
