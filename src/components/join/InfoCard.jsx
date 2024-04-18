import Image from "next/image";
import image1 from "@/public/join/infocard.webp";
import Link from "next/link";

const InfoCard = ({ text1, text2, text3, text4, link }) => {
  return (
    <button className="hover:opacity-80 active:opacity-50 relative h-full w-fill">
      <Link href={link}>
        <Image
          src={image1}
          alt="InfoPicture"
          className="object-contain h-full w-39 rounded-lg"
        />
        <div class="absolute top-[55%] w-full py-2.5 bottom-0 inset-x-0 bg-swim-blue-200 text-white text-2xl rounded-lg font-bold text-start px-8">
          <p>{text1}</p>
          <div className="flex flex-row gap-1">
            <div>
              <p class="text-swim-yellow">{text2} </p>
            </div>
            <div>
              <p>{text3}</p>
            </div>
          </div>
          <p>{text4}</p>
        </div>
      </Link>
      {/* <div className="absolute top-[65%] bg-gradient-to-t from-swim-blue-200 from-70% h-full w-full z-10 rounded-lg">
        <p>Follow our Instagram for general news</p>
      </div> */}
    </button>
  );
};

export default InfoCard;
