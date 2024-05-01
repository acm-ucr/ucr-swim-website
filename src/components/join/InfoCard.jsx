import Image from "next/image";

import Link from "next/link";

const InfoCard = ({ text, link, image }) => {
  return (
    <Link
      href={link}
      className="hover:opacity-80 active:opacity-50 relative duration-300 mt-10 md:mt-0 mx-0.5 md:mx-4 w-1/2 md:w-auto"
    >
      <Image
        src={image}
        alt="InfoPicture"
        className="md:w-60 md:h-72 rounded-2xl h-44"
      />
      <div class="absolute bottom-4 md:bottom-6 w-full pt-2.5 inset-x-0 text-white text-[14px] md:text-xl font-bold md:px-7 px-2">
        {text}
      </div>
    </Link>
  );
};

export default InfoCard;
