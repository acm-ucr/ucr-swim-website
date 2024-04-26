import Image from "next/image";
import BathingSuitImage from "@/public/home/bathingsuit.webp";
import GogglesImage from "@/public/home/goggles.webp";
import JacketImage from "@/public/home/jacket.webp";
import ShortsImage from "@/public/home/shorts.webp";
import SwimOutletImage from "@/public/home/swimoutlet.webp";
import Button from "../Button";
const SwimOutlet = () => {
  return (
    <div className="w-full flex flex-col items-center md:h-[105vh]">
      <div className="flex items-center w-full relative">
        <div className="flex flex-col items-center w-[30%] -rotate-90 text-nowrap pr-[10%]">
          <p className="text-swim-blue-400 text-xl md:text-6xl 2xl:text-7xl">
            Arena Storefront
          </p>
          <p className="text-white text-sm md:text-5xl 2xl:text-6xl font-bold">
            Arena Storefront
          </p>
        </div>

        <div className="w-[55%]">
          <Image
            src={SwimOutletImage}
            alt="Swim Outlet Logo"
            className=" object-cover w-3/5"
          />

          <div className=" flex mt-10 w-full justify-between object-contain">
            <Image
              src={BathingSuitImage}
              alt="Bathing Suit Image"
              className="w-[31%] object-cover"
            />
            <Image
              src={JacketImage}
              alt="Jacket Image"
              className="w-[31%] object-cover"
            />

            <div className="flex flex-col justify-between w-[31%]">
              <Image src={GogglesImage} alt="Goggles Image" className="mb-2" />
              <Image src={ShortsImage} alt="Shorts Image" />
            </div>
          </div>
        </div>

        <div className="bg-swim-blue-100 absolute w-full bottom-[15%] h-[12vh] md:h-[40vh] -z-10" />
      </div>
      <Button
        link="https://www.swimoutlet.com/collections/ucrclubswim?groupid=17634"
        text="Visit Store"
        target="_blank"
      />
    </div>
  );
};

export default SwimOutlet;
