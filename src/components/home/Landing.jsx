import Image from "next/image";
import image1 from "@/public/home/landing.webp";
import image2 from "@/public/waveBottom.webp";
import Button from "../Button";

const Landing = () => {
  return (
    <div className="w-screen relative -translate-y-5">
      <Image src={image1} alt="Background image 1" className="w-screen" />
      <div className="w-[50%] h-full bg-swim-blue-200/60 top-[0%] absolute"></div>
      <div className="w-screen h-full bg-swim-blue-200/15 top-[0%] absolute"></div>
      <Image
        src={image2}
        alt="Background image 2"
        className="w-screen top-[85%] absolute"
      />

      <div className="flex flex-col absolute top-[40%] left-[5%]">
        <p className="font-bold text-white text-[60px] font-urbanist">
          UCR Club Swim
        </p>
        <p className="font-semibold text-white text-[32px] font-urbanist ml-10 -mb-3">
          Lorem ipsum dolor sit amet, consectetur
        </p>
        <p className="font-semibold text-white text-[32px] font-urbanist ml-10">
          adipiscing elit, sed do eiusmod
        </p>
        <Button link="/join" text="Join" />
      </div>
    </div>
  );
};

export default Landing;
