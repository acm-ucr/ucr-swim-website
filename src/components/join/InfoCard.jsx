import Image from "next/image";

import Link from "next/link";

const InfoCard = ({ text, link, image }) => {
  return (
    <Link
      href={link}
      className="hover:opacity-80 active:opacity-50 relative duration-300 my-3 md:my-0 md:mx-4"
    >
      <Image
        src={image}
        alt="InfoPicture"
        className="md:w-60 md:h-72 rounded-2xl"
      />
      <div class="absolute bottom-6 w-full pt-2.5 inset-x-0 text-white text-2xl md:text-xl font-bold px-7">
        {text}
      </div>
    </Link>
  );
};

export default InfoCard;
