import Image from "next/image";
import Link from "next/link";
import BathingSuitImage from "@/public/home/bathingsuit.webp";
import GogglesImage from "@/public/home/goggles.webp";
import JacketImage from "@/public/home/jacket.webp";
import ShortsImage from "@/public/home/shorts.webp";
import SwimOutletImage from "@/public/home/swimoutlet.webp";

const SwimOutlet = () => {
  return (
    <div className="flex flex-col items-center w-full relative">
      <div className="bg-swim-blue-100 absolute w-full bottom-[20%] h-[30vh]" />

      <div className="absolute -rotate-90 -left-[10%] bottom-[30%]">
        <p className="text-swim-blue-300 text-7xl">Arena Storefront</p>
        <p className="text-white text-6xl font-bold text-center">
          Arena Storefront
        </p>
      </div>

      <Image src={SwimOutletImage} alt="Swim Outlet Logo" />

      <div className="grid grid-cols-3 gap-10 mt-10 items-center z-10 pl-[10%]">
        <Link href="https://www.swimoutlet.com/" target="_blank">
          <Image
            src={BathingSuitImage}
            alt="Bathing Suit Image"
            className="hover:opacity-90 transition-opacity ease-in-out"
          />
        </Link>
        <Link href="https://www.swimoutlet.com/" target="_blank">
          <Image
            src={JacketImage}
            alt="Jacket Image"
            className="hover:opacity-90 transition-opacity ease-in-out"
          />
        </Link>
        <div className=" flex flex-col justify-between h-full">
          <Link href="https://www.swimoutlet.com/" target="_blank">
            <Image
              src={GogglesImage}
              alt="Goggles Image"
              className="hover:opacity-90 transition-opacity ease-in-out"
            />
          </Link>
          <Link href="https://www.swimoutlet.com/" target="_blank">
            <Image
              src={ShortsImage}
              alt="Shorts Image"
              className="hover:opacity-90 transition-opacity ease-in-out"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SwimOutlet;
