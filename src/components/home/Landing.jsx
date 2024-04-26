import Image from "next/image";
import image1 from "@/public/home/landing.webp";
import image2 from "@/public/waveBottom.webp";
import Button from "../Button";

const Landing = () => {
  return (
    <div className="w-full relative mb-[3%]">
      <Image src={image1} alt="Background image 1" className="w-screen" />
      <div className="flex justify-center flex-col w-1/2 h-full bg-swim-blue-200/70 top-0 absolute pl-[5%]">
        <p className="font-bold text-white text-2xl md:text-6xl mb-4 mt-[10%] md:mt-[0%]">
          UCR Club Swim
        </p>
        <p className="font-semibold text-white text-xs md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <Button link="/join" text="Join" color="text-swim-blue-400" />
      </div>

      <Image
        src={image2}
        alt="Background image 2"
        className="w-screen top-[85%] absolute transform -scale-x-100"
      />
    </div>
  );
};

export default Landing;
