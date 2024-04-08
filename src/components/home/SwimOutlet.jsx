import Image from "next/image";
import BathingSuitImage from "@/public/home/bathingsuit.webp";
import GogglesImage from "@/public/home/goggles.webp";
import JacketImage from "@/public/home/jacket.webp";
import ShortsImage from "@/public/home/shorts.webp";
import SwimOutletImage from "@/public/home/swimoutlet.webp";

const SwimOutlet = () => {
  return (
    <div className="bg-pink-200">
      <Image src={SwimOutletImage} alt="Swim Outlet Logo" className="mx-auto"/>
      <div className="bg-swim-blue-100">
        <div className="flex">
          <div className="transform -rotate-90 bg-red-200">
            <p className="text-swim-blue-300 text-6xl text-center">Arena Storefront</p>
            <p className="text-white text-4xl font-bold text-center">Arena Storefront</p>
          </div>
          <Image src={BathingSuitImage} alt="Bathing Suit Image" />
          <Image src={JacketImage} alt="Jacket Image" />
          <div className="">
            <Image src={GogglesImage} alt="Goggles Image" />
            <Image src={ShortsImage} alt="Shorts Image" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default SwimOutlet;
