import Image from "next/image";
import image1 from "@/public/join/infocard.webp";
import Link from "next/link";

const InfoCard = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="hover:opacity-80 active:opacity-50 relative h-full w-fill"
    >
      <Image
        src={image1}
        alt="InfoPicture"
        className="object-contain h-full w-39 rounded-lg"
      />
      <div class="absolute bottom-[15%] w-full py-2.5 bottom-0 inset-x-0 bg-swim-blue-200 text-white text-2xl rounded-lg font-bold text-start px-8">
        {text}
      </div>
    </Link>
  );
};

export default InfoCard;
